import {
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

  if (isLessThanLg) return null

  return (
    <Box py={10} color="premium_dark.50" bg="premium_dark.1000">
      <Container maxW={'container.xl'}>
        <SimpleGrid alignItems={'center'} templateColumns="2fr 6fr 2fr">
          <Image src="/assets/images/logo_light.svg" width={150} height={50} />
          <Box>
            <HStack justifyContent="center" spacing={10}>
              {listItems.map((item) => (
                <Button color={'dark.5'} fontWeight={400} variant={'link'}>
                  {item.name}
                </Button>
              ))}
            </HStack>
          </Box>
          <HStack justifyContent={'space-between'}>
            <Box>
              <Image src="/assets/images/appstore.svg" width={100} height={50} />
            </Box>
            <Box>
              <Image src="/assets/images/google_play.svg" width={100} height={50} />
            </Box>
          </HStack>
        </SimpleGrid>
        <SimpleGrid pt={6} alignItems={'center'} templateColumns="2fr 6fr 2fr">
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
          <Text textAlign={'right'} fontSize={'xs'}>
            © 2022 «Dmozzi» MChJ
          </Text>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
