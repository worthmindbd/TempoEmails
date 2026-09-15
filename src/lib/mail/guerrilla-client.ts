import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { fetchWithTimeout } from '../utils/fetch-with-timeout';

const GUERRILLA_API = '/api/mail/guerrilla/ajax.php';
const FETCH_TIMEOUT_MS = 10000;

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

/**
 * The Guerrilla AJAX API always assigns addresses on this domain and ignores
 * any other requested domain (verified against the live API). We only ever
 * advertise/return this one so displayed addresses always receive mail.
 */
export const GUERRILLA_DEFAULT_DOMAIN = 'guerrillamailblock.com';

export class GuerrillaMailClient {
  static async getDomains(): Promise<MailDomain[]> {
    return [
      {
        id: 'gm_0',
        domain: GUERRILLA_DEFAULT_DOMAIN,
        isActive: true,
        provider: 'guerrilla' as const,
      },
    ];
  }

  static async createAccount(usernamePrefix?: string, _requestedDomain?: string): Promise<MailAccount> {
    // 1. Get initial session / address
    const initRes = await fetchWithTimeout(`${GUERRILLA_API}?f=get_email_address`, {}, FETCH_TIMEOUT_MS);
    if (!initRes.ok) {
      throw new Error('Failed to initialize Guerrilla Mail session');
    }
    const initData = await initRes.json();
    let sidToken: string | null = initData.sid_token || null;

    // The API-assigned address is the single source of truth — never fabricate
    // a different domain client-side, or the address will not receive mail.
    let address = initData.email_addr;
    if (!address) {
      throw new Error('Guerrilla Mail did not assign an email address');
    }

    // 2. If user specified a prefix, set custom username (domain stays API-assigned)
    if (usernamePrefix && sidToken) {
      const cleanUser = usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '');
      if (!cleanUser) {
        throw new Error('Username must contain at least one letter, number, dot, underscore, or dash.');
      }
      const setRes = await fetchWithTimeout(
        `${GUERRILLA_API}?f=set_email_user&email_user=${encodeURIComponent(cleanUser)}&lang=en&sid_token=${sidToken}`,
        {},
        FETCH_TIMEOUT_MS
      );
      if (setRes.ok) {
        const setData = await setRes.json();
        if (setData.email_addr) {
          address = setData.email_addr;
          if (setData.sid_token) sidToken = setData.sid_token;
        }
      }
    }

    return {
      id: sidToken || `gm_${Date.now()}`,
      address,
      token: sidToken || undefined,
      provider: 'guerrilla',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(token?: string, address?: string): Promise<MailMessage[]> {
    const sid = token;
    if (!sid) {
      throw new Error('Guerrilla Mail session expired — please create a new inbox.');
    }

    try {
      const res = await fetchWithTimeout(
        `${GUERRILLA_API}?f=check_email&seq=0&sid_token=${encodeURIComponent(sid)}`,
        {},
        FETCH_TIMEOUT_MS
      );
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
      // Rethrow so MailService can fall back to the localStorage cache
      console.warn('Guerrilla getMessages error:', err);
      throw err;
    }
  }

  static async getMessageDetail(token: string, messageId: string): Promise<DetailedMailMessage> {
    const sid = token || '';
    if (!sid) {
      throw new Error('Guerrilla Mail session expired — please create a new inbox.');
    }
    const res = await fetchWithTimeout(
      `${GUERRILLA_API}?f=fetch_email&email_id=${encodeURIComponent(messageId)}&sid_token=${encodeURIComponent(sid)}`,
      {},
      FETCH_TIMEOUT_MS
    );
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
    const sid = token || '';
    if (!sid) return false;
    try {
      const res = await fetchWithTimeout(
        `${GUERRILLA_API}?f=del_email&email_ids[]=${encodeURIComponent(messageId)}&sid_token=${encodeURIComponent(sid)}`,
        {},
        FETCH_TIMEOUT_MS
      );
      return res.ok;
    } catch {
      return false;
    }
  }
}
