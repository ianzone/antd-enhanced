import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { GridCell } from './GridCell';

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
    rowHeights: { 1: '30px' },
    cols: 3,
    colWidths: { 3: '40px' },
    gap: '10px',
    style: { backgroundColor: 'lightgrey', height: '200px', width: '200px' },
    children: (
      <>
        <GridCell rowIndex={2} colIndex={2} style={{ backgroundColor: 'purple' }}>
          5
        </GridCell>
        <div style={{ height: '100%', backgroundColor: 'red' }}>1</div>
        <div style={{ height: '100%', backgroundColor: 'green' }}>2</div>
        <div style={{ height: '100%', backgroundColor: 'blue' }}>3</div>
        <div style={{ height: '100%', backgroundColor: 'yellow' }}>4</div>
        <div style={{ height: '100%', backgroundColor: 'orange' }}>6</div>
        <div style={{ height: '100%', backgroundColor: 'pink' }}>7</div>
        <div style={{ height: '100%', backgroundColor: 'brown' }}>8</div>
        <div style={{ height: '100%', backgroundColor: 'grey' }}>9</div>
      </>
    ),
  },
};
