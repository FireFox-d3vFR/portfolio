import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Astro évalue sa configuration avant de charger les fichiers .env.
const localEnv = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'SITE_URL');
const publicAddress =
  process.env.SITE_URL || localEnv.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = publicAddress
  ? new URL(publicAddress.includes('://') ? publicAddress : 'https://' + publicAddress).origin
  : undefined;

export default defineConfig({
  site,
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
