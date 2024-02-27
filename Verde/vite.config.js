import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://informatik7.ei.hv.se/Bordsbokning/api', // the target host
      }
    },

  },
  plugins: [react()]
})
