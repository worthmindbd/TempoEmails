import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';

const GUERRILLA_API = 'https://api.guerrillamail.com/ajax.php';

export const GUERRILLA_DOMAINS = [
  'sharklasers.com',
  'guerrillamail.com',
  'grr.la',
  'pokemail.net',
  'spam4.me',
  'guerrillamailblock.com',
  'guerrillamail.net',
  'guerrillamail.org',
];

export class GuerrillaMailClient {
  private static sidToken: string | null = null;

  static async getDomains(): Promise<MailDomain[]> {
    return GUERRILLA_DOMAINS.map((domain, idx) => ({
      id: `gm_${idx}`,
      domain,
      isActive: true,
      provider: 'guerrilla' as const,
    }));
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domain = domainName || 'sharklasers.com';

    // 1. Get initial session / address
    const initRes = await fetch(`${GUERRILLA_API}?f=get_email_address`);
    if (!initRes.ok) {
      throw new Error('Failed to initialize Guerrilla Mail session');
    }
    const initData = await initRes.json();
    this.sidToken = initData.sid_token;

    let address = initData.email_addr;

    // 2. If user specified a prefix, set custom username
    if (usernamePrefix && this.sidToken) {
      const cleanUser = usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '');
      const setRes = await fetch(
        `${GUERRILLA_API}?f=set_email_user&email_user=${encodeURIComponent(cleanUser)}&lang=en&sid_token=${this.sidToken}`
      );
      if (setRes.ok) {
        const setData = await setRes.json();
        const baseUser = setData.email_addr?.split('@')[0] || cleanUser;
        address = `${baseUser}@${domain}`;
      }
    } else if (domainName && domainName !== 'guerrillamailblock.com') {
      const baseUser = address.split('@')[0];
      address = `${baseUser}@${domain}`;
    }

    return {
      id: this.sidToken || `gm_${Date.now()}`,
      address,
      token: this.sidToken || undefined,
      provider: 'guerrilla',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(token?: string, address?: string): Promise<MailMessage[]> {
    const sid = token || this.sidToken;
    if (!sid) return [];

    try {
      const res = await fetch(`${GUERRILLA_API}?f=check_email&seq=0&sid_token=${encodeURIComponent(sid)}`);
      if (!res.ok) throw new Error('Failed to fetch Guerrilla Mail messages');
      const data = await res.json();
      const list = data.list || [];

      return list.map((m: any) => {
        const subject = m.mail_subject || '(No Subject)';
        const intro = m.mail_excerpt || '';
        const otp = extractOtpCode(subject, intro);

        return {
          id: String(m.mail_id),
          accountId: sid,
          from: {
            address: m.mail_from || 'unknown@sender.com',
            name: m.mail_from?.split('@')[0] || 'Sender',
          },
          to: [{ address: address || data.email || 'you@domain.com', name: 'You' }],
          subject,
          intro,
          seen: Boolean(m.mail_read),
          createdAt: m.mail_timestamp ? new Date(m.mail_timestamp * 1000).toISOString() : new Date().toISOString(),
          extractedOtp: otp || undefined,
          provider: 'guerrilla' as const,
        };
      });
    } catch (err) {
      console.warn('Guerrilla getMessages error:', err);
      return [];
    }
  }

  static async getMessageDetail(token: string, messageId: string): Promise<DetailedMailMessage> {
    const sid = token || this.sidToken || '';
    const res = await fetch(`${GUERRILLA_API}?f=fetch_email&email_id=${encodeURIComponent(messageId)}&sid_token=${encodeURIComponent(sid)}`);
    if (!res.ok) throw new Error('Failed to fetch email detail from Guerrilla Mail');

    const m = await res.json();
    const subject = m.mail_subject || '(No Subject)';
    const body = m.mail_body || '';
    const isHtml = /<[a-z][\s\S]*>/i.test(body);

    const text = isHtml ? body.replace(/<[^>]*>?/gm, '') : body;
    const htmlArr = isHtml ? [body] : [];

    const extractedOtp = extractOtpCode(subject, body);
    const verificationLink = extractVerificationLink(body, text);

    return {
      id: String(m.mail_id),
      accountId: sid,
      from: {
        address: m.mail_from || 'sender@domain.com',
        name: m.mail_from?.split('@')[0] || 'Sender',
      },
      to: [{ address: m.mail_recipient || 'you', name: 'You' }],
      subject,
      intro: m.mail_excerpt || text.slice(0, 100),
      seen: true,
      createdAt: m.mail_timestamp ? new Date(m.mail_timestamp * 1000).toISOString() : new Date().toISOString(),
      text,
      html: htmlArr,
      attachments: [],
      extractedOtp: extractedOtp || undefined,
      verificationLink: verificationLink || undefined,
      provider: 'guerrilla',
    };
  }

  static async deleteMessage(token: string, messageId: string): Promise<boolean> {
    const sid = token || this.sidToken || '';
    try {
      const res = await fetch(`${GUERRILLA_API}?f=del_email&email_ids[]=${encodeURIComponent(messageId)}&sid_token=${encodeURIComponent(sid)}`);
      return res.ok;
    } catch {
      return false;
    }
  }
}
