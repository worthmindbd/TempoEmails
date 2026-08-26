import type { APIRoute } from 'astro';
import { SITE_CONFIG } from '../lib/config';

export const GET: APIRoute = ({ site }) => {
  const baseUrl = (site ? site.toString() : SITE_CONFIG.siteUrl).replace(/\/+$/, '');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-0.xml</loc>
  </sitemap>
</sitemapindex>`.trim();

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
