/**
 * Date and relative time formatting helpers
 */

export function formatRelativeTime(dateInput: string | Date | number): string {
  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return '';

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const i18n = typeof window !== 'undefined' ? (window as any).__TEMPO_I18N__?.relativeTime : null;
  const locale = typeof window !== 'undefined' ? (window as any).__TEMPO_I18N__?.locale : undefined;

  if (diffInSeconds < 10) {
    return i18n?.justNow || 'Just now';
  }
  if (diffInSeconds < 60) {
    return i18n ? i18n.secondsAgo.replace('{n}', String(diffInSeconds)) : `${diffInSeconds}s ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return i18n ? i18n.minutesAgo.replace('{n}', String(diffInMinutes)) : `${diffInMinutes}m ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return i18n ? i18n.hoursAgo.replace('{n}', String(diffInHours)) : `${diffInHours}h ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) {
    return i18n?.yesterday || 'Yesterday';
  }
  if (diffInDays < 7) {
    return i18n ? i18n.daysAgo.replace('{n}', String(diffInDays)) : `${diffInDays}d ago`;
  }

  return date.toLocaleDateString(locale, {
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
