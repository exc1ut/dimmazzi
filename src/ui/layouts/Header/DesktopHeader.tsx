import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useAddressQuery } from '../../../api/address/useAddressQuery'
import { AuthModal } from '../../../modules/auth/auth/AuthModal'
import { useAuth } from '../../../stores/useAuth'
import { useLocation } from '../../../stores/useLocation'
import { ILanguage } from '../../../utils/language'
import { Cart } from './components/Cart'
import { Menu } from './components/Menu'

interface DesktopHeaderProps {
  handleAuth: () => void
  handleLocation: () => void
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({
  handleAuth,
  handleLocation,
  language,
}) => {
  const { t } = useTranslation()
  const { isAuthenticated } = useAuth()
  const location = useLocation((state) => state.place_name)

  return (
    <Box>
      <Container maxW={'container.xl'}>
        <Grid templateColumns="2fr 4fr 1fr 1.5fr" gap={4}>
          <GridItem alignContent={'center'}>
            <Center w={'full'}>
              <Image src="/assets/images/logo.svg" width={200} height={50} />
            </Center>
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
            <Cart count={5} />
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
