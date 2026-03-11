import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import pkg from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,
    outDir: 'dist/iife',
    lib: {
      entry: 'src/index.ts',
      formats: ['iife'],
      name: 'AntdEnhanced',
    },
    rollupOptions: {
      external: [...Object.keys(pkg.peerDependencies), 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react-icons': 'reactIcons',
          antd: 'antd',
          'antd-style': 'antdStyle',
        },
      },
    },
  },
});
