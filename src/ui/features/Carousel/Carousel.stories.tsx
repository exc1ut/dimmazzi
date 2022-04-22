import { Meta, Story } from '@storybook/react';

import { Carousel } from './Carousel';

const meta: Meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Carousel {...props} />;

export const Default = Template.bind({});
Default.args = {};
