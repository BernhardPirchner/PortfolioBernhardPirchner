// @ts-check
import { defineConfig } from 'astro/config';
import UnoCSS from 'unocss/astro';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://bernhard-pirchner.netlify.app/', // Please enter the URL where you will host your website.
  base: '/', // If you are hosting your website at a subpath, enter it here.
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    svelte(),
    sitemap(),
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@lib': '/src/lib',
        '@': '',
      },
    },
  },
});
