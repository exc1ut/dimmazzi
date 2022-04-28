import { Meta, Story } from '@storybook/react';

import { ServiceDetails } from './ServiceDetails';

const meta: Meta = {
  title: 'Components/ServiceDetails',
  component: ServiceDetails,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <ServiceDetails {...props} />;

export const Default = Template.bind({});
Default.args = {
  cookTime: 40,
  deliveryPrice: 8000,
  deliveryTime: 12,
};
