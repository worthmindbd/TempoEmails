import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';

const API_BASE = 'https://www.1secmail.com/api/v1/';

export class SecMailClient {
  private static generateRandomString(length: number = 8): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  static async getDomains(): Promise<MailDomain[]> {
    try {
      const res = await fetch(`${API_BASE}?action=getDomainList`);
      if (!res.ok) throw new Error('Failed to fetch 1secmail domains');
      const domains: string[] = await res.json();
      return domains.map((domain, index) => ({
        id: `sec_${index}`,
        domain,
        isActive: true,
        provider: 'secmail' as const,
      }));
    } catch {
      return [
        { id: 'sec_0', domain: '1secmail.com', isActive: true, provider: 'secmail' as const },
        { id: 'sec_1', domain: '1secmail.net', isActive: true, provider: 'secmail' as const },
        { id: 'sec_2', domain: '1secmail.org', isActive: true, provider: 'secmail' as const },
      ];
    }
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domains = await this.getDomains();
    const domain = domainName || domains[0].domain;
    const login = usernamePrefix ? usernamePrefix.toLowerCase().replace(/[^a-z0-9]/g, '') : `tempo${this.generateRandomString(6)}`;
    const address = `${login}@${domain}`;

    return {
      id: address,
      address,
      provider: 'secmail',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(address: string): Promise<MailMessage[]> {
    const [login, domain] = address.split('@');
    if (!login || !domain) return [];

    try {
      const res = await fetch(`${API_BASE}?action=getMessages&login=${encodeURIComponent(login)}&domain=${encodeURIComponent(domain)}`);
      if (!res.ok) throw new Error('Failed to fetch 1secmail messages');
      const items = await res.json();

      return items.map((m: any) => {
        const subject = m.subject || '(No Subject)';
        const otp = extractOtpCode(subject, '');

        return {
          id: String(m.id),
          accountId: address,
          from: {
            address: m.from,
            name: m.from?.split('@')[0] || 'Sender',
          },
          to: [{ address, name: address }],
          subject,
          intro: '',
          seen: false,
          createdAt: m.date || new Date().toISOString(),
          extractedOtp: otp || undefined,
          provider: 'secmail' as const,
        };
      });
    } catch (err) {
      console.warn('1secmail getMessages error:', err);
      return [];
    }
  }

  static async getMessageDetail(address: string, messageId: string): Promise<DetailedMailMessage> {
    const [login, domain] = address.split('@');
    const res = await fetch(`${API_BASE}?action=readMessage&login=${encodeURIComponent(login)}&domain=${encodeURIComponent(domain)}&id=${encodeURIComponent(messageId)}`);
    if (!res.ok) throw new Error('Failed to fetch 1secmail message detail');

    const m = await res.json();
    const subject = m.subject || '(No Subject)';
    const text = m.textBody || '';
    const html = m.htmlBody || '';

    const extractedOtp = extractOtpCode(subject, `${text} ${html}`);
    const verificationLink = extractVerificationLink(html, text);

    return {
      id: String(m.id),
      accountId: address,
      from: {
        address: m.from,
        name: m.from?.split('@')[0] || 'Sender',
      },
      to: [{ address, name: address }],
      subject,
      intro: text.slice(0, 100),
      seen: true,
      createdAt: m.date || new Date().toISOString(),
      text,
      html: html ? [html] : [],
      attachments: (m.attachments || []).map((a: any, i: number) => ({
        id: `att_${i}`,
        filename: a.filename,
        contentType: a.contentType,
        disposition: 'attachment',
        transferEncoding: '',
        related: false,
        size: a.size ?? 0,
        downloadUrl: `${API_BASE}?action=download&login=${login}&domain=${domain}&id=${messageId}&file=${encodeURIComponent(a.filename)}`,
      })),
      extractedOtp: extractedOtp || undefined,
      verificationLink: verificationLink || undefined,
      provider: 'secmail',
    };
  }
}
