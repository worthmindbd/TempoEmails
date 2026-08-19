// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

const blogDates = {
  '/blog/rise-of-disposable-email': '2026-08-20',
  '/blog/managing-multiple-online-accounts': '2026-08-18',
  '/blog/protecting-identity-online': '2026-08-15',
  '/blog/why-companies-want-your-email': '2026-08-12',
  '/blog/how-temporary-email-works': '2026-08-10',
  '/blog/temporary-email-vs-email-aliases': '2026-08-08',
  '/blog/email-privacy-best-practices': '2026-08-05',
  '/blog/understanding-phishing-emails': '2026-08-03',
  '/blog/understanding-otp-verification-codes': '2026-08-01',
  '/blog/data-privacy-laws-explained': '2026-07-28',
  '/blog/online-account-security-guide': '2026-07-25',
  '/blog/how-disposable-email-protects-privacy': '2026-07-22',
  '/blog/what-is-email-tracking': '2026-07-18',
  '/blog/why-use-temporary-email': '2026-07-15',
  '/blog/how-to-avoid-spam': '2026-07-10',
};

// https://astro.build/config
export default defineConfig({
  // Production domain (can be overridden via SITE_URL env variable in Docker/Dokploy)
  site: process.env.SITE_URL || 'https://tempoemails.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        const url = new URL(item.url);
        const pathname = url.pathname.replace(/\/$/, '');

        if (pathname === '') {
          // Homepage
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
        } else if (pathname === '/blog') {
          // Blog index
          item.priority = 0.9;
          item.changefreq = ChangeFreqEnum.DAILY;
          item.lastmod = new Date().toISOString();
        } else if (blogDates[pathname]) {
          // Blog articles
          item.priority = 0.8;
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.lastmod = new Date(blogDates[pathname]).toISOString();
        } else if (['/about', '/contact'].includes(pathname)) {
          // Info pages
          item.priority = 0.7;
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.lastmod = new Date().toISOString();
        } else {
          // Legal pages
          item.priority = 0.5;
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.lastmod = new Date().toISOString();
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
    plugins: [tailwindcss()],
    preview: {
      allowedHosts: true,
    },
  },
});

