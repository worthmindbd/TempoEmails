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
   * Fetches messages for an account.
   * Merges incoming remote messages with locally stored messages in browser localStorage,
   * guaranteeing that received emails are NEVER lost when the provider server purges them after a few minutes.
   */
  static async getMessages(account: MailAccount, isInitialLoad: boolean = false): Promise<MailMessage[]> {
    const previousMsgs = StorageManager.getCachedMessages(account.address);
    const prevIds = new Set(previousMsgs.map((m) => m.id));

    let remoteMessages: MailMessage[] = [];
    let fetchSucceeded = false;

    try {
      if (account.provider === 'mailtm' && account.token) {
        remoteMessages = await MailTmClient.getMessages(account.token, account.apiBase);
        fetchSucceeded = true;
      } else if (account.provider === 'inboxes') {
        remoteMessages = await InboxesClient.getMessages(account.address);
        fetchSucceeded = true;
      } else if (account.provider === 'tempmaillol' && account.token) {
        remoteMessages = await TempMailLolClient.getMessages(account.token, account.address);
        fetchSucceeded = true;
      } else if (account.provider === 'guerrilla') {
        remoteMessages = await GuerrillaMailClient.getMessages(account.token, account.address);
        fetchSucceeded = true;
      } else if (account.provider === 'secmail') {
        remoteMessages = await SecMailClient.getMessages(account.address);
        fetchSucceeded = true;
      } else {
        remoteMessages = await MockClient.getMessages(account.address);
        fetchSucceeded = true;
      }
    } catch (err: any) {
      if (err?.message === 'UNAUTHORIZED' && account.provider === 'mailtm') {
        // Token expired, re-create or fallback
        const newAcc = await this.getOrCreateAccount(true);
        return this.getMessages(newAcc, isInitialLoad);
      }
      console.warn('Remote fetch failed, falling back to local storage cache:', err);
    }

    let finalMessages: MailMessage[];
    if (fetchSucceeded) {
      // Merge remote messages with existing cache to permanently keep emails even after server deletion
      finalMessages = StorageManager.mergeAndSaveMessages(account.address, remoteMessages);
    } else {
      finalMessages = previousMsgs;
    }

    // Check if new emails arrived compared to previous state
    const newItems = finalMessages.filter((m) => !prevIds.has(m.id));

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

    // Proactively prefetch full email contents into localStorage for new items
    // so user can read full email body even if provider server purges it shortly
    if (fetchSucceeded && newItems.length > 0) {
      this.prefetchMessageDetails(account, newItems);
    }

    return finalMessages;
  }

  /**
   * Background pre-fetches and saves full email bodies into localStorage cache
   * so emails are permanently preserved even if the provider purges them shortly.
   */
  private static prefetchMessageDetails(account: MailAccount, newMessages: MailMessage[]): void {
    if (!newMessages || newMessages.length === 0) return;

    setTimeout(async () => {
      for (const msg of newMessages) {
        try {
          const cached = StorageManager.getCachedMessageDetail(account.address, msg.id);
          if (!cached || (!cached.html?.length && !cached.text)) {
            let detail: DetailedMailMessage | null = null;
            if (account.provider === 'mailtm' && account.token) {
              detail = await MailTmClient.getMessageDetail(account.token, msg.id, account.apiBase);
            } else if (account.provider === 'inboxes') {
              detail = await InboxesClient.getMessageDetail(account.address, msg.id);
            } else if (account.provider === 'tempmaillol') {
              detail = await TempMailLolClient.getMessageDetail(account.address, msg.id);
            } else if (account.provider === 'guerrilla') {
              detail = await GuerrillaMailClient.getMessageDetail(account.token || '', msg.id);
            } else if (account.provider === 'secmail') {
              detail = await SecMailClient.getMessageDetail(account.address, msg.id);
            } else if (account.provider === 'mock') {
              detail = await MockClient.getMessageDetail(account.address, msg.id);
            }

            if (detail) {
              detail.seen = msg.seen;
              StorageManager.setCachedMessageDetail(account.address, detail);
            }
          }
        } catch (e) {
          console.debug('Background prefetch detail note:', e);
        }
      }
    }, 100);
  }

  /**
   * Fetches full body content and attachments for a specific message.
   * Checks browser localStorage cache first, then fetches remotely and caches permanently.
   */
  static async getMessageDetail(account: MailAccount, messageId: string): Promise<DetailedMailMessage> {
    // 1. Check local storage cache first
    const cachedDetail = StorageManager.getCachedMessageDetail(account.address, messageId);
    if (cachedDetail && (cachedDetail.html?.length > 0 || cachedDetail.text)) {
      if (!cachedDetail.seen) {
        cachedDetail.seen = true;
        StorageManager.setCachedMessageDetail(account.address, cachedDetail);
        StorageManager.markMessageSeen(account.address, messageId);
      }
      return cachedDetail;
    }

    // 2. Try fetching from remote provider
    try {
      let detail: DetailedMailMessage;
      if (account.provider === 'mailtm' && account.token) {
        detail = await MailTmClient.getMessageDetail(account.token, messageId, account.apiBase);
      } else if (account.provider === 'inboxes') {
        detail = await InboxesClient.getMessageDetail(account.address, messageId);
      } else if (account.provider === 'tempmaillol') {
        detail = await TempMailLolClient.getMessageDetail(account.address, messageId);
      } else if (account.provider === 'guerrilla') {
        detail = await GuerrillaMailClient.getMessageDetail(account.token || '', messageId);
      } else if (account.provider === 'secmail') {
        detail = await SecMailClient.getMessageDetail(account.address, messageId);
      } else {
        detail = await MockClient.getMessageDetail(account.address, messageId);
      }

      detail.seen = true;
      // Save into permanent local storage
      StorageManager.setCachedMessageDetail(account.address, detail);
      StorageManager.markMessageSeen(account.address, messageId);
      return detail;
    } catch (err) {
      console.warn('Failed to fetch remote message detail, checking fallback:', err);

      // 3. Fallback: If remote failed (e.g. server deleted message), check cached detail or build from summary
      if (cachedDetail) {
        return cachedDetail;
      }

      const summaryList = StorageManager.getCachedMessages(account.address);
      const summary = summaryList.find((m) => m.id === messageId);
      if (summary) {
        const fallbackDetail: DetailedMailMessage = {
          ...summary,
          seen: true,
          text: summary.intro || summary.subject || '',
          html: summary.intro ? [`<p>${summary.intro}</p>`] : [`<p>${summary.subject}</p>`],
          attachments: [],
        };
        StorageManager.setCachedMessageDetail(account.address, fallbackDetail);
        StorageManager.markMessageSeen(account.address, messageId);
        return fallbackDetail;
      }

      throw err;
    }
  }

  /**
   * Deletes a message from the mailbox and localStorage
   */
  static async deleteMessage(account: MailAccount, messageId: string): Promise<boolean> {
    try {
      if (account.provider === 'mailtm' && account.token) {
        await MailTmClient.deleteMessage(account.token, messageId, account.apiBase);
      } else if (account.provider === 'inboxes') {
        await InboxesClient.deleteMessage(messageId);
      } else if (account.provider === 'guerrilla') {
        await GuerrillaMailClient.deleteMessage(account.token || '', messageId);
      } else if (account.provider === 'mock') {
        await MockClient.deleteMessage(account.address, messageId);
      }
    } catch (err) {
      console.warn('Remote delete failed, proceeding with local removal:', err);
    }

    // Always remove from local storage cache
    StorageManager.removeCachedMessage(account.address, messageId);
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
