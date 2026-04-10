import { defineConfig } from 'tsdown';
import pkg from './package.json' with { type: 'json' };

export default defineConfig({
  entry: ['./src/index.ts'],
  platform: 'browser',
  sourcemap: true,
  format: {
    iife: {
      globalName: 'AntdEnhanced',
      minify: true,
      css: {
        minify: true,
      },
      deps: {
        skipNodeModulesBundle: false,
        alwaysBundle: (id) => Object.hasOwn(pkg.dependencies, id),
      },
      outputOptions: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
          'react-icons': 'reactIcons',
          'react-icons/ai': 'reactIconsAi',
          antd: 'antd',
          'antd-style': 'antdStyle',
        },
      },
    },
    esm: { unbundle: true },
  },
});
