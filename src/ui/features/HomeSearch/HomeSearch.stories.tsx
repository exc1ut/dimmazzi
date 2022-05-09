import { Meta, Story } from '@storybook/react';

import { HomeSearch } from './HomeSearch';

const meta: Meta = {
  title: 'Components/HomeSearch',
  component: HomeSearch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <HomeSearch {...props} />;

export const Default = Template.bind({});
Default.args = {};
