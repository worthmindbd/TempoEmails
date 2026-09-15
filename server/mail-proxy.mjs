/**
 * Server-side mail API proxy.
 *
 * Most disposable-mail providers either do not send CORS headers for browser
 * origins (api.mail.tm, inboxes.com), lock CORS to their own site
 * (api.tempmail.lol), or are fully dead client-side. This proxy exposes a
 * same-origin endpoint `/api/mail/<provider>/...` that forwards requests to a
 * strict allowlist of upstream provider APIs. It is mounted by:
 *   - server.mjs (production Node server)
 *   - the Vite dev/preview middleware in astro.config.mjs
 *
 * SECURITY: Only allowlisted upstreams are reachable — this is not an open proxy.
 */

const MAX_REQUEST_BODY_BYTES = 1_000_000;
const MAX_RESPONSE_BODY_BYTES = 5_000_000;

// Minimal per-IP rate limit so the same-origin relay can't be abused for mass
// disposable-account creation from a single client.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 60;
const rateLimitHits = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const entry = rateLimitHits.get(ip);
  if (!entry || now - entry.start > RATE_LIMIT_WINDOW_MS) {
    rateLimitHits.set(ip, { start: now, count: 1 });
    return false;
  }
  entry.count += 1;
  if (rateLimitHits.size > 5000) {
    for (const [key, value] of rateLimitHits) {
      if (now - value.start > RATE_LIMIT_WINDOW_MS) rateLimitHits.delete(key);
    }
  }
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

const MAIL_UPSTREAMS = {
  mailtm: 'https://api.mail.tm',
  mailgw: 'https://api.mail.gw',
  inboxes: 'https://inboxes.com',
  tempmaillol: 'https://api.tempmail.lol',
  guerrilla: 'https://api.guerrillamail.com',
};

// Some upstreams gate responses on Origin/Referer or block non-browser UAs.
const PROVIDER_HEADERS = {
  mailtm: { Origin: 'https://mail.tm', Referer: 'https://mail.tm/' },
  mailgw: { Origin: 'https://mail.gw', Referer: 'https://mail.gw/' },
  inboxes: { Origin: 'https://inboxes.com', Referer: 'https://inboxes.com/' },
  tempmaillol: { Origin: 'https://tempmail.lol', Referer: 'https://tempmail.lol/' },
  guerrilla: { Origin: 'https://www.guerrillamail.com', Referer: 'https://www.guerrillamail.com/' },
};

const BROWSER_UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36';

const PROXY_TIMEOUT_MS = 15000;

/**
 * Resolves a proxy path (`/<provider>/<rest>`) to its upstream URL.
 * Shared between the production server handler and the dev-only Astro
 * middleware (src/middleware.ts).
 */
export function resolveMailProxy(pathWithQuery) {
  const url = new URL(pathWithQuery, 'http://localhost');
  const segments = url.pathname.split('/').filter(Boolean);
  const provider = segments.shift() || '';
  const upstream = MAIL_UPSTREAMS[provider];
  if (!upstream) return null;
  const rest = segments.length ? `/${segments.join('/')}` : '';
  return { provider, upstreamUrl: `${upstream}${rest}${url.search}` };
}

/**
 * Builds upstream request headers for a provider, given the incoming headers.
 */
export function buildUpstreamHeaders(provider, incomingHeaders = {}) {
  const headers = {
    Accept: incomingHeaders['accept'] || 'application/json',
    'User-Agent': BROWSER_UA,
    ...(PROVIDER_HEADERS[provider] || {}),
  };
  if (incomingHeaders['content-type']) headers['Content-Type'] = incomingHeaders['content-type'];
  if (incomingHeaders['authorization']) headers['Authorization'] = incomingHeaders['authorization'];
  return headers;
}

/**
 * Handles a proxy request. `pathWithQuery` must be the URL path *after*
 * `/api/mail`, e.g. `/mailtm/domains?x=1`.
 */
export async function handleMailProxy(req, res, pathWithQuery) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { Allow: 'GET, POST, DELETE, OPTIONS' });
    res.end();
    return;
  }
  if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'DELETE') {
    res.writeHead(405, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  const clientIp =
    (req.headers['x-forwarded-for'] || '').toString().split(',')[0].trim() ||
    req.socket?.remoteAddress ||
    'unknown';
  if (isRateLimited(clientIp)) {
    res.writeHead(429, {
      'Content-Type': 'application/json; charset=utf-8',
      'Retry-After': '60',
    });
    res.end(JSON.stringify({ error: 'Too many requests — please slow down' }));
    return;
  }

  let resolved;
  try {
    resolved = resolveMailProxy(pathWithQuery);
  } catch {
    resolved = null;
  }
  if (!resolved) {
    res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: 'Unknown mail provider' }));
    return;
  }
  const { provider, upstreamUrl: target } = resolved;

  // Collect request body (JSON payloads for POST, e.g. mail.tm account creation)
  let body;
  if (req.method === 'POST') {
    body = await new Promise((resolve) => {
      const chunks = [];
      let size = 0;
      let rejected = false;
      req.on('data', (c) => {
        if (rejected) return;
        size += c.length;
        if (size > MAX_REQUEST_BODY_BYTES) {
          rejected = true;
          resolve(undefined); // cap at 1 MB
          req.pause();
          req.removeAllListeners('data');
          req.removeAllListeners('end');
          req.resume();
          return;
        }
        chunks.push(c);
      });
      req.on('end', () => {
        if (!rejected) resolve(Buffer.concat(chunks));
      });
      req.on('error', () => {
        if (!rejected) resolve(undefined);
      });
    });
    if (body === undefined) {
      res.writeHead(413, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Payload too large' }));
      return;
    }
  }

  // Only forward a minimal, safe set of headers.
  const headers = {
    Accept: req.headers['accept'] || 'application/json',
    'User-Agent': BROWSER_UA,
    ...(PROVIDER_HEADERS[provider] || {}),
  };
  if (req.headers['content-type']) headers['Content-Type'] = req.headers['content-type'];
  if (req.headers['authorization']) headers['Authorization'] = req.headers['authorization'];

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), PROXY_TIMEOUT_MS);

  try {
    const upstreamRes = await fetch(target, {
      method: req.method,
      headers,
      body,
      signal: controller.signal,
      redirect: 'follow',
    });

    const upstreamType = (upstreamRes.headers.get('content-type') || 'application/json; charset=utf-8').toLowerCase();
    const contentLength = parseInt(upstreamRes.headers.get('content-length') || '', 10);
    if (Number.isFinite(contentLength) && contentLength > MAX_RESPONSE_BODY_BYTES) {
      res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Upstream response too large' }));
      return;
    }

    const buf = Buffer.from(await upstreamRes.arrayBuffer());
    if (buf.length > MAX_RESPONSE_BODY_BYTES) {
      res.writeHead(502, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ error: 'Upstream response too large' }));
      return;
    }

    const isAttachmentPath = /\/messages\/[^/]+\/attachment|\/download\b|\battachment\b/i.test(target);
    const outHeaders = {
      // Never execute upstream content in our origin: API payloads stay JSON,
      // downloads are forced to `attachment` so evil.svg can't run scripts.
      'Content-Type': isAttachmentPath
        ? 'application/octet-stream'
        : upstreamType.includes('json')
          ? 'application/json; charset=utf-8'
          : 'application/octet-stream',
      'Content-Disposition': isAttachmentPath ? 'attachment' : 'inline',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    };
    res.writeHead(upstreamRes.status, outHeaders);

    if (req.method === 'HEAD') {
      res.end();
      return;
    }

    res.end(buf);
  } catch (err) {
    const timedOut = err?.name === 'AbortError';
    res.writeHead(timedOut ? 504 : 502, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ error: timedOut ? 'Upstream timeout' : 'Upstream fetch failed' }));
  } finally {
    clearTimeout(timer);
  }
}
