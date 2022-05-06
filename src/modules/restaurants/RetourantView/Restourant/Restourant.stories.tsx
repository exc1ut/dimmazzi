import { Meta, Story } from '@storybook/react';

import { Restourant } from './Restourant';

const meta: Meta = {
  title: 'Components/Restourant',
  component: Restourant,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <Restourant {...props} />;

export const Default = Template.bind({});
Default.args = {
  imgSrc: '/assets/images/Restaurant.jpg',
  status: 'open',
  logoSrc: '/assets/images/restaurant_logo.jpg',
  title: "Restoran Nomi",
  rating: 4.8,
  distance: 25,
  cookTime: 40
};

