import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo under /austin-pets-alive/, so the Pages workflow sets
// SITE_URL and BASE_PATH. Local dev and Netlify use the defaults (served at the root).
export default defineConfig({
  site: process.env.SITE_URL ?? 'https://austin-pets-alive.netlify.app',
  base: process.env.BASE_PATH ?? '/',
});
