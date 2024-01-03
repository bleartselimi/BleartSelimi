import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: '/'
  },
  base: "/",
  build: {
    outDir: './build',
    target: "ES2015"
  }
})
