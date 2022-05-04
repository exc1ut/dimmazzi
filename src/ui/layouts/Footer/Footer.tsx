import {
  AspectRatio,
  Box,
  Button,
  Container,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { NextImage } from '../../NextImage'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type FooterProps = {}

export const Footer = (props: FooterProps) => {
  const { t } = useTranslation()
  const [isLessThanLg] = useMediaQuery('(max-width: 959px)')

  const listItems = useMemo(
    () => [
      {
        name: t`Rules`,
        link: '',
      },
      {
        name: t`Contact`,
        link: '',
      },
      {
        name: t`Partners`,
        link: '',
      },
      {
        name: t`Questions`,
        link: '',
      },
    ],
    []
  )

  return (
    <Box py={10} color="premium_dark.50" bg="premium_dark.1000">
      <Container maxW={'container.xl'}>
        <SimpleGrid
          alignItems={'center'}
          templateColumns={{ lg: '2fr 5fr 3fr', md: '1fr' }}
          spacing={10}
        >
          <Image src="/assets/images/logo_light.svg" width={150} height={50} />
          <Box>
            <Stack
              direction={{ sm: 'row', lg: 'row' }}
              justifyContent={'space-around'}
              spacing={10}
            >
              {listItems.map((item, index) => (
                <Button key={index} color={'dark.50'} fontWeight={400} variant={'link'}>
                  {item.name}
                </Button>
              ))}
            </Stack>
          </Box>
          <HStack justifyContent={['space-around', null, null, 'space-between']}>
            {/* <Box>
              <Image
                layout="fill"
                src="/assets/images/appstore.svg"
                width={'40%'}
                height={'auto'}
              />
            </Box> */}
            <AspectRatio w={['50%', null, '35%', '40%']} ratio={4.267 / 1}>
              <Box w={'full'} h={'full'}>
                <NextImage h={'full'} w={'full'} src="/assets/images/appstore.svg" />
              </Box>
            </AspectRatio>
            <AspectRatio w={['50%', null, '35%', '40%']} ratio={4.267 / 1}>
              <Box w={'full'} h={'full'}>
                <NextImage h={'full'} w={'full'} src="/assets/images/google_play.svg" />
              </Box>
            </AspectRatio>
          </HStack>
        </SimpleGrid>
        <SimpleGrid
          pt={6}
          alignItems={'center'}
          templateColumns={['1fr 0fr 1fr', null, null, '2fr 5fr 3fr	']}
        >
          <HStack justifyContent={'center'} spacing={6}>
            <Box>
              <Image src="/assets/images/telegram.svg" width={25} height={25} />
            </Box>
            <Box>
              <Image src="/assets/images/facebook.svg" width={25} height={25} />
            </Box>
            <Box>
              <Image src="/assets/images/instagram.svg" width={25} height={25} />
            </Box>
          </HStack>
          <Box></Box>
          <Text
            color={'premium_dark.400'}
            textAlign={['center', null, null, 'right']}
            fontSize={'xs'}
          >
            © 2022 «Dmozzi» MChJ
          </Text>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
