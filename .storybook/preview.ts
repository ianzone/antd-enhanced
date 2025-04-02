import type { Preview } from '@storybook/react';
// import React from 'react';
// import { UIContext } from '../src/contexts';

const preview: Preview = {
  // decorators: [
  //   (Story, ctx) => {
  //     localStorage.removeItem('preferredTheme');
  //     return (
  //       <UIContext defaultThemeMode={ctx.globals.backgrounds.value === '#333' ? 'dark' : 'light'}>
  //         <Story />
  //       </UIContext>
  //     );
  //   },
  // ],

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
  tags: ['autodocs'],
};

export default preview;
