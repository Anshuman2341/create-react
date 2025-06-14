import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/create-react/', // 👈 VERY IMPORTANT!
  plugins: [react()],
});

