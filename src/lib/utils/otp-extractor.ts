/**
 * Smart OTP & Verification Code Extractor
 * Uses regex heuristics to identify verification codes, PINs, and activation URLs.
 */

export function extractOtpCode(subject: string = '', body: string = ''): string | null {
  const combined = `${subject} \n ${body}`;

  // 1. Explicit OTP patterns like: "code is: 123456", "verification code: 984021", "OTP: 4920"
  const explicitPattern = /(?:verification\s*code|security\s*code|confirmation\s*code|one-time\s*pass(?:code|word)?|login\s*code|pin|otp|passcode)(?:\s*(?:is|:|\-|=))\s*([0-9A-Z]{4,8})/i;
  const explicitMatch = combined.match(explicitPattern);
  if (explicitMatch && explicitMatch[1]) {
    return explicitMatch[1].trim();
  }

  // 2. Dash-separated numbers like 123-456
  const dashedPattern = /\b([0-9]{3}-[0-9]{3})\b/;
  const dashedMatch = combined.match(dashedPattern);
  if (dashedMatch && dashedMatch[1]) {
    return dashedMatch[1].trim();
  }

  // 3. Subject-first check for standalone 4-8 digit numbers
  const subjectNumMatch = subject.match(/\b([0-9]{4,8})\b/);
  if (subjectNumMatch && subjectNumMatch[1]) {
    return subjectNumMatch[1].trim();
  }

  // 4. Standalone 6-digit numbers in body (most common OTP length)
  const sixDigitPattern = /\b([0-9]{6})\b/;
  const sixDigitMatch = body.match(sixDigitPattern);
  if (sixDigitMatch && sixDigitMatch[1]) {
    return sixDigitMatch[1].trim();
  }

  // 5. Standalone 4 or 8 digit numbers in body
  const numPattern = /\b([0-9]{4}|[0-9]{5}|[0-9]{8})\b/;
  const numMatch = body.match(numPattern);
  if (numMatch && numMatch[1]) {
    return numMatch[1].trim();
  }

  return null;
}

/**
 * Extracts action / verification link from email content
 */
export function extractVerificationLink(html: string = '', text: string = ''): string | null {
  // Check HTML <a> tags with text like "Verify", "Activate", "Confirm", "Click here"
  if (html) {
    const linkMatch = html.match(/<a\s+(?:[^>]*?\s+)?href=["']([^"']*(?:verify|confirm|activate|validate|token|auth)[^"']*)["'][^>]*>(.*?)<\/a>/i);
    if (linkMatch && linkMatch[1]) {
      return linkMatch[1];
    }
    
    // Any primary button href
    const anyBtnMatch = html.match(/<a\s+(?:[^>]*?\s+)?href=["'](https?:\/\/[^"']+)["'][^>]*class=["'][^"']*(?:btn|button)[^"']*["']/i);
    if (anyBtnMatch && anyBtnMatch[1]) {
      return anyBtnMatch[1];
    }
  }

  // Check URLs in plain text with verify/confirm/activate keywords
  if (text) {
    const textUrlMatch = text.match(/(https?:\/\/[^\s<>"']+(?:verify|confirm|activate|token=[a-zA-Z0-9_\-]+)[^\s<>"']*)/i);
    if (textUrlMatch && textUrlMatch[1]) {
      return textUrlMatch[1];
    }
  }

  return null;
}
