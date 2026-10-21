/**
 * Translated labels sometimes carry decoration that the redesigned UI renders
 * itself (a "1." step number). Strip it for display.
 */
export function stripStepNumber(text: string): string {
  return text.replace(/^\s*\d+[.)]\s*/, '');
}
