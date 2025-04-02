import type { Meta, StoryObj } from '@storybook/react';
import { Content, Footer, Header, Layout, Sider } from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Layout/Layout',
  component: Layout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: <Header>Header</Header>,
    siderLeft: (
      <Sider style={{ backgroundColor: 'red' }} width={80}>
        SiderLeft
      </Sider>
    ),
    content: (
      <Content style={{ backgroundColor: 'yellow', height: '100px', width: '200px' }}>
        Content
      </Content>
    ),
    siderRight: (
      <Sider style={{ backgroundColor: 'blue' }} width={80}>
        SiderRight
      </Sider>
    ),
    footer: <Footer>Footer</Footer>,
  },
};
Default.storyName = 'Horizontal';

export const Vertical: Story = {
  args: {
    vertical: true,
    header: <Header>Header</Header>,
    siderLeft: (
      <Sider style={{ backgroundColor: 'red' }} width={80}>
        SiderLeft
      </Sider>
    ),
    content: (
      <Content style={{ backgroundColor: 'yellow', height: '100px', width: '200px' }}>
        Content
      </Content>
    ),
    siderRight: (
      <Sider style={{ backgroundColor: 'blue' }} width={80}>
        SiderRight
      </Sider>
    ),
    footer: <Footer>Footer</Footer>,
  },
};
