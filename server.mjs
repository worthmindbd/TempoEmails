import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';
import { handleMailProxy } from './server/mail-proxy.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');

const PORT = parseInt(process.env.PORT || '4321', 10);
const HOST = process.env.HOST || '0.0.0.0';

// Canonical domain configuration
const SITE_URL = process.env.SITE_URL || 'https://tempoemails.com';
let canonicalHostname = 'tempoemails.com';
try {
  canonicalHostname = new URL(SITE_URL).hostname;
} catch {
  canonicalHostname = 'tempoemails.com';
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
};

// Security headers applied to EVERY response (200, 301, 404, 405, 400).
// HSTS in particular must also ride on ordinary 200 responses: browsers only
// learn the policy from responses they actually load, so sending it solely on
// redirect responses leaves user agents (and their logs/crawls) hitting the
// http:// and www variants that show up in Search Console redirect reports.
const SECURITY_HEADERS = {
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

const COMPRESSIBLE_TYPES = new Set([
  'text/html; charset=utf-8',
  'text/css; charset=utf-8',
  'application/javascript; charset=utf-8',
  'application/json; charset=utf-8',
  'application/manifest+json; charset=utf-8',
  'application/xml; charset=utf-8',
  'text/plain; charset=utf-8',
  'image/svg+xml',
]);

const server = http.createServer((req, res) => {
  void handleServerRequest(req, res);
});

async function handleServerRequest(req, res) {
  // Same-origin mail API proxy (provider allowlist lives in server/mail-proxy.mjs).
  // Runs before the static-file handling and before the GET/HEAD-only gate,
  // so POST/DELETE (mail.tm auth, deletes) can be forwarded too.
  // Parse the raw request target manually. `new URL('//foo', base)` would treat
  // a leading double slash as a protocol-relative URL (host="foo"), silently
  // dropping path segments: that served duplicate 200s on the canonical host
  // and built broken Location headers (lost segment -> 404) on www/http hosts.
  const requestTarget = req.url || '/';
  const queryIndex = requestTarget.indexOf('?');
  const rawPathname = queryIndex >= 0 ? requestTarget.slice(0, queryIndex) : requestTarget;
  const search = queryIndex >= 0 ? requestTarget.slice(queryIndex) : '';

  if (!rawPathname.startsWith('/')) {
    res.writeHead(400, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }

  if (rawPathname === '/api/mail' || rawPathname.startsWith('/api/mail/')) {
    await handleMailProxy(req, res, rawPathname.slice('/api/mail'.length) + search);
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Method Not Allowed');
    return;
  }

  const hostHeader = (req.headers['host'] || '').split(':')[0].toLowerCase();
  const protoHeader = (req.headers['x-forwarded-proto'] || '').toLowerCase();

  // Local development check
  const isLocal =
    hostHeader === 'localhost' ||
    hostHeader === '127.0.0.1' ||
    hostHeader.startsWith('192.168.') ||
    hostHeader.startsWith('10.') ||
    hostHeader.endsWith('.local');

  // Percent-decode defensively: a malformed escape (e.g. "%") must produce a
  // 400, not an unhandled throw that takes down the request handler.
  let pathname;
  try {
    pathname = decodeURIComponent(rawPathname);
  } catch {
    res.writeHead(400, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }
  // Collapse duplicate slashes (e.g. //contact/ -> /contact/)
  const cleanPathname = pathname.replace(/\/+/g, '/');

  let safePath = path.normalize(cleanPathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(DIST_DIR, safePath);

  // Belt-and-braces path traversal guard: the resolved file must stay in dist/.
  if (path.relative(DIST_DIR, filePath).startsWith('..') || path.isAbsolute(path.relative(DIST_DIR, filePath))) {
    res.writeHead(400, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }
  if (path.basename(filePath).startsWith('.')) {
    res.writeHead(403, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  // Check if this path represents a directory or has an index.html that needs a trailing slash
  let isDirectoryPath = false;
  if (!cleanPathname.endsWith('/')) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      isDirectoryPath = true;
    } else {
      const asDir = path.join(DIST_DIR, safePath, 'index.html');
      if (fs.existsSync(asDir) && fs.statSync(asDir).isFile()) {
        isDirectoryPath = true;
      }
    }
  }

  if (cleanPathname !== pathname) {
    // Resolve the trailing slash during the collapse as well, so even malformed
    // inputs (//blog/slug) reach their canonical URL in a single hop.
    // In local dev keep the collapse same-origin; in production jump straight
    // to the absolute canonical URL so chains never form.
    const targetPath = isDirectoryPath ? `${cleanPathname}/` : cleanPathname;
    const redirectUrl = isLocal
      ? `${targetPath}${search}`
      : `https://${canonicalHostname}${targetPath}${search}`;
    res.writeHead(301, {
      Location: redirectUrl,
      ...SECURITY_HEADERS,
      'Content-Type': 'text/plain; charset=utf-8',
    });
    res.end(`301 Moved Permanently: Redirecting to ${redirectUrl}`);
    return;
  }

  // Automatic 301 Canonical & HTTPS Enforcement
  // Redirects http://, www.*, or any non-canonical domain to https://tempoemails.com/*
  // Resolves canonical host, HTTPS, and trailing slash in a single 301 hop to eliminate redirect chains.
  if (!isLocal) {
    const isHttp = protoHeader === 'http';
    const isWwwOrNonCanonical =
      hostHeader.startsWith('www.') || (hostHeader && hostHeader !== canonicalHostname);

    if (isHttp || isWwwOrNonCanonical) {
      const targetPath = isDirectoryPath ? `${cleanPathname}/` : cleanPathname;
      const targetUrl = `https://${canonicalHostname}${targetPath}${search}`;
      res.writeHead(301, {
        Location: targetUrl,
        ...SECURITY_HEADERS,
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.end(`301 Moved Permanently: Redirecting to ${targetUrl}`);
      return;
    }
  }

  // Trailing slash enforcement for directory routes on canonical domain (using absolute canonical URL)
  if (isDirectoryPath) {
    const redirectUrl = `https://${canonicalHostname}${cleanPathname}/${search}`;
    res.writeHead(301, {
      Location: redirectUrl,
      ...SECURITY_HEADERS,
      'Content-Type': 'text/plain; charset=utf-8',
    });
    res.end(`301 Moved Permanently: Redirecting to ${redirectUrl}`);
    return;
  }

  // Directory handling: serve index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // Check if file exists; if not, render 404
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    // 404 fallback: prefer a localized 404 page when the path starts with a
    // supported locale prefix, otherwise use the root 404 page. Astro emits
    // both layouts (404.html and 404/index.html) depending on config.
    const SUPPORTED_LOCALES = ['es', 'pt', 'fr', 'de', 'ru', 'zh', 'ja', 'ar', 'id'];
    const pathLocale = pathname.split('/').filter(Boolean)[0];
    const localeCandidates =
      pathLocale && SUPPORTED_LOCALES.includes(pathLocale)
        ? [
            path.join(DIST_DIR, pathLocale, '404.html'),
            path.join(DIST_DIR, pathLocale, '404', 'index.html'),
          ]
        : [];
    const notFoundPath = [...localeCandidates, path.join(DIST_DIR, '404.html')].find((p) =>
      fs.existsSync(p)
    );
    if (notFoundPath) {
      res.writeHead(404, {
        ...SECURITY_HEADERS,
        'Content-Type': 'text/html; charset=utf-8',
      });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        const stream = fs.createReadStream(notFoundPath);
        stream.on('error', () => {
          if (!res.headersSent) res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        });
        stream.pipe(res);
      }
      return;
    }

    res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const headers = {
    'Content-Type': contentType,
    ...SECURITY_HEADERS,
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://pagead2.googlesyndication.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://mercure.mail.tm",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      'form-action \'none\'',
    ].join('; '),
  };

  // Cache headers
  if (pathname.startsWith('/_astro/')) {
    headers['Cache-Control'] = 'public, max-age=31536000, immutable';
  } else if (['.png', '.jpg', '.jpeg', '.webp', '.svg', '.ico', '.woff2'].includes(ext)) {
    headers['Cache-Control'] = 'public, max-age=86400';
  } else {
    headers['Cache-Control'] = 'public, max-age=3600, must-revalidate';
  }

  const acceptEncoding = req.headers['accept-encoding'] || '';
  const canGzip = COMPRESSIBLE_TYPES.has(contentType) && acceptEncoding.includes('gzip');

  if (req.method === 'HEAD') {
    res.writeHead(200, headers);
    res.end();
    return;
  }

  if (canGzip) {
    headers['Content-Encoding'] = 'gzip';
    res.writeHead(200, headers);
    const rawStream = fs.createReadStream(filePath);
    rawStream.on('error', () => {
      if (!res.headersSent) res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    });
    const gzip = zlib.createGzip({ level: 6 });
    gzip.on('error', () => {
      if (!res.headersSent) res.writeHead(500, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Internal Server Error');
    });
    rawStream.pipe(gzip).pipe(res);
  } else {
    const stat = fs.statSync(filePath);
    headers['Content-Length'] = stat.size;
    res.writeHead(200, headers);
    const stream = fs.createReadStream(filePath);
    stream.on('error', () => {
      if (!res.headersSent) res.writeHead(404, { ...SECURITY_HEADERS, 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
    });
    stream.pipe(res);
  }
}

server.listen(PORT, HOST, () => {
  console.log(`TempoEmails production server listening on http://${HOST}:${PORT}`);
  console.log(`Canonical domain: https://${canonicalHostname}`);
});
