import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // Uncomment if you are using React
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
