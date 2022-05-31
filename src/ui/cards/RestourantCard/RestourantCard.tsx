import { CalendarIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Stack, StackProps, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { useQueryClient } from 'react-query'
import { queryKeys } from '../../../api/queryKeys'
import { useAddRestaurantToFavouriteMutation } from '../../../api/restaurant/useAddRestaurantToFavouriteMutation'
import { HeartFill, Start, Tick } from '../../../img/icons/Icons'
import { useAuth } from '../../../stores/useAuth'
import { currencyFormatter, formatCurrency } from '../../../utils/currency'
import { Head } from './Head'

export type CommonProps = {
  image: string
  isLiked: boolean
  state: 'open' | 'closed'
  name: string
  star: string
  distance: number
  restaurantId: number
}

export type ConditionalProps =
  | {
      isDeliverable: true
      time: number
      cost: number
    }
  | {
      isDeliverable?: false
      time?: never
      cost?: never
    }

export type RestourantCardProps = CommonProps & ConditionalProps & StackProps

export const RestourantCard = (props: RestourantCardProps) => {
  const { t } = useTranslation()
  const [liked, setLiked] = React.useState(props.isLiked)
  const mutation = useAddRestaurantToFavouriteMutation()
  const queryClient = useQueryClient()
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const getStatus = React.useCallback(
    (status: RestourantCardProps['state']) => {
      switch (status) {
        case 'open':
          return t`Open`
        case 'closed':
          return t`Closed`
      }
    },
    [props.state]
  )

  React.useEffect(() => {
    setLiked(props.isLiked)
  }, [props.isLiked])

  const handleLike = () => {
    setLiked(!liked)
    mutation.mutate(props.restaurantId, {
      onError: () => {
        setLiked((prev) => !prev)
      },
      onSuccess: () => {
        queryClient.refetchQueries(queryKeys.favoriteRestaurant)
        queryClient.refetchQueries(queryKeys.restaurantList)
        queryClient.refetchQueries(queryKeys.restaurantDetail)
      },
    })
  }

  const handleClick = () => {
    if (props.state === 'open') {
      router.push(`/restaurant/${props.restaurantId}`)
    }
  }

  return (
    <Stack
      as={motion.div}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98, opacity: 0.5 }}
      animate={{ opacity: 1 }}
      cursor={'pointer'}
      overflow={'hidden'}
      borderRadius={'lg'}
      shadow={'md'}
      w={'full'}
      maxW="26rem"
      margin="0px"
      direction={'column'}
      onClick={handleClick}
      {...props}
    >
      <Head
        image={props.image}
        shade={props.state === 'open' ? 'success' : 'warning'}
        status={getStatus(props.state)}
        isLiked={liked}
        onLike={handleLike}
      />
      <HStack justifyContent={'space-between'} py={2} px={4}>
        <Text fontWeight={500} color={'pemium_dark.1000'} fontSize={'lg'}>
          {props.name}
        </Text>
        <HStack spacing={2} color="premium_dark.500">
          <HStack spacing={1.5}>
            <Start boxSize={'1.2em'} color={'premium_orange.1000'} />
            <Text color="premium_dark.500" fontWeight={500} fontSize={'sm'}>
              {props.star}
            </Text>
          </HStack>
          {props.isDeliverable && isAuthenticated && (
            <>
              <Text color="premium_dark.500" px={0.5} fontWeight={500} fontSize={'sm'}>
                ●
              </Text>
              <Text color="premium_dark.500" fontWeight={500} fontSize={'sm'}>
                {props.distance} {t`km`}
              </Text>
            </>
          )}
        </HStack>
      </HStack>
      {props.isDeliverable && isAuthenticated && (
        <HStack pb={3} px={4} justifyContent={'space-between'}>
          <HStack>
            <Tick color={'premium_green.1000'} boxSize={'1.3em'} />
            <Text color={'premium_green.1000'} fontWeight={600} fontSize={'sm'}>{t`Delivery`}</Text>
          </HStack>
          <HStack spacing={2.5}>
            <Text fontWeight={600} fontSize={'sm'}>
              {props.time} {t`min`}
            </Text>
            <Text color={'premium_dark.500'} fontWeight={600} fontSize={'sm'}>
              ●
            </Text>
            <Text fontWeight={600} fontSize={'sm'}>
              {formatCurrency(props.cost)}
            </Text>
          </HStack>
        </HStack>
      )}
    </Stack>
  )
}
