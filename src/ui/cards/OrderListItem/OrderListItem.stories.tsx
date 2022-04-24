import { Meta, Story } from '@storybook/react';

import { OrderListItem } from './OrderListItem';

const meta: Meta = {
  title: 'Components/OrderListItem',
  component: OrderListItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <OrderListItem {...props} />;

export const Default = Template.bind({});
Default.args = {
  price: "25000",
  date: "24/04/2022",
  orderId: "123456789",
  status: "pending",
};
