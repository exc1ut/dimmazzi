import { Meta, Story } from '@storybook/react';

import { VerifyCodeModal } from './VerifyCodeModal';

const meta: Meta = {
  title: 'Components/VerifyCodeModal',
  component: VerifyCodeModal,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <VerifyCodeModal {...props}></VerifyCodeModal>;

export const Default = Template.bind({});
Default.args = {};
