import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Replaced process.cwd() with '.' to avoid "Property 'cwd' does not exist on type 'Process'" error
  const env = loadEnv(mode, '.', '');

  return {
    plugins: [react()],
    base: './', // Essential for GitHub Pages relative paths
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    // Define process.env to prevent runtime crashes in browser (ReferenceError: process is not defined)
    // This allows the Gemini service to access the key via process.env.API_KEY as required.
    define: {
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY || env.API_KEY || ''),
    },
  };
});