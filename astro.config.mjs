// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { handleMailProxy } from './server/mail-proxy.mjs';
import { BLOG_ARTICLES } from './src/i18n/blog-data.ts';

/**
 * Dev-only same-origin mail API proxy: mounts `/api/mail` in front of Astro's
 * dev server so the mail providers (which lack CORS headers for browsers) work
 * from the browser.
 *
 * There is deliberately NO `configurePreviewServer` hook — Astro 7 strips user
 * Vite plugins when it creates the preview server (see
 * astro/dist/core/preview/static-preview-server.js), and a static build has no
 * server runtime. `astro preview` therefore cannot serve `/api/mail`;
 * use `npm start` (server.mjs) to exercise the built output with the proxy.
 *
 * Typed with JSDoc rather than `import type` — Astro's config loader imports
 * this file before TypeScript syntax is stripped.
 *
 * @returns {import('vite').Plugin}
 */
function mailProxyPlugin() {
  /**
   * @param {import('node:http').IncomingMessage} req
   * @param {import('node:http').ServerResponse} res
   */
  const forward = (req, res) => {
    handleMailProxy(req, res, req.url || '/');
  };

  return {
    name: 'tempo-mail-proxy',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use('/api/mail', forward);
    },
  };
}

const blogDates = Object.fromEntries(
  (BLOG_ARTICLES.en || []).map((a) => [a.slug.replace(/\/$/, ''), a.date])
);

// Astro 7 loads this file with a plain dynamic import (see
// astro/dist/core/config/vite-load.js): a `defineConfig(callback)` form is NOT
// invoked, so the running command has to be detected from argv. Note `astro dev`
// re-execs `node .../astro/bin/astro.mjs dev --json` in the background, hence the
// `.mjs` in the pattern.
const isAstroServerCommand = process.argv.some(
  (arg, i) =>
    (arg === 'dev' || arg === 'preview') && /[/\\]astro(\.[cm]?js)?$/.test(process.argv[i - 1] ?? '')
);

// https://astro.build/config
export default defineConfig({
  // `always` for built output (server.mjs and static hosts redirect to it);
  // relaxed for `astro dev` / `astro preview` so the same-origin proxy paths
  // (/api/mail/mailtm/domains — no trailing slash) are not rejected by the
  // dev server's router. Keyed off the CLI command, never NODE_ENV: the
  // Dockerfile and nixpacks.toml both export NODE_ENV=production, which made
  // `astro dev` behave like a production build and 404 the whole mail proxy.
  trailingSlash: isAstroServerCommand ? 'ignore' : 'always',
  // Production domain (can be overridden via SITE_URL env variable in Docker/Dokploy)
  site: process.env.SITE_URL || 'https://tempoemails.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'fr', 'de', 'ru', 'zh', 'ja', 'ar', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.endsWith('.xml') && !page.endsWith('.txt'),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          pt: 'pt',
          fr: 'fr',
          de: 'de',
          ru: 'ru',
          zh: 'zh-CN',
          ja: 'ja',
          ar: 'ar',
          id: 'id',
        },
      },
      serialize(item) {
        const url = new URL(item.url);
        const pathname = url.pathname.replace(/\/$/, '');
        const localePrefixMatch = pathname.match(/^\/(es|pt|fr|de|ru|zh|ja|ar|id)(\/.*)?$/);
        const normalizedPath = localePrefixMatch ? (localePrefixMatch[2] || '') : pathname;

        if (normalizedPath === '') {
          // Homepage (all language variants)
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date(blogDates[''] || '2026-08-20').toISOString();
        } else if (normalizedPath === '/blog') {
          // Blog index
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date(blogDates['/blog'] || '2026-08-20').toISOString();
        } else if (blogDates[normalizedPath]) {
          // Blog articles
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.lastmod = new Date(blogDates[normalizedPath]).toISOString();
        } else if (['/about', '/contact'].includes(normalizedPath)) {
          // Info pages
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.lastmod = new Date('2026-08-20').toISOString();
        } else {
          // Legal pages (privacy policy, terms of service, disclaimer)
          item.priority = 0.6;
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.lastmod = new Date('2026-08-20').toISOString();
        }
        return item;
      },
    }),
  ],
  server: {
    port: 4321,
    host: true,
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss(), mailProxyPlugin()],
    preview: {
      allowedHosts: true,
    },
  },
});
