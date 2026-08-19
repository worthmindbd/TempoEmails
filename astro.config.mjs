// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual production domain
  site: 'https://tempoemails.dev',
  integrations: [sitemap()],
  server: {
    port: 4321,
    host: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
