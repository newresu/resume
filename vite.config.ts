import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
  // See: https://vite.dev/guide/static-deploy
  base: "/resume" // this is needed for gh pages (it's repo's name)
})
