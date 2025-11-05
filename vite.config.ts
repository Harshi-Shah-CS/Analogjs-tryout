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
      ssr: true, // Required for prerendering
      static: true, // Only prerender static pages without building the server
      prerender: {
        routes: async () => [
          '/',
          '/about',
        ],
      },
    }),
    tailwindcss()
  ],
}));
