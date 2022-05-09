import { Meta, Story } from '@storybook/react';

import { Feedback } from './Feedback';

const meta: Meta = {
  title: 'Components/Feedback',
  component: Feedback,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Feedback {...props} />;

export const Default = Template.bind({});
Default.args = {};
