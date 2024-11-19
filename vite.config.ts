import { resolve } from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts'; // https://github.com/qmhc/vite-plugin-dts/blob/main/README.zh-CN.md
import svgr from 'vite-plugin-svgr'; // https://github.com/pd4d10/vite-plugin-svgr

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })],
  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      // https://vite.dev/config/build-options.html#build-lib
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AntdEnhanced',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'antd'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          antd: 'antd',
        },
      },
    },
  },
});
