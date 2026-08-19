import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../lib/config';

interface SitemapEntry {
  path: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const entries: SitemapEntry[] = [
  // Core pages
  { path: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 1.0 },
  { path: '/blog/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: 0.9 },
  { path: '/about/', lastmod: '2026-08-01', changefreq: 'monthly', priority: 0.7 },
  { path: '/contact/', lastmod: '2026-08-01', changefreq: 'monthly', priority: 0.7 },

  // Blog posts
  { path: '/blog/rise-of-disposable-email/', lastmod: '2026-08-20', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/managing-multiple-online-accounts/', lastmod: '2026-08-18', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/protecting-identity-online/', lastmod: '2026-08-15', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/why-companies-want-your-email/', lastmod: '2026-08-12', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/how-temporary-email-works/', lastmod: '2026-08-10', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/temporary-email-vs-email-aliases/', lastmod: '2026-08-08', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/email-privacy-best-practices/', lastmod: '2026-08-05', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/understanding-phishing-emails/', lastmod: '2026-08-03', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/understanding-otp-verification-codes/', lastmod: '2026-08-01', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/data-privacy-laws-explained/', lastmod: '2026-07-28', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/online-account-security-guide/', lastmod: '2026-07-25', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/how-disposable-email-protects-privacy/', lastmod: '2026-07-22', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/what-is-email-tracking/', lastmod: '2026-07-18', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/why-use-temporary-email/', lastmod: '2026-07-15', changefreq: 'weekly', priority: 0.8 },
  { path: '/blog/how-to-avoid-spam/', lastmod: '2026-07-10', changefreq: 'weekly', priority: 0.8 },

  // Legal pages
  { path: '/privacy-policy/', lastmod: '2026-07-01', changefreq: 'monthly', priority: 0.5 },
  { path: '/terms-of-service/', lastmod: '2026-07-01', changefreq: 'monthly', priority: 0.5 },
  { path: '/disclaimer/', lastmod: '2026-07-01', changefreq: 'monthly', priority: 0.5 },
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site ? site.toString() : SITE_CONFIG.siteUrl).replace(/\/+$/, '');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${baseUrl}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
