import { Meta, Story } from '@storybook/react';

import { Footer } from './Footer';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Footer {...props}>Hello</Footer>;

export const Default = Template.bind({});
Default.args = {};
