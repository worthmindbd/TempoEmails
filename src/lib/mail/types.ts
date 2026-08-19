export interface MailAccount {
  id: string;
  address: string;
  token?: string;
  password?: string;
  apiBase?: string;
  provider: 'mailtm' | 'inboxes' | 'tempmaillol' | 'secmail' | 'guerrilla' | 'mock';
  createdAt: string;
}

export interface MailSenderRecipient {
  address: string;
  name: string;
}

export interface MailMessage {
  id: string;
  accountId: string;
  from: MailSenderRecipient;
  to: MailSenderRecipient[];
  subject: string;
  intro: string;
  seen: boolean;
  isDeleted?: boolean;
  createdAt: string;
  extractedOtp?: string;
  provider: 'mailtm' | 'inboxes' | 'tempmaillol' | 'secmail' | 'guerrilla' | 'mock';
}

export interface MailAttachment {
  id: string;
  filename: string;
  contentType: string;
  disposition: string;
  transferEncoding: string;
  related: boolean;
  size: number;
  downloadUrl?: string;
}

export interface DetailedMailMessage extends MailMessage {
  text: string;
  html: string[];
  attachments: MailAttachment[];
  verificationLink?: string;
}

export interface MailDomain {
  id: string;
  domain: string;
  isActive: boolean;
  provider?: 'mailtm' | 'inboxes' | 'tempmaillol' | 'secmail' | 'guerrilla' | 'mock';
}
