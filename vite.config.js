import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: '/AQ-Portfolio/', 
// })

export default defineConfig({
  plugins: [react()],
  base: '/AQ-Portfolio/',
  build: {
    rollupOptions: {
      external: ['/src/main.jsx'],
    },
  },
})

