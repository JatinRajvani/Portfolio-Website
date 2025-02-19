import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  esbuild: {
    loader: 'jsx',
    include: /\.[jt]sx?$/,
  },
  base: "/",
  build: {
    outDir: "dist"
  },
});