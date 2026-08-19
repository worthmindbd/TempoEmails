import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../lib/config';

const getRobotsTxt = (sitemapURL: URL) => `
# TempoEmails — robots.txt
# Allow all search engine crawlers

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${sitemapURL.href}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL('sitemap-index.xml', site || SITE_CONFIG.siteUrl);
  return new Response(getRobotsTxt(sitemapURL), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
