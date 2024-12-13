import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const { dependencies, peerDependencies } = pkg;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.app.json',
      exclude: ['**/*.test.*', '**/*.spec.*', '**/*.mdx', '**/*.stories.*'],
    }),
  ],
  resolve: {
    alias: { src: resolve(__dirname, 'src') },
  },
  build: {
    sourcemap: true,
    lib: {
      // https://vite.dev/config/build-options.html#build-lib
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      cssFileName: 'style',
      formats: ['es'],
    },
    rollupOptions: {
      external: [...Object.keys({ ...dependencies, ...peerDependencies })],
    },
  },
});
