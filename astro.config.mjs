import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const publicAddress = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = publicAddress
  ? new URL(publicAddress.includes('://') ? publicAddress : 'https://' + publicAddress).origin
  : undefined;

export default defineConfig({
  site,
  output: 'static',
  vite: { plugins: [tailwindcss()] },
});
