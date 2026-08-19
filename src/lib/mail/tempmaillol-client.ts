import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { StorageManager } from '../utils/storage';

const API_BASE = 'https://api.tempmail.lol/v2';

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
    const res = await fetch(`${API_BASE}/inbox/create`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

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
    try {
      const res = await fetch(`${API_BASE}/inbox?token=${encodeURIComponent(token)}`);
      if (!res.ok) throw new Error('Failed to fetch messages from tempmail.lol');
      const data = await res.json();
      const emails: any[] = data.emails || [];

      const summaries: MailMessage[] = emails.map((e: any, idx: number) => {
        const id = `tml_${token}_${idx}`;
        const subject = e.subject || '(No Subject)';
        const text = e.body || '';
        const html = e.html || (text ? `<pre>${text}</pre>` : '');
        const fromAddr = e.from || 'sender@domain.com';

        const extractedOtp = extractOtpCode(subject, `${text} ${html}`);
        const verificationLink = extractVerificationLink(html, text);

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
          seen: false,
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
          seen: false,
          createdAt: detailed.createdAt,
          extractedOtp: detailed.extractedOtp,
          provider: 'tempmaillol' as const,
        };
      });

      return summaries;
    } catch (err) {
      console.warn('TempMail.lol getMessages error:', err);
      return [];
    }
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
