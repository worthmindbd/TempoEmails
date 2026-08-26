import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../lib/config';

const getRobotsTxt = (baseUrl: string) => `
# TempoEmails — robots.txt
# Allow all search engine crawlers

User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap-index.xml
`.trim();

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site ? site.toString() : SITE_CONFIG.siteUrl).replace(/\/+$/, '');
  return new Response(getRobotsTxt(baseUrl), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

