import { Meta, Story } from '@storybook/react';

import { DeliveryAddress } from './DeliveryAddress';

const meta: Meta = {
  title: 'Components/DeliveryAddress',
  component: DeliveryAddress,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <DeliveryAddress {...props} />;

export const Default = Template.bind({});
Default.args = {
  addresses: ["Урганч шахар, Мустакиллик куча, 12", "Урганч шахар, Мустакиллик куча, 6", "Урганч шахар, Мустакиллик куча, 21"]
};
