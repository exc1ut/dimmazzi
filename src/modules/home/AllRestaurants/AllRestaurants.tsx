import { VStack, Heading, HStack, Skeleton, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import router from 'next/router'
import { useRestaurantListQuery } from '../../../api/restaurant/useRestaurantListQuery'
import { RestourantCard } from '../../../ui/cards/RestourantCard'

interface AllRestaurantsProps {}

export const AllRestaurants: React.FC<AllRestaurantsProps> = ({}) => {
  const allRestaurantList = useRestaurantListQuery({})

  return (
    <VStack align="start" w="100%" spacing={6}>
      <Heading fontSize="1.5rem" lineHeight="2rem">{t`All Restaurants`}</Heading>
      {allRestaurantList.isSuccess ? (
        <SimpleGrid columns={[1, 2, 3]} spacing={6} w="100%">
          {!allRestaurantList.isLoading ? (
            allRestaurantList.data.results.map((res) => {
              return (
                <RestourantCard
                  image={res.background.file}
                  isLiked={res.is_favourite}
                  name={res.title}
                  star={res.rating}
                  distance={res.distance}
                  state={res.is_open ? 'open' : 'closed'}
                  isDeliverable={res.has_delivery}
                  cost={res.additional.approximate_delivery_price}
                  time={res.additional.approximate_delivery_time}
                  onClick={() => router.push(`/restaurant/${res.id}`)}
                />
              )
            })
          ) : (
            <HStack spacing={6} w="105%">
              <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />
              <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />
              <Skeleton w="25rem" h="20rem" borderRadius=".5rem" />
            </HStack>
          )}
        </SimpleGrid>
      ) : null}
    </VStack>
  )
}
