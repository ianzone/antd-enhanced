import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitch } from './ThemeSwitch';

const meta: Meta<typeof ThemeSwitch> = {
  title: 'Settings/ThemeSwitch',
  component: ThemeSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSelect: (theme: string) => console.log(theme),
  },
};
