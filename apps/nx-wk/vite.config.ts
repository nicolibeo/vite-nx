import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'
// import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // root: process.cwd(),
  plugins: [
    react(),
    // tsconfigPaths({
    //   root: '../../'
    // })
  ],
  // resolve: {
  //   // alias: [
  //   //   { find: 'hola', replacement: './apps/nx-wk/src/hola' },
  //   // ],
  //   alias: {
  //     // '/@hello': path.resolve(process.cwd(), 'libs/hello/src/index.ts')
  //     // '@/libs/hello': '/Users/nicolaslabbe/projects/test/nx-wk/libs/hello/src/index.ts'
  //     // '@': path.resolve(__dirname, '../../libs/hello/src'),
  //     // '@': path.resolve(__dirname, './src'),
  //     'my-hello': 'hello/index.ts',
  //     // 'hola': path.join(__dirname, 'hola/index.ts'),
  //     // '@/hello': path.resolve(__dirname, '../../libs/hello/src'),
  //     // '/@': path.resolve(__dirname, './src')
  //     // '/@hello': path.resolve(__dirname, 'libs/hello/src/index.ts')
  //   }
  // }
})
