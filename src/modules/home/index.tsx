import { Carousel } from '../../ui/features/Carousel/'
import { HomeSearch } from '../../ui/features/HomeSearch'
import { Box, Flex, Heading, VStack, Text, SimpleGrid, Skeleton, HStack } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useRestaurantListQuery } from '../../api/restaurant/useRestaurantListQuery'
import { RestourantCard } from '../../ui/cards/RestourantCard'
import { useRouter } from 'next/router'
import { PageMotion } from '../../ui/PageMotion'
import { useLocation } from '../../stores/useLocation'
import { Loader } from '../../ui/AppComponents/Loader'
import { SwiperSlide } from 'swiper/react'
import { useAddToFavourite } from '@/api/restaurant/useAddToFavourite'
import { queryKeys } from '@/api/queryKeys'

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [query_key, setQueryKey] = React.useState('')
  const { latitude, longitude } = useLocation()
  const recommendedList = useRestaurantListQuery({
    latitude,
    longitude,
    recommended: 'true',
  })
  const allRestaurantList = useRestaurantListQuery({
    latitude,
    longitude,
  })
  const mutation = useAddToFavourite(query_key, {
    retry: 0
  });


  return (
    <PageMotion>
      <VStack spacing={14} marginBottom="1.5rem">
        <HomeSearch />

        <VStack w="full" align="start" spacing={14}>
          {/* <VStack w="100%">
            <Flex alignItems={'flex-end'} w="full" justify="space-between">
              <Heading fontSize="1.5rem" lineHeight="2rem">{t`Favourite restaurants`}</Heading>
              <Text fontSize="1.25rem" color="premium_red.1000">
                <Link href="/restaurant/favourites">{t`All`}</Link>
              </Text>
            </Flex>
            <Carousel>
              {new Array(10).fill(null).map(() => (
                <Carousel.Item>
                  <RestourantCard
                    image={
                      'https://media-cdn.tripadvisor.com/media/photo-s/1a/18/3a/cb/restaurant-le-47.jpg'
                    }
                    isLiked={true}
                    name={'MaxWay'}
                    star={'4.7'}
                    distance={1500}
                    state={'open'}
                    isDeliverable
                    cost={23}
                    time={34}
                    onClick={() => router.push('/restaurant/1')}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </VStack> */}

          <VStack w="100%">
            <Flex alignSelf="center" w={'full'} justify="space-between">
              <Heading fontSize="1.5rem" lineHeight="2rem">{t`Recomended Restaunrants`}</Heading>
              <Text fontSize="1.25rem" color="premium_red.1000">
                <Link href="/restaurant/favourites">
                  <a>{t`All`}</a>
                </Link>
              </Text>
            </Flex>
            {recommendedList.isLoading ? (
              <Loader />
            ) : (
              <Carousel maxChildren={3}>
                {recommendedList.data &&
                  recommendedList.data.results.map((v) => (
                    <SwiperSlide>
                      <Box px={2.5} py={2.5}>
                        <RestourantCard
                          image={v.background.file}
                          isLiked={v.is_favourite}
                          name={v.title}
                          star={v.rating}
                          distance={v.distance}
                          state={v.is_open ? 'open' : 'closed'}
                          isDeliverable={v.has_delivery === true}
                          cost={
                            v.has_delivery ? v.additional.approximate_delivery_price : undefined
                          }
                          time={v.has_delivery ? v.additional.approximate_delivery_time : undefined}
                          onClick={() => router.push(`/restaurant/${v.id}`)}
                          onLike={() => { setQueryKey(queryKeys.restaurantList); mutation.mutate({ id: v.id }) }}
                        />
                      </Box>
                    </SwiperSlide>
                  ))}
              </Carousel>
            )}
          </VStack>
        </VStack>
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
                      onLike={() => { setQueryKey(queryKeys.restaurantList); mutation.mutate({ id: res.id }) }}
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
      </VStack>
    </PageMotion>
  )
}

export default Home
