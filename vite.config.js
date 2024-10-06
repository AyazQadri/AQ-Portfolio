// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// // export default defineConfig({
// //   plugins: [react()],
// //   base: '/AQ-Portfolio/', 
// // })

// export default defineConfig({
//   plugins: [react()],
//   base: '/AQ-Portfolio/'
// })



import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/AQ-Portfolio/',
  esbuild: {
    loader: 'jsx', 
    include: /src\/.*\.js$/, 
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})
