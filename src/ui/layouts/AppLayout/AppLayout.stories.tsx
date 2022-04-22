import { Meta, Story } from '@storybook/react';

import { AppLayout } from './AppLayout';

const meta: Meta = {
  title: 'Components/AppLayout',
  component: AppLayout,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <AppLayout {...props} />;

export const Default = Template.bind({});
Default.args = {};
