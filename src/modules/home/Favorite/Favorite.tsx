import { VStack, Flex, Heading, Text, Box } from '@chakra-ui/react'
import { addScaleCorrector } from 'framer-motion'
import { t } from 'i18next'
import Link from 'next/link'
import router from 'next/router'
import { SwiperSlide } from 'swiper/react'
import { useFavoriteRestaurantList } from '../../../api/restaurant/useFavoriteRestaurantList'
import { Loader } from '../../../ui/AppComponents/Loader'
import { RestaurantSkeletonItem } from '../../../ui/AppComponents/RestaurantSkeletonItem'
import { RestourantCard } from '../../../ui/cards/RestourantCard'
import { Carousel } from '../../../ui/features/Carousel'

interface FavoriteProps {}

export const Favorite: React.FC<FavoriteProps> = ({}) => {
  const { data, isLoading, isSuccess } = useFavoriteRestaurantList()

  if (data?.results.length === 0) return null

  const renderItems = () =>
    isLoading ? (
      <>
        {new Array(3).fill(null).map(() => (
          <SwiperSlide>
            <RestaurantSkeletonItem />
          </SwiperSlide>
        ))}
      </>
    ) : (
      isSuccess &&
      data.results.map((v) => (
        <SwiperSlide>
          <Box p={2.5}>
            <RestourantCard
              restaurantId={v.id}
              image={v.background.file}
              isLiked={v.is_favourite}
              name={v.title}
              star={v.rating}
              distance={v.distance}
              state={v.is_open ? 'open' : 'closed'}
              isDeliverable={v.has_delivery}
              cost={v.additional.approximate_delivery_price}
              time={v.additional.approximate_delivery_time}
            />
          </Box>
        </SwiperSlide>
      ))
    )

  return (
    <VStack w="100%">
      <Flex alignItems={'flex-end'} w="full" justify="space-between">
        <Heading fontSize="1.5rem" lineHeight="2rem">{t`Favourite restaurants`}</Heading>
        <Text fontSize="1.25rem" color="premium_red.1000">
          <Link href="/restaurant/favourites">{t`All`}</Link>
        </Text>
      </Flex>
      <Carousel maxChildren={3}>{renderItems()}</Carousel>
    </VStack>
  )
}
