import { Meta, Story } from '@storybook/react';

import { AddressForm } from './AddressForm';

const meta: Meta = {
  title: 'Components/AddressForm',
  component: AddressForm,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <AddressForm {...props}></AddressForm>;

export const Default = Template.bind({});
Default.args = {};
