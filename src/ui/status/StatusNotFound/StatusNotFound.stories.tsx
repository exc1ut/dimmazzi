import { Meta, Story } from '@storybook/react';

import { StatusNotFound } from './StatusNotFound';

const meta: Meta = {
  title: 'Components/StatusNotFound',
  component: StatusNotFound,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <StatusNotFound {...props} />;

export const Default = Template.bind({});
Default.args = {};
