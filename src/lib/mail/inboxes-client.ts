import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { fetchWithTimeout } from '../utils/fetch-with-timeout';

const API_BASE = '/api/mail/inboxes/api/v2';
const FETCH_TIMEOUT_MS = 10000;

/** Known Inboxes.com network domains — used for exact-match provider routing. */
export const INBOXES_KNOWN_DOMAINS = [
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
      const res = await fetchWithTimeout(`${API_BASE}/domain`, {}, FETCH_TIMEOUT_MS);
      if (!res.ok) throw new Error('Failed to fetch inboxes.com domains');
      const data = await res.json();
      const list = data.domains || [];

      return list.map((d: any) => {
        const domain = d.qdn || d.domain || d;
        return {
          id: `inb_${domain}`,
          domain,
          isActive: true,
          provider: 'inboxes' as const,
        };
      });
    } catch {
      // Fallback domain list from Inboxes.com
      const fallbacks = INBOXES_KNOWN_DOMAINS;
      return fallbacks.map((domain) => ({
        id: `inb_${domain}`,
        domain,
        isActive: true,
        provider: 'inboxes' as const,
      }));
    }
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domains = await this.getDomains();
    const domain = domainName || domains[Math.floor(Math.random() * domains.length)]?.domain || 'getnada.com';
    if (usernamePrefix !== undefined) {
      const cleaned = usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '');
      if (!cleaned) {
        throw new Error('Username must contain at least one letter, number, dot, underscore, or dash.');
      }
    }
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
      const res = await fetchWithTimeout(
        `${API_BASE}/inbox/${encodeURIComponent(address)}`,
        {},
        FETCH_TIMEOUT_MS
      );
      if (!res.ok) throw new Error(`Failed to fetch inbox: ${res.statusText}`);
      const data = await res.json();
      const msgs = data.msgs || [];

      return msgs.map((m: any) => {
        const subject = m.s || '(No Subject)';
        const fromAddr = m.f || 'unknown@domain.com';
        const otp = extractOtpCode(subject, m.e || '');

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
          createdAt: m.d && !isNaN(new Date(m.d).getTime()) ? new Date(m.d).toISOString() : new Date().toISOString(),
          extractedOtp: otp || undefined,
          provider: 'inboxes' as const,
        };
      });
    } catch (err) {
      // Rethrow so MailService can fall back to the localStorage cache
      // (returning [] here would wrongly mark the fetch as "successful").
      console.warn('Inboxes.com getMessages error:', err);
      throw err;
    }
  }

  static async getMessageDetail(address: string, messageId: string): Promise<DetailedMailMessage> {
    const res = await fetchWithTimeout(
      `${API_BASE}/message/${encodeURIComponent(messageId)}`,
      {},
      FETCH_TIMEOUT_MS
    );
    if (!res.ok) throw new Error('Failed to fetch message detail from inboxes.com');

    const data = await res.json();
    const m = data.msg || data;

    const subject = m.s || m.subject || '(No Subject)';
    const text = m.text || m.textBody || '';
    const html = m.html || m.htmlBody || '';
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
      createdAt: m.d && !isNaN(new Date(m.d).getTime()) ? new Date(m.d).toISOString() : new Date().toISOString(),
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
      const res = await fetchWithTimeout(
        `${API_BASE}/message/${encodeURIComponent(messageId)}`,
        { method: 'DELETE' },
        FETCH_TIMEOUT_MS
      );
      return res.ok;
    } catch {
      return false;
    }
  }
}
