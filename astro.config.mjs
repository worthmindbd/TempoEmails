// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import { handleMailProxy } from './server/mail-proxy.mjs';
import { BLOG_ARTICLES } from './src/i18n/blog-data.ts';

/**
 * Dev/preview middleware mirroring the production proxy in server.mjs so the
 * mail providers (which lack CORS headers for browsers) work with `astro dev`.
 */
function mailProxyPlugin() {
  return {
    name: 'tempo-mail-proxy',
    enforce: 'pre',
    configureServer(server) {
      server.middlewares.use('/api/mail', (req, res) => {
        handleMailProxy(req, res, req.url || '/');
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/api/mail', (req, res) => {
        handleMailProxy(req, res, req.url || '/');
      });
    },
  };
}

const blogDates = Object.fromEntries(
  (BLOG_ARTICLES.en || []).map((a) => [a.slug.replace(/\/$/, ''), a.date])
);

// https://astro.build/config
export default defineConfig({
  // `always` for production builds; relaxed in dev so the same-origin mail
  // proxy paths (/api/mail/..., see src/middleware.ts) reach the dev middleware.
  trailingSlash: process.env.NODE_ENV === 'production' ? 'always' : 'ignore',
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

