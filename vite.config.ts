import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // This makes v0.dev OKLCH colors work
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