import { Meta, Story } from '@storybook/react';

import { MealListItem } from './MealListItem';

const meta: Meta = {
  title: 'Components/MealListItem',
  component: MealListItem,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = (props) => <MealListItem {...props} />;

export const Default = Template.bind({});
Default.args = {
  mealName: 'Meal Name',
  imgSrc: '/assets/images/burger_cart.jpg',
  price: 15000,
  type: "cart",
  quantity: 1,
};
