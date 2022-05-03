import { Meta, Story } from '@storybook/react';

import { PaymentOptions } from './PaymentOptions';

const meta: Meta = {
  title: 'Components/PaymentOptions',
  component: PaymentOptions,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <PaymentOptions {...props} />;

export const Default = Template.bind({});
Default.args = {};
