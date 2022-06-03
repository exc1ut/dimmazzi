import { Carousel } from '../../ui/features/Carousel/'
import { HomeSearch } from '../../ui/features/HomeSearch'
import {
  Box,
  Flex,
  Heading,
  VStack,
  Text,
  SimpleGrid,
  Skeleton,
  HStack,
  useMediaQuery,
} from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import {
  restaurantListfetcher,
  useRestaurantListQuery,
} from '../../api/restaurant/useRestaurantListQuery'
import { RestourantCard } from '../../ui/cards/RestourantCard'
import { useRouter } from 'next/router'
import { PageMotion } from '../../ui/PageMotion'
import { useLocation } from '../../stores/useLocation'
import { SwiperSlide } from 'swiper/react'
import { Favorite } from './Favorite/Favorite'
import { Recommended } from './Recommended/Recommended'
import { AllRestaurants } from './AllRestaurants/AllRestaurants'
import { useAuth } from '@/stores/useAuth'
import { dehydrate, QueryClient } from 'react-query'
import { queryKeys } from '../../api/queryKeys'

interface HomeProps {}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(queryKeys.favoriteRestaurant, () => [])
  await queryClient.prefetchQuery([queryKeys.restaurantList, { recommended: 'true' }], () =>
    restaurantListfetcher({ recommended: 'true' })
  )
  await queryClient.prefetchQuery(queryKeys.restaurantList, () => restaurantListfetcher({}))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [small] = useMediaQuery('(max-width:480px)')
  const { isAuthenticated } = useAuth()
  return (
    <PageMotion>
      <VStack spacing={14} marginBottom="1.5rem">
        {small ? null : <HomeSearch />}
        {isAuthenticated && <Favorite />}
        <Recommended />
        <AllRestaurants />
      </VStack>
    </PageMotion>
  )
}

export default Home
