import { HomeSearch } from '../../ui/features/HomeSearch'
import { Box, Container, Heading, SimpleGrid, useMediaQuery, VStack } from '@chakra-ui/react'

import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { PageMotion } from '../../ui/PageMotion'
import { useFavoriteRestaurantList } from '../../api/restaurant/useFavoriteRestaurantList'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { useAddRestaurantToFavouriteMutation } from '../../api/restaurant/useAddRestaurantToFavouriteMutation'
import { RestourantCard } from '../../ui/cards/RestourantCard'
import image from 'next/image'
import { useRouter } from 'next/router'
import Empty from '../../ui/features/Status/Empty'

interface FavouriteRestaurantProps {}

const FavouriteRestaurant: FunctionComponent<FavouriteRestaurantProps> = () => {
  const { t } = useTranslation()
  const [small] = useMediaQuery('(max-width: 512px)')
  const { data, isLoading, isSuccess } = useFavoriteRestaurantList()
  const router = useRouter()

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  return (
    <PageMotion>
      <Container maxW="container.xl">
        <VStack spacing={14} w="100%" mt="1.5rem">
          {small ? null : <HomeSearch />}
          <VStack w="100%" spacing={6} align="start">
            <Heading fontSize="1.5rem" lineHeight="2rem">{t`Favourite Restaurants`}</Heading>

            {data.results.length === 0 ? (
              <Box w="full">
                <Empty />
              </Box>
            ) : (
              <SimpleGrid columns={[1, 2, 2, 3]} w="100%" spacing={[8, 4, 6]}>
                {data.results.map((v) => (
                  <RestourantCard
                    restaurantId={v.id}
                    image={v.background.file}
                    isLiked={v.is_favourite}
                    name={v.title}
                    star={v.rating}
                    distance={v.distance}
                    state={v.is_open ? 'open' : 'closed'}
                    isDeliverable={v.has_delivery === true}
                    cost={v.has_delivery ? v.additional.approximate_delivery_price : undefined}
                    time={v.has_delivery ? v.additional.approximate_delivery_time : undefined}
                    onClick={() => router.push(`/restaurant/${v.id}`)}
                  />
                ))}
              </SimpleGrid>
            )}
          </VStack>
        </VStack>
      </Container>
    </PageMotion>
  )
}

export default FavouriteRestaurant
