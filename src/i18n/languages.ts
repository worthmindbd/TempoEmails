export const SUPPORTED_LOCALES = [
  'en',
  'es',
  'pt',
  'fr',
  'de',
  'ru',
  'zh',
  'ja',
  'ar',
  'id',
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export interface LanguageInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flagCode: string;
  dir: 'ltr' | 'rtl';
  ogLocale: string;
  hreflang: string;
}

export const LANGUAGES: Record<Locale, LanguageInfo> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    flagCode: 'us',
    dir: 'ltr',
    ogLocale: 'en_US',
    hreflang: 'en',
  },
  es: {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flagCode: 'es',
    dir: 'ltr',
    ogLocale: 'es_ES',
    hreflang: 'es',
  },
  pt: {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flagCode: 'br',
    dir: 'ltr',
    ogLocale: 'pt_BR',
    hreflang: 'pt',
  },
  fr: {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flagCode: 'fr',
    dir: 'ltr',
    ogLocale: 'fr_FR',
    hreflang: 'fr',
  },
  de: {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flagCode: 'de',
    dir: 'ltr',
    ogLocale: 'de_DE',
    hreflang: 'de',
  },
  ru: {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    flagCode: 'ru',
    dir: 'ltr',
    ogLocale: 'ru_RU',
    hreflang: 'ru',
  },
  zh: {
    code: 'zh',
    name: 'Chinese',
    nativeName: '简体中文',
    flagCode: 'cn',
    dir: 'ltr',
    ogLocale: 'zh_CN',
    hreflang: 'zh-CN',
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flagCode: 'jp',
    dir: 'ltr',
    ogLocale: 'ja_JP',
    hreflang: 'ja',
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    flagCode: 'sa',
    dir: 'rtl',
    ogLocale: 'ar_AR',
    hreflang: 'ar',
  },
  id: {
    code: 'id',
    name: 'Indonesian',
    nativeName: 'Bahasa Indonesia',
    flagCode: 'id',
    dir: 'ltr',
    ogLocale: 'id_ID',
    hreflang: 'id',
  },
};

export const DEFAULT_LOCALE: Locale = 'en';

export const NON_DEFAULT_LOCALES = SUPPORTED_LOCALES.filter(
  (locale) => locale !== DEFAULT_LOCALE
) as Exclude<Locale, typeof DEFAULT_LOCALE>[];

export function isSupportedLocale(locale: string): locale is Locale {
  return SUPPORTED_LOCALES.includes(locale as Locale);
}
