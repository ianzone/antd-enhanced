import type { Meta, StoryObj } from '@storybook/react';
import { InputIntlPhone } from './InputIntlPhone';

const meta = {
  title: 'Inputs/InputIntlPhone',
  component: InputIntlPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputIntlPhone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultRegion: 'CN',
    customRegions: [{ value: 'TW', emoji: '🏝' }],
  },
};
