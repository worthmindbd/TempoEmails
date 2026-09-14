import { defineMiddleware } from 'astro:middleware';
import { resolveMailProxy, buildUpstreamHeaders } from '../server/mail-proxy.mjs';

/**
 * Dev-only same-origin mail API proxy.
 *
 * In production the Node server (server.mjs) handles `/api/mail/...` directly.
 * In `astro dev`, Astro's router claims those extension-less paths before
 * Vite middleware can, so this middleware intercepts them inside Astro's own
 * pipeline instead. It is fully inert during `astro build` / in production.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  if (!import.meta.env.DEV) return next();

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
  if (!['GET', 'POST', 'DELETE'].includes(request.method)) {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const headers = buildUpstreamHeaders(resolved.provider, Object.fromEntries(request.headers.entries()));
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);

  try {
    const upstreamRes = await fetch(resolved.upstreamUrl, {
      method: request.method,
      headers,
      body: request.method === 'GET' || request.method === 'DELETE' ? undefined : await request.text(),
      signal: controller.signal,
    });
    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers: {
        'Content-Type': upstreamRes.headers.get('content-type') || 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    const timedOut = err?.name === 'AbortError';
    return new Response(JSON.stringify({ error: timedOut ? 'Upstream timeout' : 'Upstream fetch failed' }), {
      status: timedOut ? 504 : 502,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } finally {
    clearTimeout(timer);
  }
});
