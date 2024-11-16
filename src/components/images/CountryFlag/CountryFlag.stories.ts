import type { Meta, StoryObj } from '@storybook/react';
import { CountryFlag } from './CountryFlag';

const meta = {
  title: 'Images/CountryFlag',
  component: CountryFlag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CountryFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    countryCode: 'CN',
    width: 24,
  },
};
