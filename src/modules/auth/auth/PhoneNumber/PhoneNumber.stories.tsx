import { Meta, Story } from '@storybook/react';

import { PhoneNumber } from './PhoneNumber';

const meta: Meta = {
  title: 'Components/PhoneNumber',
  component: PhoneNumber,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <PhoneNumber {...props}></PhoneNumber>;

export const Default = Template.bind({});
Default.args = {};
