import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths'; // Install this: npm install -D vite-tsconfig-paths

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This makes v0.dev OKLCH colors work
    tsconfigPaths(), // This automatically reads your tsconfig.json 'paths'
  ],
  server: {
    // Ensures the preview window connects reliably in StackBlitz
    port: 5173,
    strictPort: true,
    host: true
  }
})