import type { MailAccount, MailMessage } from '../mail/types';

const STORAGE_KEYS = {
  CURRENT_ACCOUNT: 'tempomail_current_account',
  SAVED_ACCOUNTS: 'tempomail_saved_accounts',
  MESSAGES_CACHE_PREFIX: 'tempomail_msgs_',
  SETTINGS_THEME: 'theme',
  SETTINGS_SOUND: 'tempomail_sound_enabled',
};

export class StorageManager {
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
      // Filter out duplicate if existing
      const filtered = existing.filter((a) => a.address.toLowerCase() !== account.address.toLowerCase());
      // Prepend newest
      filtered.unshift(account);
      // Keep up to 8 recent inboxes
      const capped = filtered.slice(0, 8);
      localStorage.setItem(STORAGE_KEYS.SAVED_ACCOUNTS, JSON.stringify(capped));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static removeSavedAccount(address: string): void {
    if (typeof window === 'undefined') return;
    try {
      const existing = this.getSavedAccounts();
      const filtered = existing.filter((a) => a.address.toLowerCase() !== address.toLowerCase());
      localStorage.setItem(STORAGE_KEYS.SAVED_ACCOUNTS, JSON.stringify(filtered));

      // Remove cached messages for this account
      localStorage.removeItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${address}`);

      // If this was current account, clear current
      const current = this.getCurrentAccount();
      if (current && current.address.toLowerCase() === address.toLowerCase()) {
        localStorage.removeItem(STORAGE_KEYS.CURRENT_ACCOUNT);
      }
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  static clearAllSavedAccounts(): void {
    if (typeof window === 'undefined') return;
    try {
      const accounts = this.getSavedAccounts();
      accounts.forEach((a) => {
        localStorage.removeItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${a.address}`);
      });
      localStorage.removeItem(STORAGE_KEYS.SAVED_ACCOUNTS);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_ACCOUNT);
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }

  // Message cache
  static getCachedMessages(address: string): MailMessage[] {
    if (typeof window === 'undefined') return [];
    try {
      const data = localStorage.getItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${address}`);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  static setCachedMessages(address: string, messages: MailMessage[]): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(`${STORAGE_KEYS.MESSAGES_CACHE_PREFIX}${address}`, JSON.stringify(messages));
    } catch (e) {
      console.warn('LocalStorage error:', e);
    }
  }
}
