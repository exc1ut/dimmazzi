import { Container, SimpleGrid } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { MealCard } from './MealCard'

const meta: Meta = {
  title: 'Components/MealCard',
  component: MealCard,
  parameters: {
    controls: { expanded: true },
    argTypes: { onClick: { action: 'clicked' } },
  },
}

export default meta

const Template: Story = (props) => (
  <Container maxW={'container.xl'}>
    <SimpleGrid templateColumns="repeat(4,1fr)">
      <MealCard {...props} />
    </SimpleGrid>
  </Container>
)
export const Default = Template.bind({})
Default.args = {
  image:
    'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/5:4/w_3129,h_2503,c_limit/Smashburger-recipe-120219.jpg',
  types: ['Mini', 'Big'],
  name: 'Big tasty',
  price: 25000,
  onAdd: (type: any) => console.log(type),
}
