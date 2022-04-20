import { Meta, Story } from '@storybook/react';

import { PaymentDetails } from './PaymentDetails';

const meta: Meta = {
  title: 'Components/PaymentDetails',
  component: PaymentDetails,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <PaymentDetails {...props} />;

export const Default = Template.bind({});
Default.args = {
  mealCost: 75000,
  deliveryCost: 8000,
  totalCost: 83000,
};
