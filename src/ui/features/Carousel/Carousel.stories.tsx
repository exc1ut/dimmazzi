import { Box, Container } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { Carousel } from './Carousel'

const meta: Meta = {
  title: 'Components/Carousel',
  component: Carousel,
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = (props) => (
  <Container maxW={'container.xl'}>
    <Carousel {...props} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {}
