import Home from '../modules/home'
import { Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Carousel } from '../ui/features/Carousel'

const Index = () => {
  const { t } = useTranslation()

  return (
    <Container maxW={'container.xl'}>
      <Home />
      {/* <Carousel /> */}
    </Container>
  )
}

export default Index
