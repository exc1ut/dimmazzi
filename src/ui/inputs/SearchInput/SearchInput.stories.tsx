import { Meta, Story } from '@storybook/react';

import { SearchInput } from './SearchInput';

const meta: Meta = {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <SearchInput {...props}>Hello</SearchInput>;

export const Default = Template.bind({});
Default.args = {};
