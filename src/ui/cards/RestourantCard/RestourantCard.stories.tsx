import { Container, SimpleGrid } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { RestourantCard } from './RestourantCard'

const meta: Meta = {
  title: 'Components/RestourantCard',
  component: RestourantCard,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = (props) => (
  <SimpleGrid templateColumns={'repeat(4,1fr)'}>
    <Container maxW={'container.xl'}>
      <RestourantCard {...props} />
    </Container>
  </SimpleGrid>
)

export const Default = Template.bind({})
Default.args = {
  image:
    'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
  isLiked: true,
  name: 'MaxWay',
  star: 3.8,
  state: 'open',
  distance: 2.47,
  isDeliverable: true,
  cost: 8000,
  time: 12,
}
