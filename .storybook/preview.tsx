import type { Preview } from '@storybook/react-vite';
import { UIContext } from '../src/contexts';

const preview: Preview = {
  // https://storybook.js.org/docs/writing-stories/parameters
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    (Story, ctx) => (
      <UIContext defaultTheme={ctx.globals.backgrounds.value === '#333' ? 'dark' : 'light'}>
        <Story />
      </UIContext>
    ),
  ],

  tags: ['autodocs'],
};

export default preview;
