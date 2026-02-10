import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths'; // Install this: npm install -D vite-tsconfig-paths

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This makes v0.dev OKLCH colors work
    tsconfigPaths(), // This automatically reads your tsconfig.json 'paths'
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    // Modern Vitest configuration for better StackBlitz performance
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
  },
});