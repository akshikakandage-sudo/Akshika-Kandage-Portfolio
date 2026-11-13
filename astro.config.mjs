import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import netlify from '@astrojs/netlify';

// Netlify sets URL automatically on deploys; it is used for canonical links and social previews.
export default defineConfig({
  site: process.env.URL || 'http://localhost:4321',
  integrations: [react(), keystatic()],
  output: 'static',
  adapter: netlify(),
  redirects: { '/admin': '/keystatic' },
});
