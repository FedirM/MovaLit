import { defineConfig } from 'vite';
import { resolve } from 'path';

import postcssLit from 'rollup-plugin-postcss-lit';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: /^lit/,
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      plugins: [
        postcssLit()
      ]
    },
  },
})
