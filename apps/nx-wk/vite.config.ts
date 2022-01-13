import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({
      root: '../'
    })
  ],
  resolve: {
    alias: {
      '/@/': path.resolve(__dirname, 'libs/hello/src/index.ts')
    }
  }
})
