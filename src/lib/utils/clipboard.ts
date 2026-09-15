/**
 * Clipboard helper with toast notification dispatch
 */

function dispatchToast(message: string, type: 'success' | 'error'): void {
  window.dispatchEvent(
    new CustomEvent('tempomail:toast', {
      detail: { message, type },
    })
  );
}

export async function copyToClipboard(text: string, label: string = 'Copied to clipboard!'): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      dispatchToast(label, 'success');
      return true;
    }

    // Fallback for older browsers / non-secure contexts
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const ok = document.execCommand('copy');
    textArea.remove();
    if (!ok) throw new Error('execCommand copy returned false');

    dispatchToast(label, 'success');
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    const i18n = (window as any).__TEMPO_I18N__;
    dispatchToast(i18n?.toasts?.copyFailed || i18n?.common?.copyFailedToast || 'Failed to copy', 'error');
    return false;
  }
}
