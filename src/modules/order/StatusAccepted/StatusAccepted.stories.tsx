import { Meta, Story } from '@storybook/react';

import { StatusAccepted } from './StatusAccepted';

const meta: Meta = {
  title: 'Components/StatusAccepted',
  component: StatusAccepted,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <StatusAccepted {...props} />;

export const Default = Template.bind({});
Default.args = {};
