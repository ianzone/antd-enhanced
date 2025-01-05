import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridCell } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: 3,
    cols: 3,
    gap: '10px',
    style: { backgroundColor: 'lightgrey', height: '200px', width: '200px' },
    children: (
      <>
        <GridCell pin={[2, 2]} style={{ backgroundColor: 'purple' }}>
          5
        </GridCell>
        <div style={{ backgroundColor: 'red' }}>1</div>
        <div style={{ backgroundColor: 'green' }}>2</div>
        <div style={{ backgroundColor: 'blue' }}>3</div>
        <div style={{ backgroundColor: 'yellow' }}>4</div>
        <div style={{ backgroundColor: 'orange' }}>6</div>
        <div style={{ backgroundColor: 'pink' }}>7</div>
        <div style={{ backgroundColor: 'brown' }}>8</div>
        <div style={{ backgroundColor: 'grey' }}>9</div>
      </>
    ),
  },
};
