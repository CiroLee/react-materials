import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import cssnano from 'cssnano';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-materials/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    modules: {
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
    postcss: {
      // 自动追加前缀
      plugins: [
        autoprefixer,
        tailwindcss,
        // cssnano压缩css
        cssnano({
          preset: 'default',
        }),
      ],
    },
  },
});
