import { VStack, Heading, HStack, Skeleton, SimpleGrid } from '@chakra-ui/react'
import { t } from 'i18next'
import router from 'next/router'
import { useRestaurantListQuery } from '../../../api/restaurant/useRestaurantListQuery'
import { RestaurantSkeleton } from '../../../ui/AppComponents/RestaurantSkeleton'
import { RestourantCard } from '../../../ui/cards/RestourantCard'

interface AllRestaurantsProps {}

export const AllRestaurants: React.FC<AllRestaurantsProps> = ({}) => {
  const allRestaurantList = useRestaurantListQuery({})

  return (
    <VStack align="start" w="100%" spacing={6}>
      <Heading fontSize="1.5rem" lineHeight="2rem">{t`All Restaurants`}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={6} w="100%">
        {!allRestaurantList.isLoading ? (
          allRestaurantList.isSuccess &&
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
                restaurantId={res.id}
              />
            )
          })
        ) : (
          <RestaurantSkeleton skeletonNumber={6} />
        )}
      </SimpleGrid>
    </VStack>
  )
}
