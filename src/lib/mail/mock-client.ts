import type { MailAccount, MailDomain, MailMessage, DetailedMailMessage } from './types';
import { extractOtpCode, extractVerificationLink } from '../utils/otp-extractor';
import { StorageManager } from '../utils/storage';
import { SITE_CONFIG } from '../config';

export class MockClient {
  static async getDomains(): Promise<MailDomain[]> {
    const currentDomain = SITE_CONFIG.domain;
    return [
      { id: 'mock_1', domain: currentDomain, isActive: true, provider: 'mock' as const },
      { id: 'mock_2', domain: 'burnerinbox.dev', isActive: true, provider: 'mock' as const },
      { id: 'mock_3', domain: 'privatemail.link', isActive: true, provider: 'mock' as const },
    ];
  }

  static async createAccount(usernamePrefix?: string, domainName?: string): Promise<MailAccount> {
    const domain = domainName || SITE_CONFIG.domain;
    const prefix = usernamePrefix || `user.${Math.floor(100000 + Math.random() * 900000)}`;
    const address = `${prefix}@${domain}`;

    // Initialize with a welcoming verification message and save it in localStorage
    const welcomeMsg = this.generateSampleEmail(address, 'welcome');
    StorageManager.setCachedMessageDetail(address, welcomeMsg);
    StorageManager.mergeAndSaveMessages(address, [welcomeMsg]);

    return {
      id: address,
      address,
      provider: 'mock',
      createdAt: new Date().toISOString(),
    };
  }

  static async getMessages(address: string): Promise<MailMessage[]> {
    return StorageManager.getCachedMessages(address);
  }

  static async getMessageDetail(address: string, messageId: string): Promise<DetailedMailMessage> {
    const found = StorageManager.getCachedMessageDetail(address, messageId);
    if (found) {
      found.seen = true;
      StorageManager.setCachedMessageDetail(address, found);
      return found;
    }

    const summaries = StorageManager.getCachedMessages(address);
    const summary = summaries.find((m) => m.id === messageId);
    if (summary) {
      const fallback: DetailedMailMessage = {
        ...summary,
        seen: true,
        text: summary.intro || summary.subject,
        html: [`<p>${summary.intro || summary.subject}</p>`],
        attachments: [],
      };
      StorageManager.setCachedMessageDetail(address, fallback);
      return fallback;
    }

    throw new Error('Message not found');
  }

  static async deleteMessage(address: string, messageId: string): Promise<boolean> {
    StorageManager.removeCachedMessage(address, messageId);
    return true;
  }

  static sendTestVerificationEmail(address: string, serviceType: 'github' | 'discord' | 'stripe' | 'notion' | 'openai' = 'github'): DetailedMailMessage {
    const newMsg = this.generateSampleEmail(address, serviceType);
    StorageManager.setCachedMessageDetail(address, newMsg);
    StorageManager.mergeAndSaveMessages(address, [newMsg]);
    return newMsg;
  }

  private static generateSampleEmail(address: string, type: string): DetailedMailMessage {
    const id = `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const now = new Date().toISOString();

    const sampleCodes: Record<string, { fromName: string; fromAddr: string; subject: string; code: string; html: string; text: string }> = {
      github: {
        fromName: 'GitHub Security',
        fromAddr: 'noreply@github.com',
        subject: `Your GitHub verification code is ${Math.floor(100000 + Math.random() * 900000)}`,
        code: `${Math.floor(100000 + Math.random() * 900000)}`,
        text: `Hey there,\n\nPlease use the following verification code to complete your signup:\n\nVerification code: {{CODE}}\n\nThis code expires in 10 minutes.\n\nThanks,\nThe GitHub Team`,
        html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #24292e; line-height: 1.6;">
          <div style="margin-bottom: 24px;">
            <svg height="32" viewBox="0 0 16 16" width="32" style="fill: #24292e;"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
          </div>
          <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 16px;">Verify your email address</h2>
          <p>Please enter the following one-time verification code to continue creating your account:</p>
          <div style="background-color: #f6f8fa; border: 1px solid #d0d7de; border-radius: 8px; padding: 18px 24px; font-size: 32px; font-weight: 700; letter-spacing: 6px; text-align: center; color: #0969da; margin: 24px 0; font-family: monospace;">
            {{CODE}}
          </div>
          <p style="font-size: 13px; color: #57606a;">If you did not make this request, you can safely ignore this email.</p>
        </div>`,
      },
      notion: {
        fromName: 'Notion Team',
        fromAddr: 'team@m.notion.so',
        subject: `Your Notion login code is ${Math.floor(100000 + Math.random() * 900000)}`,
        code: `${Math.floor(100000 + Math.random() * 900000)}`,
        text: `Welcome to Notion!\n\nHere is your one-time passcode:\n\n{{CODE}}\n\nUse this code to sign in to your workspace.`,
        html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 540px; margin: 0 auto; padding: 24px; color: #37352f;">
          <h1 style="font-size: 22px; font-weight: 700;">Welcome to Notion</h1>
          <p>Click below to sign in or enter your confirmation code:</p>
          <div style="background: #f7f6f3; border-radius: 8px; padding: 16px 20px; font-size: 28px; font-weight: 700; letter-spacing: 4px; text-align: center; margin: 20px 0; font-family: monospace; color: #2eaadc;">
            {{CODE}}
          </div>
          <a href="https://notion.so/login" style="display: inline-block; background: #2eaadc; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600;">Confirm Email</a>
        </div>`,
      },
      welcome: {
        fromName: 'TempoEmails Team',
        fromAddr: SITE_CONFIG.emails.hello,
        subject: '🎉 Your temporary inbox is ready to receive emails!',
        code: 'TEMPO',
        text: `Welcome to TempoEmails!\n\nYour temporary mailbox is active and ready to receive confirmation codes, OTPs, and activation links.\n\nEnjoy complete privacy without spam!`,
        html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px; color: #202020; line-height: 1.6;">
          <div style="background: linear-gradient(135deg, #ea2804, #ff6a3d); border-radius: 12px; padding: 24px; color: #ffffff; margin-bottom: 20px;">
            <h2 style="margin: 0 0 8px 0; font-size: 24px;">Welcome to TempoEmails 🚀</h2>
            <p style="margin: 0; opacity: 0.9;">Your temporary disposable mailbox is live and listening.</p>
          </div>
          <p>You can use this email address on any website to receive sign-up confirmation emails, OTP codes, and password resets safely.</p>
          <ul style="padding-left: 20px; color: #575757;">
            <li>🛡️ <strong>100% Private</strong>: No personal data or registration needed.</li>
            <li>⚡ <strong>Smart OTP Detection</strong>: Verification codes are highlighted instantly.</li>
            <li>🔄 <strong>Persistent Storage</strong>: Received emails stay saved in your browser local storage.</li>
          </ul>
        </div>`,
      },
    };

    const item = sampleCodes[type] || sampleCodes.welcome;
    const finalCode = item.code.replace('TEMPO', `${Math.floor(100000 + Math.random() * 900000)}`);
    const finalSubject = item.subject.replace(/\d{6}/, finalCode);
    const finalHtml = item.html.replace(/{{CODE}}/g, finalCode);
    const finalText = item.text.replace(/{{CODE}}/g, finalCode);

    return {
      id,
      accountId: address,
      from: {
        name: item.fromName,
        address: item.fromAddr,
      },
      to: [{ address, name: address }],
      subject: finalSubject,
      intro: finalText.slice(0, 100),
      seen: false,
      createdAt: now,
      text: finalText,
      html: [finalHtml],
      attachments: [],
      extractedOtp: extractOtpCode(finalSubject, `${finalText} ${finalHtml}`) || undefined,
      verificationLink: extractVerificationLink(finalHtml, finalText) || undefined,
      provider: 'mock',
    };
  }
}
