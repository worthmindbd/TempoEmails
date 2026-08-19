import type { MailAccount, MailMessage, DetailedMailMessage } from '../mail/types';

const STORAGE_KEYS = {
  CURRENT_ACCOUNT: 'tempomail_current_account',
  SAVED_ACCOUNTS: 'tempomail_saved_accounts',
  MESSAGES_CACHE_PREFIX: 'tempomail_msgs_',
  MESSAGES_DETAIL_CACHE_PREFIX: 'tempomail_detail_msgs_',
  SETTINGS_THEME: 'theme',
  SETTINGS_SOUND: 'tempomail_sound_enabled',
};

export class StorageManager {
  private static normalizeAddress(address: string): string {
    return (address || '').trim().toLowerCase();
  }

  // Current Account
  static getCurrentAccount(): MailAccount | null {
    if (typeof window === 'undefined') return null;
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CURRENT_ACCOUNT);
      return data ? JSON.parse(data) : null;
    } catch {
      return null;
    }
  }

  static setCurrentAccount(account: MailAccount | null): void {
    if (typeof window === 'undefined') return;
    try {
      if (account) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_ACCOUNT, JSON.stringify(account));
        this.addSavedAccount(account);
      } else {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_ACCOUNT);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Saved Accounts / Inboxes History
  static getSavedAccounts(): MailAccount[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_ACCOUNTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static addSavedAccount(account: MailAccount): void {
    if (typeof window === 'undefined') return;
    try {
      const existing = this.getSavedAccounts();
      const normalized = this.normalizeAddress(account.address);
      // Filter out duplicate if existing
      const filtered = existing.filter((a) => this.normalizeAddress(a.address) !== normalized);
      // Prepend newest
      filtered.unshift(account);
      // Keep up to 25 recent inboxes
      const capped = filtered.slice(0, 25);
      localStorage.setItem(STORAGE_KEYS.SAVED_ACCOUNTS, JSON.stringify(capped));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static removeSavedAccount(address: string): void {
    if (typeof window === 'undefined') return;
    try {
      const normalized = this.normalizeAddress(address);
      const existing = this.getSavedAccounts();
      const filtered = existing.filter((a) => this.normalizeAddress(a.address) !== normalized);
      localStorage.setItem(STORAGE_KEYS.SAVED_ACCOUNTS, JSON.stringify(filtered));

      // Remove cached messages and details for this account
      localStorage.removeItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${normalized}`);
      localStorage.removeItem(`${STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX}${normalized}`);

      // If this was current account, clear current
      const current = this.getCurrentAccount();
      if (current && this.normalizeAddress(current.address) === normalized) {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_ACCOUNT);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static clearAllSavedAccounts(): void {
    if (typeof window === 'undefined') return;
    try {
      // Remove all mailbox cache entries across localStorage
      for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        if (
          key &&
          (key.startsWith(STORAGE_KEYS.MESSAGES_CACHE_PREFIX) ||
            key.startsWith(STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX) ||
            key === STORAGE_KEYS.SAVED_ACCOUNTS ||
            key === STORAGE_KEYS.CURRENT_ACCOUNT)
        ) {
          localStorage.removeItem(key);
        }
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Message summaries cache
  static getCachedMessages(address: string): MailMessage[] {
    if (typeof window === 'undefined') return [];
    try {
      const normalized = this.normalizeAddress(address);
      const data = localStorage.getItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${normalized}`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static setCachedMessages(address: string, messages: MailMessage[]): void {
    if (typeof window === 'undefined') return;
    try {
      const normalized = this.normalizeAddress(address);
      localStorage.setItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${normalized}`, JSON.stringify(messages));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  /**
   * Merges incoming messages with existing cached messages.
   * Crucially, messages that were purged from the remote provider server after a few minutes
   * are preserved in localStorage and NOT deleted until the user explicitly clears browser data.
   */
  static mergeAndSaveMessages(address: string, incomingMessages: MailMessage[]): MailMessage[] {
    if (typeof window === 'undefined') return incomingMessages;
    try {
      const normalized = this.normalizeAddress(address);
      const existing = this.getCachedMessages(normalized);

      const map = new Map<string, MailMessage>();

      // 1. Populate with existing stored messages to preserve them permanently
      for (const msg of existing) {
        if (msg && msg.id) {
          map.set(msg.id, msg);
        }
      }

      // 2. Merge or add incoming messages
      for (const incoming of incomingMessages) {
        if (!incoming || !incoming.id) continue;
        const current = map.get(incoming.id);
        if (current) {
          map.set(incoming.id, {
            ...current,
            ...incoming,
            seen: current.seen || incoming.seen,
            extractedOtp: incoming.extractedOtp || current.extractedOtp,
            intro: incoming.intro || current.intro,
          });
        } else {
          map.set(incoming.id, incoming);
        }
      }

      // 3. Sort by createdAt descending (newest first)
      const merged = Array.from(map.values()).sort((a, b) => {
        const timeA = new Date(a.createdAt).getTime() || 0;
        const timeB = new Date(b.createdAt).getTime() || 0;
        return timeB - timeA;
      });

      this.setCachedMessages(normalized, merged);
      return merged;
    } catch (e) {
      console.warn('Error merging messages in storage:', e);
      return incomingMessages;
    }
  }

  // Detailed messages cache
  static getCachedMessageDetailsMap(address: string): Record<string, DetailedMailMessage> {
    if (typeof window === 'undefined') return {};
    try {
      const normalized = this.normalizeAddress(address);
      const data = localStorage.getItem(`${STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX}${normalized}`);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  }

  static getCachedMessageDetail(address: string, messageId: string): DetailedMailMessage | null {
    if (typeof window === 'undefined') return null;
    try {
      const normalized = this.normalizeAddress(address);
      const map = this.getCachedMessageDetailsMap(normalized);
      return map[messageId] || null;
    } catch {
      return null;
    }
  }

  static setCachedMessageDetail(address: string, detail: DetailedMailMessage): void {
    if (typeof window === 'undefined' || !detail || !detail.id) return;
    try {
      const normalized = this.normalizeAddress(address);
      const map = this.getCachedMessageDetailsMap(normalized);
      map[detail.id] = detail;

      // Keep summary list in sync
      const summaryList = this.getCachedMessages(normalized);
      const idx = summaryList.findIndex((m) => m.id === detail.id);
      if (idx >= 0) {
        summaryList[idx] = {
          ...summaryList[idx],
          seen: detail.seen ?? summaryList[idx].seen,
          extractedOtp: detail.extractedOtp || summaryList[idx].extractedOtp,
          intro: detail.intro || (detail.text ? detail.text.slice(0, 100) : summaryList[idx].intro),
        };
        this.setCachedMessages(normalized, summaryList);
      } else {
        // If not in summary list, add it
        const summary: MailMessage = {
          id: detail.id,
          accountId: detail.accountId || address,
          from: detail.from,
          to: detail.to,
          subject: detail.subject,
          intro: detail.intro || (detail.text ? detail.text.slice(0, 100) : ''),
          seen: detail.seen ?? false,
          createdAt: detail.createdAt,
          extractedOtp: detail.extractedOtp,
          provider: detail.provider,
        };
        this.mergeAndSaveMessages(normalized, [summary]);
      }

      localStorage.setItem(`${STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX}${normalized}`, JSON.stringify(map));
    } catch (e) {
      console.warn('LocalStorage error setting message detail:', e);
    }
  }

  static markMessageSeen(address: string, messageId: string): void {
    if (typeof window === 'undefined') return;
    try {
      const normalized = this.normalizeAddress(address);
      const existing = this.getCachedMessages(normalized);
      let changed = false;
      for (const msg of existing) {
        if (msg.id === messageId && !msg.seen) {
          msg.seen = true;
          changed = true;
        }
      }
      if (changed) {
        this.setCachedMessages(normalized, existing);
      }

      const map = this.getCachedMessageDetailsMap(normalized);
      if (map[messageId] && !map[messageId].seen) {
        map[messageId].seen = true;
        localStorage.setItem(`${STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX}${normalized}`, JSON.stringify(map));
      }
    } catch (e) {
      console.warn('LocalStorage error marking message seen:', e);
    }
  }

  static removeCachedMessage(address: string, messageId: string): void {
    if (typeof window === 'undefined') return;
    try {
      const normalized = this.normalizeAddress(address);

      // 1. Remove from summary list
      const existing = this.getCachedMessages(normalized);
      const filtered = existing.filter((m) => m.id !== messageId);
      this.setCachedMessages(normalized, filtered);

      // 2. Remove from details map
      const map = this.getCachedMessageDetailsMap(normalized);
      if (map[messageId]) {
        delete map[messageId];
        localStorage.setItem(`${STORAGE_KEYS.MESSAGES_DETAIL_CACHE_PREFIX}${normalized}`, JSON.stringify(map));
      }
    } catch (e) {
      console.warn('LocalStorage error removing cached message:', e);
    }
  }
}
