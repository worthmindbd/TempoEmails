import {
  SUPPORTED_LOCALES,
  LANGUAGES,
  DEFAULT_LOCALE,
  isSupportedLocale,
  type Locale,
} from './languages';
import { TRANSLATIONS, type TranslationSchema } from './translations';

/**
 * Extract locale from a URL object or pathname string
 */
export function getLocaleFromUrl(urlOrPath: URL | string): Locale {
  const pathname = typeof urlOrPath === 'string' ? urlOrPath : urlOrPath.pathname;
  const segments = pathname.split('/').filter(Boolean);

  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    return segments[0];
  }

  return DEFAULT_LOCALE;
}

/**
 * Convert any pathname to a target locale's URL path
 */
export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  // Normalize pathname to always have trailing slash
  let cleanPath = pathname.trim();
  if (!cleanPath.startsWith('/')) cleanPath = `/${cleanPath}`;
  if (!cleanPath.endsWith('/')) cleanPath = `${cleanPath}/`;

  const segments = cleanPath.split('/').filter(Boolean);

  // If first segment is currently a supported locale, strip it
  if (segments.length > 0 && isSupportedLocale(segments[0])) {
    segments.shift();
  }

  const remainingPath = segments.join('/');

  if (targetLocale === DEFAULT_LOCALE) {
    return remainingPath ? `/${remainingPath}/` : '/';
  }

  return remainingPath ? `/${targetLocale}/${remainingPath}/` : `/${targetLocale}/`;
}

export interface AlternateLink {
  hreflang: string;
  href: string;
}

/**
 * Generate complete hreflang alternate links for SEO
 */
export function getAlternateLinks(pathname: string, siteUrl: string): AlternateLink[] {
  const base = siteUrl.replace(/\/+$/, '');
  const links: AlternateLink[] = [];

  // 1. x-default points to default locale (English)
  const defaultPath = getLocalizedPath(pathname, DEFAULT_LOCALE);
  links.push({
    hreflang: 'x-default',
    href: `${base}${defaultPath}`,
  });

  // 2. Each supported locale with its standard hreflang code
  for (const locale of SUPPORTED_LOCALES) {
    const locInfo = LANGUAGES[locale];
    const locPath = getLocalizedPath(pathname, locale);
    links.push({
      hreflang: locInfo.hreflang,
      href: `${base}${locPath}`,
    });
  }

  return links;
}

/**
 * Retrieve translation dictionary for given locale with fallback to English
 */
export function useTranslation(locale: Locale): TranslationSchema {
  if (isSupportedLocale(locale) && TRANSLATIONS[locale]) {
    return TRANSLATIONS[locale];
  }
  return TRANSLATIONS[DEFAULT_LOCALE];
}

/**
 * Compact client-side i18n payload for vanilla JS components (MailboxManager, toasts, date formatter)
 */
export function getClientI18nPayload(locale: Locale) {
  const t = useTranslation(locale);
  return {
    locale,
    dir: LANGUAGES[locale]?.dir || 'ltr',
    toasts: t.toasts,
    addressBar: t.addressBar,
    inboxList: t.inboxList,
    emailDetail: t.emailDetail,
    confirmModal: t.confirmModal,
    relativeTime: t.relativeTime,
    historyDrawer: t.historyDrawer,
    common: t.common,
  };
}
