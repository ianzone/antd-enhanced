import type { Preview } from '@storybook/react';
import { UIContext } from '../src/contexts';

type Decorator = Pick<Preview, 'decorators'>['decorators'];

export const Theme: Decorator = (Story, ctx) => {
  localStorage.removeItem('preferredTheme');
  return (
    <UIContext defaultThemeMode={ctx.globals.backgrounds.value === '#333' ? 'dark' : 'light'}>
      <Story />
    </UIContext>
  );
};
