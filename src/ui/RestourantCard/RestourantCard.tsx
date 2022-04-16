import { CalendarIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Stack, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import Image from 'next/image'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { currencyFormatter } from '../../utils/currency'

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

type CommonProps = {
  image: string
  isLiked: boolean
  state: 'open' | 'closed'
  name: string
  star: number
  distance: number
}

type ConditionalProps =
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
  const loader = () => {
    return props.image
  }

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

  const color = React.useMemo(() => (props.state === 'open' ? 'green.100' : 'orange:100'), [])

  return (
    <Stack
      as={motion.div}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      cursor={'pointer'}
      overflow={'hidden'}
      borderRadius={'lg'}
      shadow={'lg'}
      w={'full'}
      direction={'column'}
    >
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'flex-end'}
        flexDir={'column'}
        h={200}
        objectFit={'contain'}
        backgroundPosition={'center'}
        backgroundImage={props.image}
        w={'full'}
        p={4}
      >
        <Box>
          <IconButton
            variant="unstyled"
            backgroundColor={'rgba(255,255,255,0.9)'}
            size={'sm'}
            fontSize="20px"
            aria-label="Call Sage"
            borderRadius={'full'}
            icon={
              <StyledImage
                src={`/assets/images/${props.isLiked ? 'heart_fill' : 'heart_outlined'}.svg`}
                width={15}
                height={15}
              />
            }
          />
        </Box>
        <Box borderRadius={'md'} px={2.5} py={0.5} backgroundColor={color}>
          <Text color={'dark.5'} fontWeight={400} fontSize={13}>
            {getStatus(props.state)}
          </Text>
        </Box>
      </Box>
      <HStack justifyContent={'space-between'} py={2} px={4}>
        <Text fontWeight={500} color={'dark.100'} fontSize={'lg'}>
          {props.name}
        </Text>
        <HStack spacing={2} color="dark.50">
          <HStack spacing={1.5}>
            <Image
              style={{ transform: 'translateY(-1px)' }}
              src="/assets/images/star.svg"
              width={20}
              height={20}
            />
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
            <Image src="/assets/images/tick.svg" width={20} height={20} />
            <Text color={'green.100'} fontWeight={600} fontSize={'sm'}>{t`Delivery`}</Text>
          </HStack>
          <HStack spacing={2.5}>
            <Text fontWeight={600} fontSize={'sm'}>
              {props.time} {t`min`}
            </Text>
            <Text color={'dark.50'} fontWeight={600} fontSize={'sm'}>
              ●
            </Text>
            <Text fontWeight={600} fontSize={'sm'}>
              {currencyFormatter.format(props.cost)}
            </Text>
          </HStack>
        </HStack>
      )}
    </Stack>
  )
}
