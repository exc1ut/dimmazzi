import { useRestaurantListQuery } from '@/api/restaurant/useRestaurantListQuery'
import { RestourantCard } from '@/ui/cards/RestourantCard'
import { HomeSearch } from '@/ui/features/HomeSearch'
import { Container, Heading, SimpleGrid, useMediaQuery, VStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

interface RecommendedRestaurantProps { }

const RecommendedRestaurant: FunctionComponent<RecommendedRestaurantProps> = () => {
  const { t } = useTranslation()
  const [small] = useMediaQuery('(max-width: 512px)')
  const restaurantsArray = Array.from({ length: 10 }, (v, k) => k)
  const response = useRestaurantListQuery(['restaurant'], { longtitude: 4.98541, latitude: 5.58965, recommended: true }, {
    retry: 0,
  })
  const restaurantProps = {
    image:
      'https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg',
    isLiked: true,
    name: 'MaxWay',
    star: 3.8,
    state: "open",
    distance: 2.47,
    isDeliverable: true,
    cost: 8000,
    time: 12,
  }
  return (
    <Container maxW="container.xl">
      <VStack spacing={14} w="100%" mt="1.5rem" marginBottom="1.5rem">
        {small ? null : <HomeSearch />}
        <VStack w="100%" spacing={6} align="start">
          <Heading fontSize="1.5rem" lineHeight="2rem">{t`Recommended Restaurants`}</Heading>
          <SimpleGrid columns={[1, 2, 2, 3]} w="100%" spacing={[3, 4, 6]}>
            {restaurantsArray.map((item) => (
              <RestourantCard {...restaurantProps} />
            ))}
          </SimpleGrid>
        </VStack>
      </VStack>
    </Container>
  )
}

export default RecommendedRestaurant
