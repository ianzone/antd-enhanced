import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'antd';
import { ThemeSelector } from './ThemeSelector';

const meta: Meta<typeof ThemeSelector> = {
  title: 'Theme/ThemeSelector',
  component: () => (
    <Card>
      <ThemeSelector />
    </Card>
  ),
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
