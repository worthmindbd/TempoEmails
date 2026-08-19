import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';

const API_BASE = 'https://inboxes.com/api/v2';

export class InboxesClient {
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
      const res = await fetch(`${API_BASE}/domain`);
      if (!res.ok) throw new Error('Failed to fetch inboxes.com domains');
      const data = await res.json();
      const list = data.domains || [];

      return list.map((d: any, idx: number) => ({
        id: `inb_${idx}`,
        domain: d.qdn || d.domain || d,
        isActive: true,
        provider: 'inboxes' as const,
      }));
    } catch {
      // Fallback domain list from Inboxes.com
      const fallbacks = [
        'getnada.com',
        'getairmail.com',
        'inboxbear.com',
        'replyloop.com',
        'dropjar.com',
        'robot-mail.com',
        'fivermail.com',
        'temptami.com',
        'tafmail.com',
        'blondmail.com',
        'chapsmail.com',
        'clowmail.com',
        'givmail.com',
        'guysmail.com',
        'vomoto.com',
        'tupmail.com',
        'getmule.com',
        'gimpmail.com',
      ];
      return fallbacks.map((domain, idx) => ({
        id: `inb_${idx}`,
        domain,
        isActive: true,
        provider: 'inboxes' as const,
      }));
    }
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domains = await this.getDomains();
    const domain = domainName || domains[Math.floor(Math.random() * domains.length)]?.domain || 'getnada.com';
    const prefix = usernamePrefix
      ? usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '')
      : `tempo.${this.generateRandomString(8)}`;
    const address = `${prefix}@${domain}`;

    return {
      id: address,
      address,
      provider: 'inboxes',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(address: string): Promise<MailMessage[]> {
    try {
      const res = await fetch(`${API_BASE}/inbox/${encodeURIComponent(address)}`);
      if (!res.ok) throw new Error(`Failed to fetch inbox: ${res.statusText}`);
      const data = await res.json();
      const msgs = data.msgs || [];

      return msgs.map((m: any) => {
        const subject = m.s || '(No Subject)';
        const fromAddr = m.f || 'unknown@domain.com';
        const otp = extractOtpCode(subject, '');

        return {
          id: String(m.uid || m.id),
          accountId: address,
          from: {
            address: fromAddr,
            name: fromAddr.split('@')[0] || 'Sender',
          },
          to: [{ address, name: address }],
          subject,
          intro: '',
          seen: Boolean(m.r),
          createdAt: m.d ? new Date(m.d).toISOString() : new Date().toISOString(),
          extractedOtp: otp || undefined,
          provider: 'inboxes' as const,
        };
      });
    } catch (err) {
      console.warn('Inboxes.com getMessages error:', err);
      return [];
    }
  }

  static async getMessageDetail(address: string, messageId: string): Promise<DetailedMailMessage> {
    const res = await fetch(`${API_BASE}/message/${encodeURIComponent(messageId)}`);
    if (!res.ok) throw new Error('Failed to fetch message detail from inboxes.com');

    const data = await res.json();
    const m = data.msg || data;

    const subject = m.s || m.subject || '(No Subject)';
    const text = m.text || m.textBody || '';
    const html = m.html || m.htmlBody || (text ? `<pre>${text}</pre>` : '');
    const fromAddr = m.f || m.from || 'unknown@domain.com';

    const extractedOtp = extractOtpCode(subject, `${text} ${html}`);
    const verificationLink = extractVerificationLink(html, text);

    return {
      id: String(m.uid || messageId),
      accountId: address,
      from: {
        address: fromAddr,
        name: fromAddr.split('@')[0] || 'Sender',
      },
      to: [{ address, name: address }],
      subject,
      intro: text.slice(0, 100),
      seen: true,
      createdAt: m.d ? new Date(m.d).toISOString() : new Date().toISOString(),
      text,
      html: html ? [html] : [],
      attachments: (m.attachments || []).map((a: any, i: number) => ({
        id: `att_${i}`,
        filename: a.name || a.filename || `file_${i}`,
        contentType: a.type || 'application/octet-stream',
        disposition: 'attachment',
        transferEncoding: '',
        related: false,
        size: a.size || 0,
        downloadUrl: a.url || undefined,
      })),
      extractedOtp: extractedOtp || undefined,
      verificationLink: verificationLink || undefined,
      provider: 'inboxes',
    };
  }

  static async deleteMessage(messageId: string): Promise<boolean> {
    try {
      const res = await fetch(`${API_BASE}/message/${encodeURIComponent(messageId)}`, {
        method: 'DELETE',
      });
      return res.ok;
    } catch {
      return false;
    }
  }
}
