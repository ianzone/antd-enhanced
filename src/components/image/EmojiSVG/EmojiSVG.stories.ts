import type { Meta, StoryObj } from '@storybook/react';
import { EmojiSVG } from './EmojiSVG';

const meta = {
  title: 'Image/EmojiSVG',
  component: EmojiSVG,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof EmojiSVG>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    emoji: '🌐',
    width: 24,
  },
};
