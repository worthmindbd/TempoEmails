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

function isTrackingPixel(img: Element): boolean {
  const w = img.getAttribute('width');
  const h = img.getAttribute('height');
  if ((w === '1' || w === '0') && (h === '1' || h === '0')) return true;
  const style = (img.getAttribute('style') || '').toLowerCase().replace(/\s/g, '');
  if (style.includes('width:1px') && style.includes('height:1px')) return true;
  if (style.includes('display:none') && (img.getAttribute('src') || '').length > 0) return true;
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
