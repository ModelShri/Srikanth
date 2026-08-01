import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Use relative path base so asset paths resolve correctly on GitHub Pages subfolder
  build: {
    assetsInlineLimit: 0, // Never inline 3D model assets as base64
  },
})
