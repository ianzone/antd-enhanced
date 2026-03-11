import type { Meta, StoryObj } from '@storybook/react';
import { InputIntlPhone } from './InputIntlPhone';

const meta: Meta<typeof InputIntlPhone> = {
  title: 'Input/InputIntlPhone',
  component: InputIntlPhone,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultRegion: 'CN',
    customRegions: [{ value: 'TW', emoji: '🏝' }],
  },
};
