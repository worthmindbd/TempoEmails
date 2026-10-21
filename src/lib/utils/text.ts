/**
 * Translated labels sometimes carry decoration that the redesigned UI renders
 * itself (a leading emoji, or a "1." step number). Strip it for display.
 */
export function stripLeadingEmoji(text: string): string {
  return text.replace(/^[\p{Extended_Pictographic}️‍\s]+/u, '');
}

export function stripStepNumber(text: string): string {
  return text.replace(/^\s*\d+[.)]\s*/, '');
}
