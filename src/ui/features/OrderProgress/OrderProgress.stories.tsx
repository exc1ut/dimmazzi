import { Meta, Story } from '@storybook/react';

import { OrderProgress } from './OrderProgress';

const meta: Meta = {
  title: 'Components/OrderProgress',
  component: OrderProgress,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <OrderProgress {...props} />;

export const Default = Template.bind({});
Default.args = {};
