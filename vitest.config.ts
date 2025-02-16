import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

// https://cn.vitest.dev/guide/
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      include: ['src/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
      coverage: {
        include: ['src/**/*.ts'],
        exclude: ['**/index.ts', '**/*.d.ts'],
      },
    },
  }),
);
