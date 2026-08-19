/**
 * Clipboard helper with toast notification dispatch
 */

export async function copyToClipboard(text: string, label: string = 'Copied to clipboard!'): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers / non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      textArea.remove();
    }

    // Trigger global custom toast event
    window.dispatchEvent(
      new CustomEvent('tempomail:toast', {
        detail: {
          message: label,
          type: 'success',
        },
      })
    );
    return true;
  } catch (err) {
    console.error('Failed to copy to clipboard', err);
    window.dispatchEvent(
      new CustomEvent('tempomail:toast', {
        detail: {
          message: 'Failed to copy',
          type: 'error',
        },
      })
    );
    return false;
  }
}
