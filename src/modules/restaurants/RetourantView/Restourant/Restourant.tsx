import {
  Avatar,
  Box,
  Button,
  Text,
  Flex,
  Heading,
  HStack,
  Icon,
  useBreakpointValue,
  useMediaQuery,
  VStack,
  chakra,
  IconButton,
  Stack,
} from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { RestaurantDetail } from '../../../../api/restourant/useRestourantDetail'
import {
  HeartOutlined,
  SmallStarIcon,
  CircleIcon,
  Tick,
  HeartFill,
} from '../../../../img/icons/Icons'
import { NextImage } from '../../../../ui/NextImage'
import { getTime } from '../../../../utils/getTime'
import { useAddRestaurantToFavouriteMutation } from '../../../../api/restaurant/useAddRestaurantToFavouriteMutation'
import { useQueryClient } from 'react-query'
import { queryKeys } from '../../../../api/queryKeys'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RestourantProps = RestaurantDetail

export const Restourant: React.FC<RestourantProps> = (props) => {
  const { t } = useTranslation()
  const size = useBreakpointValue({ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: '2xl' })
  const bottom = useBreakpointValue({ base: '-40px', sm: '-44px', md: '-52px' })
  const left = useBreakpointValue({ base: '1.8rem', sm: '2.2rem', md: '2.5rem' })
  const [small, medium, big, large] = useMediaQuery(['(max-width: 512px)', '(max-width: 768px)', '(max-width : 960px)', '(min-width: 1024px)'])

  const mutation = useAddRestaurantToFavouriteMutation()
  const queryClient = useQueryClient()

  const handleAddFavorite = () => {
    mutation.mutate(props.id, {
      onSuccess: () => {
        queryClient.invalidateQueries(queryKeys.favoriteRestaurant)
        queryClient.invalidateQueries(queryKeys.restaurantList)
        queryClient.invalidateQueries(queryKeys.restaurantDetail)
      },
    })
  }
  const services = React.useMemo(() => (<Flex
    // w={small ? '90%' : 'auto'}
    w={["auto"]}
    direction={'row'}
    gap={2}
    justify="flex-end"
    align={'start'}
    marginBottom="1rem"
  >
    {props.has_pickup && (
      <Button
        marginLeft={(!large && !medium) ? '1rem' : "0rem"}
        variant="outline"
        borderColor="premium_green.900"
        color="premium_green.900"
        size="sm"
        w={small ? '50%' : 'auto'}
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
        cursor="auto"
      >
        <Icon as={Tick} />
        <Text
          fontSize={small ? '0.8rem' : '1em'}
          textTransform="uppercase"
          marginLeft=".8rem "
          color={'premium_green.900'}
        >
          {t`Olib ketish`}
        </Text>
      </Button>
    )}
    {props.has_delivery && (
      <Button
        variant="outline"
        borderColor="premium_green.900"
        color="premium_green.900"
        w={small ? '50%' : 'auto'}
        size="sm"
        _hover={{ bgColor: 'none' }}
        _active={{ bgColor: 'none' }}
        cursor="auto"
      >
        <Icon as={Tick} />
        <Text
          fontSize={small ? '0.8rem' : '1em'}
          textTransform="uppercase"
          marginLeft=".8rem "
          color={'premium_green.900'}
        >
          {t`Yetkazib berish`}
        </Text>
      </Button>
    )}
  </Flex>), [props.has_delivery, props.has_pickup, small, large, medium, big])

  const serviceDetails = React.useMemo(() => {
    return (
      <Stack direction={["column", "row"]} spacing={2}>
        {props.has_pickup && (
          <Box borderRadius="0.5rem" padding="0.5rem 1rem" shadow={'md'}>
            <Text
              fontSize="0.875rem"
              fontWeight={500}
              lineHeight="1.25rem"
              color="premium_dark.600"
            >
              {t`Taom tayyorlash o’rtacha vaqti`}:{' '}
              <chakra.span fontWeight={700} color="premium_dark.1000">
                {getTime(props.average_cooking_time)}
              </chakra.span>
            </Text>
          </Box>
        )}

        {props.has_delivery && (
          <Box borderRadius="0.5rem" padding="0.5rem 1rem" shadow={'md'}>
            <Text
              fontSize="0.875rem"
              fontWeight={500}
              lineHeight="1.25rem"
              color="premium_dark.600"
            >
              {t`Yetkazib berish vaqti va narxi`}:
              <chakra.span fontWeight={700} color="premium_dark.1000">
                {' '}
                {props.additional.approximate_delivery_price} /{' '}
                {props.additional.approximate_delivery_time}
              </chakra.span>
            </Text>
          </Box>
        )}
      </Stack>
    )
  }, [props.has_delivery, props.has_pickup, small, large, medium, big])




  return (
    <VStack spacing="76">
      <Box w="100%" height="280px" position="relative" borderRadius="0.5rem">
        <Avatar
          position="absolute"
          src={props.logo.file}
          zIndex={100}
          // w='120px'
          // h='120px'
          size={size}
          bottom={bottom}
          left={left}
          borderColor={'white'}
          borderWidth={4}
        />

        <NextImage
          filter="brightness(0.6)"
          src={props.background.file}
          w={'full'}
          h={'full'}
          placeholder="blur"
          objectFit="cover"
          borderRadius="0.5rem"
        />

        <Box position="absolute" top={0} right="0px" h="100%">
          <Flex
            direction="column"
            align="flex-end"
            height="100%"
            padding={small ? '.8rem' : '1.5rem'}
            justify="space-between"
          >
            <IconButton
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              cursor={'pointer'}
              aria-label="button"
              boxSize={12}
              borderRadius="50%"
              bgColor="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                bgColor: 'none',
              }}
              _active={{
                bgColor: 'none',
              }}
              onClick={handleAddFavorite}
            >
              <Icon
                as={props.is_favourite ? HeartFill : HeartOutlined}
                color="red"
                w="1.3em"
                h="1.5em"
              />
            </IconButton>

            <Button
              _active={{ bgColor: 'none' }}
              _hover={{ bgColor: 'none' }}
              cursor="auto"
              bgColor="premium_green.1000"
            >
              {props.is_open ? t('Ochiq') : t`Yopiq`}
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box padding={small ? '0' : medium ? '0px 2rem' : big ? '0px, 2.2rem' : '0 2.5rem'} w="100%">
        <VStack align="start">
          {medium && <Heading fontSize="1.8rem" lineHeight="2.5rem">
            {props.title}
          </Heading>}
          <Flex
            flexDirection={['column-reverse', 'column-reverse', 'row', 'row']}
            justify="space-between"
            align="flex-start"
            flexBasis="100%"
            w="100%"
          >
            <VStack spacing={4} align="flex-start">
              {!medium && <Heading fontSize="1.8rem" lineHeight="2.5rem">
                {props.title}
              </Heading>}
              <HStack
                fontWeight={600}
                color="premium_dark.300"
                w="100%"
                lineHeight="1.5rem"
                spacing={1}
              >
                <Box boxSize={6}>
                  <SmallStarIcon />
                </Box>
                <HStack />
                <HStack spacing={3}>
                  <Text color={'premium_dark.500'}>{props.rating}</Text>
                  <CircleIcon boxSize={1.5} color="premium_dark.300" />
                  <Text color={'premium_dark.500'}>
                    {props.distance} {t`km`}
                  </Text>
                </HStack>
                <HStack />
              </HStack>
              {(large || medium) && serviceDetails}

            </VStack>

            {(large || medium) && services}
          </Flex>

          {(!large && !medium) && <Flex w="100%">{serviceDetails}<Box>{' '}</Box> {services} </Flex>}
        </VStack>
      </Box>
    </VStack>
  )
}
