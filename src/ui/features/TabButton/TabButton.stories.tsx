import { Meta, Story } from '@storybook/react';

import { TabButton } from './TabButton';

const meta: Meta = {
  title: 'Components/TabButton',
  component: TabButton,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <TabButton {...props} />;
let active = "left";
export const Default = Template.bind({});
Default.args = {
  rightTab: "Yetkazib berish",
  leftTab: "Olib ketish",
  rightHandle: () => { active = "right"; },
  leftHandle: () => { active = "left"; },
  active: active
};
