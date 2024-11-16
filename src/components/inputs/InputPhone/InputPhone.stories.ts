import type { Meta, StoryObj } from '@storybook/react';
import { InputPhone } from './InputPhone';

const meta = {
  title: 'Inputs/InputPhone',
  component: InputPhone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InputPhone>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    countryCode: 'CN',
  },
};
