/**
 * Date and relative time formatting helpers
 */

export function formatRelativeTime(dateInput: string | Date | number): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return '';

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const i18n = typeof window !== 'undefined' ? (window as any).__TEMPO_I18N__?.relativeTime : null;
  const replaceCount = (template: unknown, fallback: string, n: number): string => {
    if (typeof template !== 'string' || !template.includes('{n}')) return fallback.replace('{n}', String(n));
    return template.replace('{n}', String(n));
  };
  const locale = typeof window !== 'undefined' ? (window as any).__TEMPO_I18N__?.locale : undefined;

  if (diffInSeconds < 10) {
    return typeof i18n?.justNow === 'string' ? i18n.justNow : 'Just now';
  }
  if (diffInSeconds < 60) {
    return replaceCount(i18n?.secondsAgo, '{n}s ago', diffInSeconds);
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return replaceCount(i18n?.minutesAgo, '{n}m ago', diffInMinutes);
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return replaceCount(i18n?.hoursAgo, '{n}h ago', diffInHours);
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return typeof i18n?.yesterday === 'string' ? i18n.yesterday : 'Yesterday';
  }
  if (diffInDays < 7) {
    return replaceCount(i18n?.daysAgo, '{n}d ago', diffInDays);
  }

  return date.toLocaleDateString(locale, {
    year: date.getFullYear() === now.getFullYear() ? undefined : 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatFullDateTime(dateInput: string | Date | number): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return '';

  const locale = typeof window !== 'undefined' ? (window as any).__TEMPO_I18N__?.locale : undefined;

  return date.toLocaleString(locale, {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}
