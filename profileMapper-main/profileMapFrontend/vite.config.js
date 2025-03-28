import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: "0.0.0.0", // Allow external access
    port: 5173,      // Match Dockerfile port
    strictPort: true, // Ensure port consistency
  },
  plugins: [react()],
});
