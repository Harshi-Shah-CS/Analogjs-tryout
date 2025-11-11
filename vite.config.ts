/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2020'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true, // Required for prerendering and SSR
      static: false, // Allow SSR for non-prerendered routes
      prerender: {
        routes: async () => [
          '/',
          '/about',
          '/ssg',
          '/test',
        ],
      },
    }),
    tailwindcss()
  ],
}));
