import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    // https://storybook.js.org/addons
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      build: {
        minify: false, // NOTE: This is necessary for storybook to display the correct source code
      },
    });
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};
export default config;
