/**
 * Lightweight QR Code Generator
 * Generates an SVG string representation of a QR Code for any text (like email address).
 *
 * NOTE: encoding happens via the external api.qrserver.com service, so the
 * email address is transmitted to that third party (acceptable for a
 * disposable address; swap in a local generator if that ever changes).
 * The alt text is static — never interpolate the raw address into attributes.
 */
export function generateQrCodeSvg(text: string, size: number = 220): string {
  const safeSize = Number.isFinite(size) ? Math.min(512, Math.max(64, Math.floor(size))) : 220;
  const encodedText = encodeURIComponent(text);
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${safeSize}x${safeSize}&data=${encodedText}&format=svg&margin=1&qzone=1`;

  return `<img src="${qrSvgUrl}" alt="QR code" width="${safeSize}" height="${safeSize}" loading="lazy" referrerpolicy="no-referrer" decoding="async" class="rounded-xl bg-white p-2.5 shadow-md mx-auto" />`;
}
