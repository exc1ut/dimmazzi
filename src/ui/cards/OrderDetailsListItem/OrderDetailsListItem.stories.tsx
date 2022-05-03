import { Meta, Story } from '@storybook/react';

import { OrderDetailsListItem } from './OrderDetailsListItem';

const meta: Meta = {
  title: 'Components/OrderDetailsListItem',
  component: OrderDetailsListItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <OrderDetailsListItem {...props} />;

export const Default = Template.bind({});
Default.args = {
  type: 'cookTime',
  value: {
    time: 40
  },
};
