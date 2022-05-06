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
} from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { RestaurantDetail } from '../../../../api/restourant/useRestourantDetail'
import { HeartOutlined, SmallStarIcon, CircleIcon, Tick } from '../../../../img/icons/Icons'
import { NextImage } from '../../../../ui/NextImage'
import { getTime } from '../../../../utils/getTime'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type RestourantProps = RestaurantDetail

export const Restourant: React.FC<RestourantProps> = (props) => {
  const { t } = useTranslation()
  const size = useBreakpointValue({ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: '2xl' })
  const bottom = useBreakpointValue({ base: '-40px', sm: '-44px', md: '-52px' })
  const left = useBreakpointValue({ base: '35%', sm: '35%', md: '40px' })
  const [small] = useMediaQuery('(max-width: 512px)')
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
            >
              <Icon as={HeartOutlined} color="red" w="1.3em" h="1.5em" />
            </IconButton>

            <Button bgColor="premium_green.1000">{props.is_open ? t('Ochiq') : t`Yopiq`}</Button>
          </Flex>
        </Box>
      </Box>
      <Box padding={small ? '0' : '0px 2.5rem'} w="100%">
        <VStack>
          <Flex
            flexDirection={small ? 'column' : 'row'}
            justify="space-between"
            align="flex-start"
            w="100%"
          >
            <VStack spacing={4} align="flex-start">
              <Heading fontSize="1.8rem" lineHeight="2.5rem">
                {props.title}
              </Heading>
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
            </VStack>

            <Flex
              w={small ? '100%' : 'auto'}
              direction={small ? 'column' : 'row'}
              marginTop={small ? '1.5rem' : '0'}
              gap={2}
            >
              {props.has_pickup && (
                <Button
                  variant="outline"
                  borderColor="premium_green.900"
                  color="premium_green.900"
                  size="sm"
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
                  size="sm"
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
            </Flex>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  )
}
