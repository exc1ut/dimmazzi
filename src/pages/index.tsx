import { Box, Container } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Carousel } from '../ui/features/Carousel'

const Index = () => {
  const { t } = useTranslation()

  return (
    <Container maxW={'container.xl'}>
      <Box>
        <Carousel />
      </Box>
    </Container>
  )
}

export default Index
