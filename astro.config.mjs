import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://nexum-energy.github.io',
  base: '/baterii-stocare',
  vite: {
    plugins: [tailwindcss()],
  },
});
