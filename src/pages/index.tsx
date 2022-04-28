import { HomeSearch } from '@/ui/features/HomeSearch'
import { Container, VStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Index = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container maxW="81rem" w={["full", "full", "full", "81rem"]}>
        <VStack marginTop="1.5rem">
          <HomeSearch />

        </VStack>
      </Container>
    </>
  )
}

export default Index
