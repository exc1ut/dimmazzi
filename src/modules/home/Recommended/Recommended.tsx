import { VStack, Flex, Heading, Box, Text } from '@chakra-ui/react'
import { t } from 'i18next'
import Link from 'next/link'
import router from 'next/router'
import { SwiperSlide } from 'swiper/react'
import { useRestaurantListQuery } from '../../../api/restaurant/useRestaurantListQuery'
import { Loader } from '../../../ui/AppComponents/Loader'
import { RestourantCard } from '../../../ui/cards/RestourantCard'
import { Carousel } from '../../../ui/features/Carousel'

interface RecommendedProps {}

export const Recommended: React.FC<RecommendedProps> = ({}) => {
  const recommendedList = useRestaurantListQuery({
    recommended: 'true',
  })

  if (recommendedList.data?.results.length === 0) {
    return null
  }

  return (
    <VStack w="100%">
      <Flex alignSelf="center" w={'full'} justify="space-between">
        <Heading fontSize="1.5rem" lineHeight="2rem">{t`Recomended Restaunrants`}</Heading>
        <Text fontSize="1.25rem" color="premium_red.1000">
          <Link href="/restaurant/recommended">
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
                </Box>
              </SwiperSlide>
            ))}
        </Carousel>
      )}
    </VStack>
  )
}
