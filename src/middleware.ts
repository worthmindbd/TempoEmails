import { defineMiddleware } from 'astro:middleware';
import { resolveMailProxy, buildUpstreamHeaders } from '../server/mail-proxy.mjs';

/**
 * Same-origin mail API proxy for every Astro-served runtime (`astro dev` and
 * `astro preview`).
 *
 * In production the Node server (server.mjs) handles `/api/mail/...` before
 * Astro ever sees the request, and a static build never invokes middleware at
 * all — so this needs no environment gate. It previously short-circuited on
 * `import.meta.env.DEV`, which Vite derives from `NODE_ENV`: with
 * NODE_ENV=production exported (as the Dockerfile and nixpacks.toml do) the
 * dev proxy silently 404'd and the mailbox could not fetch mail.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  if (!url.pathname.startsWith('/api/mail/')) return next();

  const resolved = resolveMailProxy(url.pathname.slice('/api/mail'.length) + url.search);
  if (!resolved) {
    return new Response(JSON.stringify({ error: 'Unknown mail provider' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const request = context.request;
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: { Allow: 'GET, POST, DELETE, OPTIONS' },
    });
  }
  if (!['GET', 'POST', 'DELETE'].includes(request.method)) {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  let body: string | undefined;
  if (request.method !== 'GET' && request.method !== 'DELETE') {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 1_000_000) {
      return new Response(JSON.stringify({ error: 'Payload too large' }), {
        status: 413,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      });
    }
    body = text;
  }

  const headers = buildUpstreamHeaders(resolved.provider, Object.fromEntries(request.headers.entries()));
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const upstreamRes = await fetch(resolved.upstreamUrl, {
      method: request.method,
      headers,
      body,
      signal: controller.signal,
    });
    const upstreamType = (upstreamRes.headers.get('content-type') || 'application/json; charset=utf-8').toLowerCase();
    const isAttachmentPath = /\/messages\/[^/]+\/attachment|\/download\b|\battachment\b/i.test(resolved.upstreamUrl);
    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers: {
        'Content-Type': isAttachmentPath
          ? 'application/octet-stream'
          : upstreamType.includes('json')
            ? 'application/json; charset=utf-8'
            : 'application/octet-stream',
        'Content-Disposition': isAttachmentPath ? 'attachment' : 'inline',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (err) {
    const timedOut = err instanceof Error && err.name === 'AbortError';
    return new Response(JSON.stringify({ error: timedOut ? 'Upstream timeout' : 'Upstream fetch failed' }), {
      status: timedOut ? 504 : 502,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    clearTimeout(timer);
  }
});
