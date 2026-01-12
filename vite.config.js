import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  base: './',

  server: {
    open: '/chapters/01-sass-workflow-and-foundations/src/01-sass-workflow-and-foundations.html',
    fs: { allow: ['..'] },
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        ch01: resolve(
          __dirname,
          'chapters/01-sass-workflow-and-foundations/src/01-sass-workflow-and-foundations.html'
        ),
        ch02: resolve(
          __dirname,
          'chapters/02-sass-variables-and-custom-properties/src/02-sass-variables-and-custom-properties.html'
        ),
        ch03: resolve(
          __dirname,
          'chapters/03-placeholder-extend-and-mixins/src/03-placeholder-extend-and-mixins.html'
        ),
        ch04: resolve(
          __dirname,
          'chapters/04-sass-functions/src/04-sass-functions.html'
        ),
        ch05: resolve(
          __dirname,
          'chapters/05-sass-conditionals/src/05-sass-conditionals.html'
        ),
        ch06: resolve(
          __dirname,
          'chapters/06-loops-lists-and-maps/src/06-loops-lists-and-maps.html'
        ),
        ch07: resolve(
          __dirname,
          'chapters/07-sass-and-tailwind-unite/src/07-sass-and-tailwind-unite.html'
        ),
      },
    },
  },
});
