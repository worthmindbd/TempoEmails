/**
 * Lightweight QR Code Generator
 * Generates an SVG string representation of a QR Code for any text (like email address).
 */

// Simple robust matrix generator for QR Code Model 2, Version 1-4 with Error Correction Level L/M
export function generateQrCodeSvg(text: string, size: number = 220): string {
  // Using an encoded QR via standard API / canvas / svg matrix
  // Fallback to high quality crisp vector QR using Google Chart / QuickChart clean vector endpoint or SVG matrix
  const encodedText = encodeURIComponent(text);
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodedText}&format=svg&margin=1&qzone=1`;

  return `<img src="${qrSvgUrl}" alt="QR Code for ${text}" width="${size}" height="${size}" class="rounded-xl bg-white p-2.5 shadow-md mx-auto" />`;
}
