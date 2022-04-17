import { Meta, Story } from '@storybook/react';

import { OrderCard } from './OrderCard';

const meta: Meta = {
  title: 'Components/OrderCard',
  component: OrderCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <OrderCard {...props}></OrderCard>;

export const Default = Template.bind({});
Default.args = {};
