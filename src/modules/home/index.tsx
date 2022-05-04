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

interface HomeProps { }

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const restaurantList = useRestaurantListQuery(
    ['restList'],
    { longtitude: 4.98541, latitude: 5.58965 },
    {
      onSuccess: (data: any) => {
        console.log(data.data.results, ' results')
      },
      retry: 0,
    }
  )

  return (
    <PageMotion>
      <VStack spacing={14} marginBottom="1.5rem">
        <HomeSearch />

        <VStack w="full" align="start" spacing={14}>
          <VStack w="100%">
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
          </VStack>

          <VStack w="100%">
            <Flex alignSelf="center" w={'full'} justify="space-between">
              <Heading fontSize="1.5rem" lineHeight="2rem">{t`Recomended Restaunrants`}</Heading>
              <Text fontSize="1.25rem" color="premium_red.1000">
                <Link href="/restaurant/favourites">
                  <a>{t`All`}</a>
                </Link>
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
          </VStack>
        </VStack>
        <VStack align="start" w="100%" spacing={6}>
          <Heading fontSize="1.5rem" lineHeight="2rem">{t`All Restaurants`}</Heading>
          {!restaurantList.error ? (
            <SimpleGrid columns={[1, 2, 3]} spacing={6} w="100%">
              {!restaurantList.isLoading ? (
                restaurantList.data?.data.results.map((res: any) => {
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
                      onClick={() => router.push('/restaurant/1')}
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
          ) : !restaurantList.data?.data.results.length ? (
            <Heading color="premium_red.1000" alignSelf="center">{t`No Restaurant Found`}</Heading>
          ) : (
            <Heading color="premium_red.1000" alignSelf="center">
              {t`Something Went Wrong`}{' '}
            </Heading>
          )}
        </VStack>
      </VStack>
    </PageMotion>
  )
}

export default Home
