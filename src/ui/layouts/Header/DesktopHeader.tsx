import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useAddressQuery } from '../../../api/address/useAddressQuery'
import { AuthModal } from '../../../modules/auth/auth/AuthModal'
import { useAuth } from '../../../stores/useAuth'
import { totalMealSelector, useCart } from '../../../stores/useCart'
import { useLocation } from '../../../stores/useLocation'
import { ILanguage } from '../../../utils/language'
import { Cart } from './components/Cart'
import { Menu } from './components/Menu'

interface DesktopHeaderProps {
  handleAuth: () => void
  handleLocation: () => void
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ handleAuth, handleLocation }) => {
  const { t } = useTranslation()
  const { isAuthenticated } = useAuth()
  const location = useLocation((state) => state.place_name)
  const totalMeals = useCart(totalMealSelector)

  return (
    <Box>
      <Container maxW={'container.xl'}>
        <Grid templateColumns="2fr 4fr 1fr 1.5fr" gap={4}>
          <GridItem alignContent={'center'}>
            <Link href={'/'}>
              <Flex cursor={'pointer'} as="a" justifyContent={'start'} alignItems="center">
                <Image src="/assets/images/logo.svg" width={140} height={50} />
              </Flex>
            </Link>
          </GridItem>
          <GridItem>
            <Center justifyContent={'flex-start'} h={'full'}>
              <HStack cursor={'pointer'} onClick={handleLocation} spacing={2}>
                <Image src="/assets/images/location.svg" width={30} height={30} />
                {location ? (
                  <Text color={'premium_dark.900'} fontSize={'md'} fontWeight={400}>
                    {location}
                  </Text>
                ) : (
                  <Text
                    color={'premium_dark.400'}
                    fontSize={'md'}
                  >{t`No location has entered`}</Text>
                )}
              </HStack>
            </Center>
          </GridItem>
          <GridItem>
            <Cart count={totalMeals} />
          </GridItem>
          <GridItem>
            <Center h={'full'}>
              {isAuthenticated ? (
                <Menu />
              ) : (
                <Button
                  colorScheme="premium_red"
                  onClick={handleAuth}
                  w={'full'}
                >{t`Signin`}</Button>
              )}
            </Center>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}
