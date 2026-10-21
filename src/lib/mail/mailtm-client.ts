import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { fetchWithTimeout } from '../utils/fetch-with-timeout';

const PROXY_BASE = '/api/mail/mailtm';
const PROXY_BASE_GW = '/api/mail/mailgw';
const FETCH_TIMEOUT_MS = 10000;

// Mail.gw uses its own domain namespace — track which proxy base served each
// domain so account creation POSTs to the backend that actually owns it.
const domainApiBase = new Map<string, string>();

export class MailTmClient {
  // The password is shown to the user as the key to reopen the inbox, so it
  // must come from a CSPRNG, not Math.random.
  private static generateRandomString(length: number = 10): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const bytes = crypto.getRandomValues(new Uint8Array(length));
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(bytes[i] % chars.length);
    }
    return result;
  }

  /**
   * Resolves the API base for requests. All traffic goes through the
   * same-origin proxy (/api/mail/...) because api.mail.tm / api.mail.gw do not
   * send CORS headers usable from other browser origins. Absolute legacy
   * values (stored accounts) are migrated to proxy paths.
   */
  static getApiBase(domainOrUrl?: string): string {
    if (!domainOrUrl) return PROXY_BASE;
    if (domainOrUrl.startsWith('/api/mail/')) return domainOrUrl;
    if (domainOrUrl.includes('westcast') || domainOrUrl.includes('mail.gw')) return PROXY_BASE_GW;
    const known = domainApiBase.get(domainOrUrl.toLowerCase());
    if (known) return known;
    // Legacy absolute URLs (https://api.mail.tm / https://api.mail.gw)
    return PROXY_BASE;
  }

  /** Prefers an explicit origin recorded during domain discovery. */
  static getApiBaseForDomain(domain?: string): string | null {
    if (!domain) return null;
    return domainApiBase.get(domain.toLowerCase()) || null;
  }

  static async getDomains(): Promise<MailDomain[]> {
    const endpoints: Array<{ base: string; apiBase: string }> = [
      { base: `${PROXY_BASE}/domains`, apiBase: PROXY_BASE },
      { base: `${PROXY_BASE_GW}/domains`, apiBase: PROXY_BASE_GW },
    ];
    const domains: MailDomain[] = [];

    await Promise.allSettled(
      endpoints.map(async ({ base, apiBase }) => {
        try {
          const res = await fetchWithTimeout(
            base,
            {
              headers: { Accept: 'application/json' },
            },
            FETCH_TIMEOUT_MS
          );
          if (!res.ok) return;
          const data = await res.json();
          const items = data['hydra:member'] || data;
          if (Array.isArray(items)) {
            items.forEach((d: any) => {
              if (d.domain && !domains.some((existing) => existing.domain === d.domain)) {
                domainApiBase.set(String(d.domain).toLowerCase(), apiBase);
                domains.push({
                  id: d.id || d['@id'] || d.domain,
                  domain: d.domain,
                  isActive: d.isActive ?? true,
                  provider: 'mailtm' as const,
                });
              }
            });
          }
        } catch (err) {
          console.warn(`Mail.tm domain fetch failed (${base}):`, err);
        }
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
    const apiBase = this.getApiBaseForDomain(domain) || this.getApiBase(domain);
    if (usernamePrefix !== undefined) {
      const cleaned = usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '');
      if (!cleaned) {
        throw new Error('Username must contain at least one letter, number, dot, underscore, or dash.');
      }
    }
    const prefix = usernamePrefix ? usernamePrefix.toLowerCase().replace(/[^a-z0-9._-]/g, '') : `tempo.${this.generateRandomString(8)}`;
    const address = `${prefix}@${domain}`;
    const password = `Tmp_${this.generateRandomString(12)}!`;

    // 1. Create account on matching API base
    const createRes = await fetchWithTimeout(
      `${apiBase}/accounts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ address, password }),
      },
      FETCH_TIMEOUT_MS
    );

    if (!createRes.ok) {
      const errBody = await createRes.json().catch(() => ({}));
      throw new Error(errBody.message || `Account creation failed on ${apiBase} with status ${createRes.status}`);
    }

    const accountData = await createRes.json();
    // The API normalises the username (it strips dots: `tempo.x` is created as
    // `tempox`) and only the address it returns can log in. Logging in with the
    // requested address got a 401 for every dotted username, so random Mail.tm
    // inboxes always failed over to another provider.
    const createdAddress = String(accountData.address || address).toLowerCase();

    // 2. Get JWT Token from matching API base (retry once: a 429/blip here used
    // to orphan the account and silently swap in a different address).
    let tokenRes = await fetchWithTimeout(
      `${apiBase}/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ address: createdAddress, password }),
      },
      FETCH_TIMEOUT_MS
    );

    if (!tokenRes.ok && (tokenRes.status === 429 || tokenRes.status >= 500)) {
      await new Promise((r) => setTimeout(r, 1000));
      tokenRes = await fetchWithTimeout(
        `${apiBase}/token`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ address: createdAddress, password }),
        },
        FETCH_TIMEOUT_MS
      );
    }

    if (!tokenRes.ok) {
      throw new Error(`Failed to acquire authentication token from ${apiBase}`);
    }

    const tokenData = await tokenRes.json();

    return {
      id: accountData.id || tokenData.id,
      address: createdAddress,
      token: tokenData.token,
      password,
      apiBase,
      provider: 'mailtm',
      createdAt: accountData.createdAt || new Date().toISOString(),
    };
  }

  /**
   * Exchanges address + password for a fresh JWT. Used to silently renew a
   * rejected token instead of throwing the user's mailbox away. Throws
   * `UNAUTHORIZED` when the provider rejects the credentials (wrong password,
   * or the account was deleted), so callers can tell that from a network blip.
   */
  static async login(address: string, password: string, apiBaseUrl: string = PROXY_BASE): Promise<string> {
    const apiBase = this.getApiBase(apiBaseUrl);
    const res = await fetchWithTimeout(
      `${apiBase}/token`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ address, password }),
      },
      FETCH_TIMEOUT_MS
    );
    if (res.status === 401) {
      throw new Error('UNAUTHORIZED');
    }
    if (!res.ok) {
      throw new Error(`Failed to renew authentication token from ${apiBase}`);
    }
    const data = await res.json();
    if (!data.token) {
      throw new Error('Token renewal response did not contain a token');
    }
    return data.token;
  }

  /**
   * Reopens an inbox created earlier (in another browser, or before the
   * browser data was cleared) from its address + password. Mail.tm and Mail.gw
   * are separate backends; the domain list says which one owns the address,
   * and an address on a domain that has since been rotated out of the list is
   * tried against both.
   */
  static async loginExisting(address: string, password: string): Promise<MailAccount> {
    const normalized = address.trim().toLowerCase();
    const domain = normalized.split('@')[1];
    if (!domain || !password) {
      throw new Error('UNAUTHORIZED');
    }

    await this.getDomains();
    const known = this.getApiBaseForDomain(domain);
    const bases = known ? [known] : [PROXY_BASE, PROXY_BASE_GW];
    // The API strips dots from usernames at creation, so `john.doe@` the user
    // asked for exists as `johndoe@`.
    const dotless = `${normalized.split('@')[0].replace(/\./g, '')}@${domain}`;
    const addresses = dotless === normalized ? [normalized] : [normalized, dotless];

    for (const apiBase of bases) {
      for (const candidate of addresses) {
        let token: string;
        try {
          token = await this.login(candidate, password, apiBase);
        } catch (err: any) {
          if (err?.message === 'UNAUTHORIZED') continue;
          throw err;
        }

        const res = await fetchWithTimeout(
          `${apiBase}/me`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json',
            },
          },
          FETCH_TIMEOUT_MS
        );
        if (!res.ok) {
          throw new Error(`Failed to load account from ${apiBase}`);
        }
        const me = await res.json();

        return {
          id: me.id,
          address: me.address || candidate,
          token,
          password,
          apiBase,
          provider: 'mailtm',
          createdAt: me.createdAt || new Date().toISOString(),
        };
      }
    }

    throw new Error('UNAUTHORIZED');
  }

  static async getMessages(token: string, apiBaseUrl: string = PROXY_BASE): Promise<MailMessage[]> {
    const apiBase = this.getApiBase(apiBaseUrl);
    try {
      const res = await fetchWithTimeout(
        `${apiBase}/messages`,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
          },
        },
        FETCH_TIMEOUT_MS
      );

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

  static async getMessageDetail(token: string, messageId: string, apiBaseUrl: string = PROXY_BASE): Promise<DetailedMailMessage> {
    const apiBase = this.getApiBase(apiBaseUrl);
    const res = await fetchWithTimeout(
      `${apiBase}/messages/${encodeURIComponent(messageId)}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
        },
      },
      FETCH_TIMEOUT_MS
    );

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

  static async deleteMessage(token: string, messageId: string, apiBaseUrl: string = PROXY_BASE): Promise<boolean> {
    const apiBase = this.getApiBase(apiBaseUrl);
    try {
      const res = await fetchWithTimeout(
        `${apiBase}/messages/${encodeURIComponent(messageId)}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        },
        FETCH_TIMEOUT_MS
      );
      return res.status === 204 || res.ok;
    } catch {
      return false;
    }
  }
}
