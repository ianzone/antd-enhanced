import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr'; // https://github.com/pd4d10/vite-plugin-svgr

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  // NOTE: do not use alias https://github.com/microsoft/TypeScript/issues/30952
  // build: {  https://github.com/vitejs/vite/discussions/18744
  //   lib: {
  //     // https://vite.dev/config/build-options.html#build-lib
  //     entry: resolve(__dirname, 'src/index.ts'),
  //     name: 'AntdEnhanced',
  //     fileName: 'index',
  //     formats: ['es'],
  //   },
  // rollupOptions: {
  //   external: ['react', 'react-dom', 'antd'],
  //   output: {
  //     globals: {
  //       react: 'React',
  //       'react-dom': 'react-dom',
  //       antd: 'antd',
  //     },
  //   },
  // },
  // },
});
