const ALLOWED_TAGS = new Set([
  'a', 'b', 'strong', 'i', 'em', 'u', 's', 'strike', 'del',
  'p', 'br', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'pre', 'code', 'hr',
  'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
  'img', 'font', 'center', 'small', 'sub', 'sup', 'mark',
]);

const ALLOWED_ATTRS: Record<string, Set<string>> = {
  a: new Set(['href', 'title']),
  img: new Set(['src', 'alt', 'title', 'width', 'height']),
};

const BLOCKED_ELEMENTS = new Set([
  'script', 'style', 'iframe', 'object', 'embed', 'form', 'input',
  'button', 'select', 'textarea', 'meta', 'link', 'base', 'title',
  'noscript', 'template', 'slot', 'applet', 'frame', 'frameset',
]);

// Above this many CSS pixels an image is treated as real content rather than a
// beacon. Open-tracking pixels are typically 1x1, but plenty of senders use
// 2x2/3x1 "web beacons" precisely to slip past naive 1x1 filters.
const BEACON_MAX_DIMENSION_PX = 3;

function isSafeUrl(url: string, allowMailto = false): boolean {
  const clean = url.trim().toLowerCase();
  if (clean.startsWith('https://')) return true;
  if (clean.startsWith('http://')) return true;
  if (allowMailto && clean.startsWith('mailto:')) return true;
  if (clean.startsWith('data:image/')) return true;
  return false;
}

function sanitizeStyleValue(value: string): string | null {
  const lower = value.toLowerCase();
  if (
    lower.includes('url(') ||
    lower.includes('expression(') ||
    lower.includes('behavior:') ||
    lower.includes('javascript:') ||
    lower.includes('@import')
  ) {
    return null;
  }
  return value;
}

/**
 * Detects tracking beacons: images that are too small to be real content, or
 * hidden by the sender so a human never sees them. Stripping these is what
 * stops "email opened" events from reaching third parties.
 */
function isTrackingPixel(img: Element): boolean {
  const src = img.getAttribute('src') || '';
  if (!src) return false;

  const rawW = (img.getAttribute('width') || '').trim().toLowerCase();
  const rawH = (img.getAttribute('height') || '').trim().toLowerCase();
  const style = (img.getAttribute('style') || '').toLowerCase().replace(/\s+/g, '');
  const styleW = style.match(/(?:^|;)width:([\d.]+)px/)?.[1];
  const styleH = style.match(/(?:^|;)height:([\d.]+)px/)?.[1];

  // Any explicitly tiny dimension (<= 3px) in either attribute or style.
  const dims = [rawW, rawH, styleW, styleH];
  const explicitTiny = dims.some((d) => d !== undefined && d !== '' && parseFloat(d) <= BEACON_MAX_DIMENSION_PX);
  if (explicitTiny) return true;

  // Hidden from view: display:none, visibility:hidden, opacity:0, or pushed
  // off-canvas with a large negative offset.
  if (/display:none/.test(style)) return true;
  if (/visibility:hidden/.test(style)) return true;
  if (/opacity:0(?:\.0+)?(?:;|$)/.test(style)) return true;
  if (/(?:^|;)(?:margin|top|left):-(\d{3,})px/.test(style)) return true;

  // Zero-area or empty images are never meaningful content.
  if (rawW === '0' || rawH === '0') return true;

  return false;
}

export function escapeHtml(text: string): string {
  return (text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function sanitizeEmailHtml(html: string): string {
  if (!html) return '';
  if (typeof DOMParser === 'undefined') {
    return escapeHtml(html.replace(/<[^>]*>?/gm, ''));
  }

  let doc: Document;
  try {
    doc = new DOMParser().parseFromString(`<div>${html}</div>`, 'text/html');
  } catch {
    return escapeHtml(html);
  }

  doc.querySelectorAll('comment');
  const iterator = doc.createNodeIterator(doc.body, NodeFilter.SHOW_COMMENT);
  let commentNode: Node | null;
  const comments: Node[] = [];
  while ((commentNode = iterator.nextNode())) comments.push(commentNode);
  comments.forEach((c) => c.parentNode?.removeChild(c));

  const elements = Array.from(doc.body.getElementsByTagName('*'));
  for (const el of elements) {
    const tag = el.tagName.toLowerCase();

    if (BLOCKED_ELEMENTS.has(tag)) {
      el.parentNode?.removeChild(el);
      continue;
    }

    if (!ALLOWED_TAGS.has(tag)) {
      const parent = el.parentNode;
      if (parent) {
        while (el.firstChild) parent.insertBefore(el.firstChild, el);
        parent.removeChild(el);
      }
      continue;
    }

    if (tag === 'img') {
      if (isTrackingPixel(el)) {
        el.parentNode?.removeChild(el);
        continue;
      }
      const src = el.getAttribute('src') || '';
      if (!isSafeUrl(src)) {
        el.parentNode?.removeChild(el);
        continue;
      }
      el.setAttribute('loading', 'lazy');
      el.setAttribute('referrerpolicy', 'no-referrer');
      el.setAttribute('decoding', 'async');
    }

    if (tag === 'a') {
      const href = el.getAttribute('href') || '';
      if (href && !isSafeUrl(href, true)) {
        el.removeAttribute('href');
      }
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }

    const allowed = ALLOWED_ATTRS[tag] || new Set<string>();
    for (const attr of Array.from(el.attributes)) {
      const name = attr.name.toLowerCase();
      if (name.startsWith('on')) {
        el.removeAttribute(attr.name);
        continue;
      }
      if (name === 'style') {
        const clean = sanitizeStyleValue(attr.value);
        if (clean === null) el.removeAttribute(attr.name);
        continue;
      }
      if (name === 'src' || name === 'href') continue;
      if (!allowed.has(name)) {
        el.removeAttribute(attr.name);
      }
    }

    el.removeAttribute('srcset');
    el.removeAttribute('formaction');
    el.removeAttribute('xlink:href');
  }

  return doc.body.innerHTML;
}
