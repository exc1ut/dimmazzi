import { RestourantCard } from '../../ui/cards/RestourantCard'
import { HomeSearch } from '../../ui/features/HomeSearch'
import { Container, Heading, SimpleGrid, useMediaQuery, VStack } from '@chakra-ui/react'

import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { PageMotion } from '../../ui/PageMotion'

interface FavouriteRestaurantProps {}

const FavouriteRestaurant: FunctionComponent<FavouriteRestaurantProps> = () => {
  const { t } = useTranslation()
  const [small] = useMediaQuery('(max-width: 512px)')
  const restaurantsArray = Array.from({ length: 10 }, (v, k) => k)
  const restaurantProps = {
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
  return (
    <PageMotion>
      <Container maxW="container.xl">
        <VStack spacing={14} w="100%" mt="1.5rem">
          {small ? null : <HomeSearch />}
          <VStack w="100%" spacing={6} align="start">
            <Heading fontSize="1.5rem" lineHeight="2rem">{t`Favourite Restaurants`}</Heading>
            <SimpleGrid
              sx={{
                '&::-webkit-scrollbar': {
                  appearance: 'none',
                  display: 'none',
                },
                '&::-webkit-scrollbar-thumb': {
                  display: 'none',
                },
                '&::-webkit-scrollbar-track': {
                  display: 'none',
                },
              }}
              columns={[1, 2, 2, 3]}
              w="100%"
              spacing={[3, 4, 6]}
            >
              {restaurantsArray.map((item) => (
                <RestourantCard {...restaurantProps} />
              ))}
            </SimpleGrid>
          </VStack>
        </VStack>
      </Container>
    </PageMotion>
  )
}

export default FavouriteRestaurant
