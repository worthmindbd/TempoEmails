/**
 * Dynamic Site Configuration
 * All domains, URLs, and support email addresses are managed centrally
 * and dynamically resolved from environment variables.
 */

function resolveSiteUrl(): string {
  const url =
    (typeof import.meta !== 'undefined' && import.meta.env.SITE_URL) ||
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://tempoemails.com';

  let clean = url.trim();
  if (!clean.startsWith('http://') && !clean.startsWith('https://')) {
    clean = `https://${clean}`;
  }
  return clean.replace(/\/+$/, '');
}

function resolveDomain(siteUrl: string): string {
  try {
    return new URL(siteUrl).hostname;
  } catch {
    return 'tempoemails.com';
  }
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
