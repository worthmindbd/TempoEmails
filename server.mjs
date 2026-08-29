import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import zlib from 'node:zlib';

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
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
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

  // Automatic 301 Canonical & HTTPS Enforcement
  // Redirects http://, www.*, or any non-canonical domain to https://tempoemails.com/*
  if (!isLocal) {
    const isHttp = protoHeader === 'http';
    const isWwwOrNonCanonical =
      hostHeader.startsWith('www.') || (hostHeader && hostHeader !== canonicalHostname);

    if (isHttp || isWwwOrNonCanonical) {
      const targetUrl = `https://${canonicalHostname}${req.url}`;
      res.writeHead(301, {
        Location: targetUrl,
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'X-Content-Type-Options': 'nosniff',
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.end(`301 Moved Permanently: Redirecting to ${targetUrl}`);
      return;
    }
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(req.url, 'http://localhost');
  } catch {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Bad Request');
    return;
  }

  let pathname = decodeURIComponent(parsedUrl.pathname);
  let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(DIST_DIR, safePath);

  // Directory handling with trailing slash redirection
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    if (!pathname.endsWith('/')) {
      const redirectUrl = `${pathname}/${parsedUrl.search}`;
      res.writeHead(301, {
        Location: redirectUrl,
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.end(`301 Moved Permanently: Redirecting to ${redirectUrl}`);
      return;
    }
    filePath = path.join(filePath, 'index.html');
  }

  // Check if file exists or check if directory index exists
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    const asDir = path.join(DIST_DIR, safePath, 'index.html');
    if (fs.existsSync(asDir) && fs.statSync(asDir).isFile()) {
      const redirectUrl = `${pathname}/${parsedUrl.search}`;
      res.writeHead(301, {
        Location: redirectUrl,
        'Content-Type': 'text/plain; charset=utf-8',
      });
      res.end(`301 Moved Permanently: Redirecting to ${redirectUrl}`);
      return;
    }

    // 404 fallback
    const notFoundPath = path.join(DIST_DIR, '404.html');
    if (fs.existsSync(notFoundPath)) {
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      });
      if (req.method === 'HEAD') {
        res.end();
      } else {
        fs.createReadStream(notFoundPath).pipe(res);
      }
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  const headers = {
    'Content-Type': contentType,
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
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
    const gzip = zlib.createGzip({ level: 6 });
    rawStream.pipe(gzip).pipe(res);
  } else {
    const stat = fs.statSync(filePath);
    headers['Content-Length'] = stat.size;
    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, HOST, () => {
  console.log(`TempoEmails production server listening on http://${HOST}:${PORT}`);
  console.log(`Canonical domain: https://${canonicalHostname}`);
});
