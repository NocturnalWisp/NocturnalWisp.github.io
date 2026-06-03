import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This is a user/organization site (NocturnalWisp.github.io),
  // so use a root base. For project pages use '/repo-name/'.
  base: '/', 
  build: {
    outDir: 'docs'
  }
})
