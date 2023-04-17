import { defineConfig } from 'vitest/config';
// eslint-disable-next-line import/no-extraneous-dependencies
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: './config',
  test: {
    environment: 'happy-dom',
    env: {
      VITE_API: 'https://weatherapi-com.p.rapidapi.com',
    },
  },
});
