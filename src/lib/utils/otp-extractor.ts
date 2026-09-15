/**
 * Smart OTP & Verification Code Extractor
 * Uses regex heuristics to identify verification codes, PINs, and activation URLs.
 */

export function extractOtpCode(subject: string = '', body: string = ''): string | null {
  const normalizedSubject = subject || '';
  // Normalize space-grouped codes ("5 9 3 8 2 1", "593-821", "593 821") so
  // they match the digit runs below.
  const squashed = (s: string) => s.replace(/(?<=\d)[\s\u00a0\u2000-\u200b.\-–—_·:]+(?=\d)/g, '');
  const normalizedBody = squashed(body || '');
  const combined = `${normalizedSubject} \n ${normalizedBody}`;

  const codeKeywords = /(?:verification|security|confirmation|authentication|activation|authori[sz]ation|two[-\s]?factor|2fa|one[-\s]?time|login|sign[-\s]?in|otp|pin|passcode|password|c[oó]digo|code|kennwort|mot\s+de\s+passe|codice|код|验证码|確認コード|رمز)/i;

  // 1. Explicit OTP patterns like: "code is: 123456", "verification code: 984021", "OTP: 4920"
  //    Must contain at least one digit to avoid capturing words ("code is: THANKS").
  const explicitPattern = /(?:verification\s*code|security\s*code|confirmation\s*code|one-time\s*pass(?:code|word)?|login\s*code|pin|otp|passcode)(?:\s*(?:is|:|\-|=))\s*([0-9A-Z]{4,8})/i;
  const explicitMatch = combined.match(explicitPattern);
  if (explicitMatch && explicitMatch[1] && /[0-9]/.test(explicitMatch[1])) {
    return explicitMatch[1].trim();
  }

  // 2. Dash-separated numbers like 123-456
  const dashedPattern = /\b([0-9]{3}-[0-9]{3})\b/;
  const dashedMatch = combined.match(dashedPattern);
  if (dashedMatch && dashedMatch[1]) {
    return dashedMatch[1].trim();
  }

  // 3. Subject-first: standalone digit runs in subject near a code keyword
  // (order numbers like "Order #48291" are skipped — no keyword nearby).
  const subjectNumMatch = normalizedSubject.match(/\b([0-9]{4,8})\b/);
  if (
    subjectNumMatch &&
    subjectNumMatch[1] &&
    !/^(19|20)[0-9]{2}$/.test(subjectNumMatch[1]) &&
    codeKeywords.test(normalizedSubject)
  ) {
    return subjectNumMatch[1].trim();
  }

  // 4. Keyword-proximity scan in body: prefer a digit run near a code keyword
  // over a bare phone number / price / date elsewhere in the mail.
  const bodyWindow = 60;
  let bestKeywordCode: string | null = null;
  if (codeKeywords.test(normalizedBody)) {
    const digitRuns = [...normalizedBody.matchAll(/\b([0-9]{4,8})\b/g)];
    for (const run of digitRuns) {
      const code = run[1];
      if (!code || /^(19|20)[0-9]{2}$/.test(code)) continue;
      const idx = run.index ?? 0;
      const context = normalizedBody.slice(Math.max(0, idx - bodyWindow), idx + code.length + bodyWindow);
      if (codeKeywords.test(context)) {
        bestKeywordCode = code;
        break;
      }
    }
    if (bestKeywordCode) return bestKeywordCode.trim();
  }

  // 5. Standalone 6-digit numbers in body (most common OTP length)
  const sixDigitPattern = /\b([0-9]{6})\b/;
  const sixDigitMatch = normalizedBody.match(sixDigitPattern);
  if (sixDigitMatch && sixDigitMatch[1]) {
    return sixDigitMatch[1].trim();
  }

  // 6. Standalone 4, 5 or 8 digit numbers in body (skip years like 1998/2024)
  const numPattern = /\b([0-9]{4}|[0-9]{5}|[0-9]{8})\b/;
  const numMatch = normalizedBody.match(numPattern);
  if (numMatch && numMatch[1] && !/^(19|20)[0-9]{2}$/.test(numMatch[1])) {
    return numMatch[1].trim();
  }

  return null;
}

/**
 * Extracts action / verification link from email content.
 * SECURITY: only https links are ever returned — this value is assigned to an
 * anchor href (http would allow sslstrip-style downgrade).
 */
export function extractVerificationLink(html: string = '', text: string = ''): string | null {
  const isSafeUrl = (url: string) => /^https:\/\//i.test(url);

  // Check HTML <a> tags with text like "Verify", "Activate", "Confirm", "Click here"
  if (html) {
    const linkMatch = html.match(/<a\s+(?:[^>]*?\s+)?href=["']([^"']*(?:verify|confirm|activate|validate|token|auth|login|sign[\s-]?in|magic|continue|proceed)[^"']*)["'][^>]*>(.*?)<\/a>/i);
    if (linkMatch && linkMatch[1] && isSafeUrl(linkMatch[1])) {
      return linkMatch[1];
    }

    // Any primary button href
    const anyBtnMatch = html.match(/<a\s+(?:[^>]*?\s+)?href=["'](https:\/\/[^"']+)["'][^>]*class=["'][^"']*(?:btn|button)[^"']*["']/i);
    if (anyBtnMatch && anyBtnMatch[1] && isSafeUrl(anyBtnMatch[1])) {
      return anyBtnMatch[1];
    }

    // Fallback: first https link in the HTML (covers magic-login / short links
    // with no keyword in the URL).
    const firstHttps = html.match(/<a\s+(?:[^>]*?\s+)?href=["'](https:\/\/[^"']+)["']/i);
    if (firstHttps && firstHttps[1] && isSafeUrl(firstHttps[1])) {
      return firstHttps[1];
    }
  }

  // Check URLs in plain text with verify/confirm/activate keywords
  if (text) {
    const textMatches = [...text.matchAll(/(https:\/\/[^\s<>"']+)/gi)];
    for (const m of textMatches) {
      if (/(verify|confirm|activate|token=|auth|login|magic|continue)/i.test(m[1])) {
        return m[1];
      }
    }
    if (textMatches.length > 0) {
      return textMatches[0][1];
    }
  }

  return null;
}
