import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'antd';
import { ThemeSwitch } from './ThemeSwitch';

const meta: Meta<typeof ThemeSwitch> = {
  title: 'Theme/ThemeSwitch',
  component: () => (
    <Card>
      <ThemeSwitch />
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
