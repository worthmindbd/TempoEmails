import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { StorageManager } from '../utils/storage';
import { fetchWithTimeout } from '../utils/fetch-with-timeout';

const API_BASE = '/api/mail/tempmaillol/v2';
const FETCH_TIMEOUT_MS = 10000;

/**
 * Builds a stable message ID from the email's own content.
 * Full-body hash (not just the first 120 chars) so two mails from the same
 * sender in the same second with the same subject can't collide and lose mail.
 */
function buildStableMessageId(token: string, email: any, index: number = 0): string {
  const basis = `${email?.from || ''}|${email?.date || ''}|${email?.subject || ''}|${email?.body || email?.html || ''}|${index}`;
  let hash = 5381;
  for (let i = 0; i < basis.length; i++) {
    hash = ((hash << 5) + hash + basis.charCodeAt(i)) | 0;
  }
  let tokenFrag = '00000000';
  for (let i = 0; i < token.length; i++) {
    tokenFrag += token.charCodeAt(i).toString(36);
  }
  tokenFrag = tokenFrag.slice(-8);
  return `tml_${Math.abs(hash).toString(36)}_${tokenFrag}`;
}

export class TempMailLolClient {
  static async getDomains(): Promise<MailDomain[]> {
    // Dynamic stealth domains from TempMail.lol
    const sampleDomains = [
      'moonvf.com',
      'arcglen.com',
      'jazzemany.com',
      'tempmail.lol',
    ];
    return sampleDomains.map((domain, idx) => ({
      id: `tml_${idx}`,
      domain,
      isActive: true,
      provider: 'tempmaillol' as const,
    }));
  }

  static async createAccount(): Promise<MailAccount> {
    const res = await fetchWithTimeout(
      `${API_BASE}/inbox/create`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      },
      FETCH_TIMEOUT_MS
    );

    if (!res.ok) {
      throw new Error(`Failed to create TempMail.lol inbox: ${res.statusText}`);
    }

    const data = await res.json();
    return {
      id: data.token,
      address: data.address,
      token: data.token,
      provider: 'tempmaillol',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(token: string, address: string): Promise<MailMessage[]> {
    let data;
    try {
      const res = await fetchWithTimeout(
        `${API_BASE}/inbox?token=${encodeURIComponent(token)}`,
        {},
        FETCH_TIMEOUT_MS
      );
      if (!res.ok) throw new Error('Failed to fetch messages from tempmail.lol');
      data = await res.json();
    } catch (err) {
      // Rethrow so MailService can fall back to the localStorage cache
      console.warn('TempMail.lol getMessages error:', err);
      throw err;
    }

    const emails: any[] = data.emails || [];

    const summaries: MailMessage[] = emails.map((e: any, index: number) => {
      const id = buildStableMessageId(token, e, index);
      const subject = e.subject || '(No Subject)';
      const text = e.body || '';
      const html = e.html || (text ? `<pre>${text}</pre>` : '');
      const fromAddr = e.from || 'sender@domain.com';

      const extractedOtp = extractOtpCode(subject, `${text} ${html}`);
      const verificationLink = extractVerificationLink(html, text);

      // Preserve an already-read `seen` state: this runs on every poll and
      // used to clobber seen:true details back to false (unread dot flicker).
      const existingCached = StorageManager.getCachedMessageDetail(address, id);

      const detailed: DetailedMailMessage = {
        id,
        accountId: address,
        from: {
          address: fromAddr,
          name: fromAddr.split('@')[0] || 'Sender',
        },
        to: [{ address, name: address }],
        subject,
        intro: text.slice(0, 100),
        seen: existingCached?.seen ?? false,
        createdAt: e.date ? new Date(e.date).toISOString() : new Date().toISOString(),
        text,
        html: html ? [html] : [],
        attachments: [],
        extractedOtp: extractedOtp || undefined,
        verificationLink: verificationLink || undefined,
        provider: 'tempmaillol',
      };

      // Cache detailed message in localStorage immediately
      StorageManager.setCachedMessageDetail(address, detailed);

      return {
        id,
        accountId: address,
        from: detailed.from,
        to: detailed.to,
        subject,
        intro: detailed.intro,
        seen: detailed.seen,
        createdAt: detailed.createdAt,
        extractedOtp: detailed.extractedOtp,
        provider: 'tempmaillol' as const,
      };
    });

    return summaries;
  }

  static async getMessageDetail(address: string, messageId: string): Promise<DetailedMailMessage> {
    const cached = StorageManager.getCachedMessageDetail(address, messageId);
    if (cached) {
      cached.seen = true;
      StorageManager.setCachedMessageDetail(address, cached);
      return cached;
    }
    throw new Error('Message not found');
  }
}
