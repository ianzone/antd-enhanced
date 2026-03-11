import type { Preview } from '@storybook/react-vite';

// import { Theme } from './decorators';

const preview: Preview = {
  // decorators: Theme,

  // https://storybook.js.org/docs/writing-stories/parameters
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
};

export default preview;
