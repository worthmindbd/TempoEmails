import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { MailTmClient } from './mailtm-client';
import { InboxesClient } from './inboxes-client';
import { TempMailLolClient } from './tempmaillol-client';
import { GuerrillaMailClient, GUERRILLA_DOMAINS } from './guerrilla-client';
import { SecMailClient } from './secmail-client';
import { MockClient } from './mock-client';
import { StorageManager } from '../utils/storage';
import { soundNotifier } from '../utils/sound';

export class MailService {
  /**
   * Initializes or restores the user's active temporary mailbox
   */
  static async getOrCreateAccount(
    forceNew: boolean = false,
    preferredProvider?: 'mailtm' | 'inboxes' | 'tempmaillol' | 'guerrilla' | 'secmail',
    excludeDomain?: string
  ): Promise<MailAccount> {
    if (!forceNew) {
      const stored = StorageManager.getCurrentAccount();
      if (stored && stored.address) {
        return stored;
      }
    }

    // Get all available live domains across providers
    const allDomains = await this.getAvailableDomains();

    // Filter active domains and optionally exclude the previous domain for visible rotation
    let pool = allDomains.filter((d) => d.isActive);
    if (excludeDomain && pool.length > 1) {
      const filtered = pool.filter((d) => d.domain.toLowerCase() !== excludeDomain.toLowerCase());
      if (filtered.length > 0) {
        pool = filtered;
      }
    }

    if (preferredProvider) {
      const providerPool = pool.filter((d) => d.provider === preferredProvider);
      if (providerPool.length > 0) {
        pool = providerPool;
      }
    }

    // Pick a random domain from the candidate pool
    const selected = pool[Math.floor(Math.random() * pool.length)];
    const chosenDomain = selected?.domain;
    const targetProvider = selected?.provider || preferredProvider || 'mailtm';

    if (targetProvider === 'inboxes') {
      try {
        const account = await InboxesClient.createAccount(undefined, chosenDomain);
        StorageManager.setCurrentAccount(account);
        return account;
      } catch (err) {
        console.warn('Inboxes random create failed, falling back:', err);
      }
    } else if (targetProvider === 'tempmaillol') {
      try {
        const account = await TempMailLolClient.createAccount();
        StorageManager.setCurrentAccount(account);
        return account;
      } catch (err) {
        console.warn('TempMail.lol random create failed, falling back:', err);
      }
    } else if (targetProvider === 'guerrilla') {
      try {
        const account = await GuerrillaMailClient.createAccount(undefined, chosenDomain);
        StorageManager.setCurrentAccount(account);
        return account;
      } catch (err) {
        console.warn('Guerrilla random create failed, falling back:', err);
      }
    } else if (targetProvider === 'secmail') {
      try {
        const account = await SecMailClient.createAccount(undefined, chosenDomain);
        StorageManager.setCurrentAccount(account);
        return account;
      } catch (err) {
        console.warn('Secmail random create failed, falling back:', err);
      }
    } else {
      try {
        const account = await MailTmClient.createAccount(undefined, chosenDomain);
        StorageManager.setCurrentAccount(account);
        return account;
      } catch (err) {
        console.warn('Mail.tm random create failed, falling back:', err);
      }
    }

    // Fallbacks if specific pick failed
    try {
      const account = await InboxesClient.createAccount();
      StorageManager.setCurrentAccount(account);
      return account;
    } catch {}

    try {
      const account = await MailTmClient.createAccount();
      StorageManager.setCurrentAccount(account);
      return account;
    } catch {}

    try {
      const account = await TempMailLolClient.createAccount();
      StorageManager.setCurrentAccount(account);
      return account;
    } catch {}

    try {
      const account = await GuerrillaMailClient.createAccount();
      StorageManager.setCurrentAccount(account);
      return account;
    } catch {}

    // Mock fallback
    const account = await MockClient.createAccount();
    StorageManager.setCurrentAccount(account);
    return account;
  }

  /**
   * Fetches available domain names across all live providers simultaneously
   */
  static async getAvailableDomains(): Promise<MailDomain[]> {
    const allDomains: MailDomain[] = [];

    // Fetch from all top providers concurrently
    const [mailtmRes, inboxesRes, tempmailLolRes, guerrillaRes, secmailRes] = await Promise.allSettled([
      MailTmClient.getDomains(),
      InboxesClient.getDomains(),
      TempMailLolClient.getDomains(),
      GuerrillaMailClient.getDomains(),
      SecMailClient.getDomains(),
    ]);

    if (mailtmRes.status === 'fulfilled' && mailtmRes.value.length > 0) {
      allDomains.push(...mailtmRes.value);
    }

    if (inboxesRes.status === 'fulfilled' && inboxesRes.value.length > 0) {
      allDomains.push(...inboxesRes.value);
    }

    if (tempmailLolRes.status === 'fulfilled' && tempmailLolRes.value.length > 0) {
      allDomains.push(...tempmailLolRes.value);
    }

    if (guerrillaRes.status === 'fulfilled' && guerrillaRes.value.length > 0) {
      allDomains.push(...guerrillaRes.value);
    }

    if (secmailRes.status === 'fulfilled' && secmailRes.value.length > 0) {
      allDomains.push(...secmailRes.value);
    }

    if (allDomains.length > 0) {
      return allDomains;
    }

    return MockClient.getDomains();
  }

  /**
   * Creates a custom account with user-chosen prefix and domain, automatically routing to the correct provider
   */
  static async createCustomAccount(
    prefix: string,
    domain: string,
    providerHint?: 'mailtm' | 'inboxes' | 'tempmaillol' | 'guerrilla' | 'secmail'
  ): Promise<MailAccount> {
    const cleanPrefix = prefix.toLowerCase().replace(/[^a-z0-9._-]/g, '');

    const isGuerrilla = providerHint === 'guerrilla' || GUERRILLA_DOMAINS.includes(domain);
    const isSecMail = providerHint === 'secmail' || domain.includes('1secmail') || domain.includes('esiix') || domain.includes('wwjmp');
    const isInboxes = providerHint === 'inboxes' || domain.includes('nada') || domain.includes('airmail') || domain.includes('bear') || domain.includes('loop') || domain.includes('dropjar') || domain.includes('blond') || domain.includes('chaps') || domain.includes('clow') || domain.includes('givmail') || domain.includes('guysmail') || domain.includes('vomoto') || domain.includes('tupmail') || domain.includes('robot-mail') || domain.includes('fivermail') || domain.includes('temptami') || domain.includes('tafmail');

    if (isInboxes) {
      const account = await InboxesClient.createAccount(cleanPrefix, domain);
      StorageManager.setCurrentAccount(account);
      return account;
    } else if (isGuerrilla) {
      const account = await GuerrillaMailClient.createAccount(cleanPrefix, domain);
      StorageManager.setCurrentAccount(account);
      return account;
    } else if (isSecMail) {
      const account = await SecMailClient.createAccount(cleanPrefix, domain);
      StorageManager.setCurrentAccount(account);
      return account;
    } else {
      const account = await MailTmClient.createAccount(cleanPrefix, domain);
      StorageManager.setCurrentAccount(account);
      return account;
    }
  }

  /**
   * Fetches messages for an account and plays chime if new unread email arrives
   */
  static async getMessages(account: MailAccount, isInitialLoad: boolean = false): Promise<MailMessage[]> {
    let messages: MailMessage[] = [];

    try {
      if (account.provider === 'mailtm' && account.token) {
        messages = await MailTmClient.getMessages(account.token, account.apiBase);
      } else if (account.provider === 'inboxes') {
        messages = await InboxesClient.getMessages(account.address);
      } else if (account.provider === 'tempmaillol' && account.token) {
        messages = await TempMailLolClient.getMessages(account.token, account.address);
      } else if (account.provider === 'guerrilla') {
        messages = await GuerrillaMailClient.getMessages(account.token, account.address);
      } else if (account.provider === 'secmail') {
        messages = await SecMailClient.getMessages(account.address);
      } else {
        messages = await MockClient.getMessages(account.address);
      }
    } catch (err: any) {
      if (err?.message === 'UNAUTHORIZED' && account.provider === 'mailtm') {
        // Token expired, re-create or fallback
        const newAcc = await this.getOrCreateAccount(true);
        return this.getMessages(newAcc, isInitialLoad);
      }
      // Fall back to cached messages
      messages = StorageManager.getCachedMessages(account.address);
    }

    // Check if new emails arrived compared to cache
    const previousMsgs = StorageManager.getCachedMessages(account.address);
    const prevIds = new Set(previousMsgs.map((m) => m.id));
    const newItems = messages.filter((m) => !prevIds.has(m.id));

    // Play chime whenever new incoming email arrives
    if (newItems.length > 0 && !isInitialLoad) {
      soundNotifier.playNotificationChime();
      
      // Dispatch browser notification if permitted
      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
        const newest = newItems[0];
        new Notification(`New Email from ${newest.from.name}`, {
          body: newest.subject || 'You received a new temporary email.',
          icon: '/favicon.svg',
        });
      }
    }

    // Update cache
    StorageManager.setCachedMessages(account.address, messages);
    return messages;
  }

  /**
   * Fetches full body content and attachments for a specific message
   */
  static async getMessageDetail(account: MailAccount, messageId: string): Promise<DetailedMailMessage> {
    if (account.provider === 'mailtm' && account.token) {
      return MailTmClient.getMessageDetail(account.token, messageId, account.apiBase);
    } else if (account.provider === 'inboxes') {
      return InboxesClient.getMessageDetail(account.address, messageId);
    } else if (account.provider === 'tempmaillol') {
      return TempMailLolClient.getMessageDetail(account.address, messageId);
    } else if (account.provider === 'guerrilla') {
      return GuerrillaMailClient.getMessageDetail(account.token || '', messageId);
    } else if (account.provider === 'secmail') {
      return SecMailClient.getMessageDetail(account.address, messageId);
    } else {
      return MockClient.getMessageDetail(account.address, messageId);
    }
  }

  /**
   * Deletes a message from the mailbox
   */
  static async deleteMessage(account: MailAccount, messageId: string): Promise<boolean> {
    if (account.provider === 'mailtm' && account.token) {
      await MailTmClient.deleteMessage(account.token, messageId, account.apiBase);
    } else if (account.provider === 'inboxes') {
      await InboxesClient.deleteMessage(messageId);
    } else if (account.provider === 'guerrilla') {
      await GuerrillaMailClient.deleteMessage(account.token || '', messageId);
    } else if (account.provider === 'mock') {
      await MockClient.deleteMessage(account.address, messageId);
    }

    // Update cache
    const cached = StorageManager.getCachedMessages(account.address);
    const updated = cached.filter((m) => m.id !== messageId);
    StorageManager.setCachedMessages(account.address, updated);

    return true;
  }

  /**
   * Deletes the active mailbox entirely and generates a fresh one
   */
  static async deleteCurrentAccount(account: MailAccount): Promise<MailAccount> {
    StorageManager.removeSavedAccount(account.address);
    return this.getOrCreateAccount(true);
  }

  /**
   * Sends a simulated verification email (useful for instant user testing)
   */
  static sendTestEmail(account: MailAccount, type: 'github' | 'notion' | 'welcome' = 'github'): DetailedMailMessage {
    return MockClient.sendTestVerificationEmail(account.address, type);
  }
}
