import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User-site repo (WAQAS-AMIN.github.io) serves from the domain root.
// For a project repo instead, set base to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: { outDir: 'dist', sourcemap: false },
});
