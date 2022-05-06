import { Carousel } from '../../ui/features/Carousel/'
import { HomeSearch } from '../../ui/features/HomeSearch'
import { Box, Flex, Heading, VStack, Text, SimpleGrid, Skeleton, HStack } from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { useRestaurantListQuery } from '../../api/restaurant/useRestaurantListQuery'
import { RestourantCard } from '../../ui/cards/RestourantCard'
import { useRouter } from 'next/router'
import { PageMotion } from '../../ui/PageMotion'
import { useLocation } from '../../stores/useLocation'
import { SwiperSlide } from 'swiper/react'
import { Favorite } from './Favorite/Favorite'
import { Recommended } from './Recommended/Recommended'
import { AllRestaurants } from './AllRestaurants/AllRestaurants'

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <PageMotion>
      <VStack spacing={14} marginBottom="1.5rem">
        <HomeSearch />
        <Favorite />
        <Recommended />
        <AllRestaurants />
      </VStack>
    </PageMotion>
  )
}

export default Home
