import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    ssrManifest: true,
    // outDir: 'dist',
    // assetsDir: 'assets',
    // sourcemap: true,
    // rollupOptions: {
    //   output: {
    //     entryFileNames: 'entry-server.js',
    //   },
    // },
  },
})
