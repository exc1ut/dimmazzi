import { Meta, Story } from '@storybook/react';

import { SearchCard } from './SearchCard';

const meta: Meta = {
  title: 'Components/SearchCard',
  component: SearchCard,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <SearchCard {...props} />

export const Default = Template.bind({});
Default.args = {
  name: "Evos - Lavash center",
  category: "fastfood",
};
