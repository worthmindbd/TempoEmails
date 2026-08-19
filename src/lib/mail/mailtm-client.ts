import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';

export class MailTmClient {
  private static generateRandomString(length: number = 10): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static getApiBase(domainOrUrl?: string): string {
    if (!domainOrUrl) return 'https://api.mail.tm';
    if (domainOrUrl.startsWith('http')) return domainOrUrl;
    if (domainOrUrl.includes('westcast') || domainOrUrl.includes('mail.gw')) {
      return 'https://api.mail.gw';
    }
    return 'https://api.mail.tm';
  }

  static async getDomains(): Promise<MailDomain[]> {
    const endpoints = ['https://api.mail.tm', 'https://api.mail.gw'];
    const domains: MailDomain[] = [];

    await Promise.allSettled(
      endpoints.map(async (base) => {
        try {
          const res = await fetch(`${base}/domains`, {
            headers: { Accept: 'application/json' },
          });
          if (!res.ok) return;
          const data = await res.json();
          const items = data['hydra:member'] || data;
          if (Array.isArray(items)) {
            items.forEach((d: any) => {
              if (d.domain && !domains.some((existing) => existing.domain === d.domain)) {
                domains.push({
                  id: d.id || d['@id'] || d.domain,
                  domain: d.domain,
                  isActive: d.isActive ?? true,
                  provider: 'mailtm' as const,
                });
              }
            });
          }
        } catch {}
      })
    );

    return domains;
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domains = await this.getDomains();
    if (!domains.length) {
      throw new Error('No domains available on Mail.tm / Mail.gw');
    }

    const domain = domainName || domains[0].domain;
    const apiBase = this.getApiBase(domain);
    const prefix = usernamePrefix ? usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '') : `tempo.${this.generateRandomString(8)}`;
    const address = `${prefix}@${domain}`;
    const password = `Tmp_${this.generateRandomString(12)}!`;

    // 1. Create account on matching API base
    const createRes = await fetch(`${apiBase}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ address, password }),
    });

    if (!createRes.ok) {
      const errBody = await createRes.json().catch(() => ({}));
      throw new Error(errBody.message || `Account creation failed on ${apiBase} with status ${createRes.status}`);
    }

    const accountData = await createRes.json();

    // 2. Get JWT Token from matching API base
    const tokenRes = await fetch(`${apiBase}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ address, password }),
    });

    if (!tokenRes.ok) {
      throw new Error(`Failed to acquire authentication token from ${apiBase}`);
    }

    const tokenData = await tokenRes.json();

    return {
      id: accountData.id || tokenData.id,
      address,
      token: tokenData.token,
      password,
      apiBase,
      provider: 'mailtm',
      createdAt: accountData.createdAt || new Date().toISOString(),
    };
  }

  static async getMessages(token: string, apiBaseUrl: string = 'https://api.mail.tm'): Promise<MailMessage[]> {
    const apiBase = this.getApiBase(apiBaseUrl);
    try {
      const res = await fetch(`${apiBase}/messages`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          throw new Error('UNAUTHORIZED');
        }
        throw new Error(`Failed to fetch messages: ${res.statusText}`);
      }

      const data = await res.json();
      const items = data['hydra:member'] || data;

      return (Array.isArray(items) ? items : []).map((m: any) => {
        const subject = m.subject || '(No Subject)';
        const intro = m.intro || '';
        const otp = extractOtpCode(subject, intro);

        return {
          id: m.id,
          accountId: m.accountId || '',
          from: {
            address: m.from?.address || 'unknown@domain.com',
            name: m.from?.name || m.from?.address?.split('@')[0] || 'Unknown Sender',
          },
          to: (m.to || []).map((t: any) => ({
            address: t.address,
            name: t.name || t.address,
          })),
          subject,
          intro,
          seen: m.seen ?? false,
          isDeleted: m.isDeleted ?? false,
          createdAt: m.createdAt || new Date().toISOString(),
          extractedOtp: otp || undefined,
          provider: 'mailtm' as const,
        };
      });
    } catch (err) {
      console.warn(`Mail.tm getMessages error (${apiBase}):`, err);
      throw err;
    }
  }

  static async getMessageDetail(token: string, messageId: string, apiBaseUrl: string = 'https://api.mail.tm'): Promise<DetailedMailMessage> {
    const apiBase = this.getApiBase(apiBaseUrl);
    const res = await fetch(`${apiBase}/messages/${messageId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch message detail: ${res.statusText}`);
    }

    const m = await res.json();
    const subject = m.subject || '(No Subject)';
    const text = m.text || '';
    const htmlArr = Array.isArray(m.html) ? m.html : m.html ? [m.html] : [];
    const html = htmlArr.join('\n');

    const extractedOtp = extractOtpCode(subject, `${text} ${html}`);
    const verificationLink = extractVerificationLink(html, text);

    return {
      id: m.id,
      accountId: m.accountId || '',
      from: {
        address: m.from?.address || 'unknown@domain.com',
        name: m.from?.name || m.from?.address?.split('@')[0] || 'Unknown Sender',
      },
      to: (m.to || []).map((t: any) => ({
        address: t.address,
        name: t.name || t.address,
      })),
      subject,
      intro: m.intro || '',
      seen: true,
      isDeleted: m.isDeleted ?? false,
      createdAt: m.createdAt || new Date().toISOString(),
      text,
      html: htmlArr,
      attachments: (m.attachments || []).map((a: any) => ({
        id: a.id,
        filename: a.filename,
        contentType: a.contentType,
        disposition: a.disposition,
        transferEncoding: a.transferEncoding,
        related: a.related ?? false,
        size: a.size ?? 0,
        downloadUrl: a.downloadUrl ? `${apiBase}${a.downloadUrl}` : undefined,
      })),
      extractedOtp: extractedOtp || undefined,
      verificationLink: verificationLink || undefined,
      provider: 'mailtm',
    };
  }

  static async deleteMessage(token: string, messageId: string, apiBaseUrl: string = 'https://api.mail.tm'): Promise<boolean> {
    const apiBase = this.getApiBase(apiBaseUrl);
    try {
      const res = await fetch(`${apiBase}/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return res.status === 204 || res.ok;
    } catch {
      return false;
    }
  }
}
