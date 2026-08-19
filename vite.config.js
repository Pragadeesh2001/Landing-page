import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Split vendor chunks for better caching / Lighthouse performance
    rollupOptions: {
      output: {
        manualChunks: {
          motion: ['framer-motion'],
          icons: ['lucide-react'],
        },
      },
    },
  },
})
