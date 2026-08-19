/**
 * Dynamic Site Configuration
 * All domains, URLs, and support email addresses are managed centrally
 * and dynamically resolved from environment variables.
 */

function resolveSiteUrl(): string {
  let url = '';

  if (typeof import.meta !== 'undefined' && import.meta.env) {
    url = import.meta.env.PUBLIC_SITE_URL || import.meta.env.SITE_URL || '';
  }

  if (!url && typeof process !== 'undefined' && process.env) {
    url = process.env.PUBLIC_SITE_URL || process.env.SITE_URL || '';
  }

  if (!url && typeof window !== 'undefined' && window.location) {
    url = window.location.origin;
  }

  if (!url) {
    url = 'https://tempoemails.com';
  }

  let clean = url.trim();
  if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
    clean = `https://${clean}`;
  }
  return clean.replace(/\/+$/, '');
}

function resolveDomain(siteUrl: string): string {
  let domain = '';

  if (typeof import.meta !== 'undefined' && import.meta.env) {
    domain = import.meta.env.PUBLIC_DOMAIN || '';
  }

  if (!domain && typeof process !== 'undefined' && process.env) {
    domain = process.env.PUBLIC_DOMAIN || '';
  }

  if (!domain) {
    try {
      const parsed = new URL(siteUrl);
      domain = parsed.hostname;
    } catch {
      domain = siteUrl.replace(/^https?:\/\//, '').split('/')[0];
    }
  }

  return domain || 'tempoemails.com';
}

export function getSiteConfig() {
  const siteUrl = resolveSiteUrl();
  const domain = resolveDomain(siteUrl);

  return {
    appName: 'TempoEmails',
    siteUrl,
    domain,
    emails: {
      contact: `contact@${domain}`,
      support: `support@${domain}`,
      business: `business@${domain}`,
      abuse: `abuse@${domain}`,
      hello: `hello@${domain}`,
    },
  };
}

export const SITE_CONFIG = getSiteConfig();
