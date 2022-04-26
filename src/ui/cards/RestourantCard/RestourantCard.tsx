import { CalendarIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { HeartFill, Start, Tick } from '../../../img/icons/Icons'
import { currencyFormatter, formatCurrency } from '../../../utils/currency'
import { Head } from './Head'

const StyledImage = styled(Image)`
  width: 1em;
  height: 1em;
  display: inline-block;
  line-height: 1em;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: currentColor;
  vertical-align: middle;
`

export type CommonProps = {
  image: string
  isLiked: boolean
  state: 'open' | 'closed'
  name: string
  star: number
  distance: number
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

export type RestourantCardProps = CommonProps & ConditionalProps

export const RestourantCard = (props: RestourantCardProps) => {
  const { t } = useTranslation()

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

  return (
    <Stack
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      cursor={'pointer'}
      overflow={'hidden'}
      borderRadius={'lg'}
      shadow={'md'}
      w={'full'}
      maxW='26rem'
      margin="0px"
      direction={'column'}
    >
      <Head
        image={props.image}
        shade={props.state === 'open' ? 'success' : 'warning'}
        status={getStatus(props.state)}
      />
      <HStack justifyContent={'space-between'} py={2} px={4}>
        <Text fontWeight={500} color={'pemium_dark.1000'} fontSize={'lg'}>
          {props.name}
        </Text>
        <HStack spacing={2} color="premium_dark.500">
          <HStack spacing={1.5}>
            <Start boxSize={'1.2em'} color={'premium_orange.1000'} />
            <Text fontWeight={500} fontSize={'sm'}>
              {props.star}
            </Text>
          </HStack>
          {props.isDeliverable && (
            <>
              <Text px={0.5} fontWeight={500} fontSize={'sm'}>
                ●
              </Text>
              <Text fontWeight={500} fontSize={'sm'}>
                {props.distance} {t`km`}
              </Text>
            </>
          )}
        </HStack>
      </HStack>
      {props.isDeliverable && (
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
