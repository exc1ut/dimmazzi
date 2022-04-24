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
import { AuthModal } from '../../../modules/auth/auth/AuthModal'
import { useAuth } from '../../../stores/useAuth'
import { Cart } from './components/Cart'
import { Menu } from './components/Menu'

interface DesktopHeaderProps {}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({}) => {
  const { t } = useTranslation()
  const { isAuthenticated } = useAuth()
  const modal = useModal(AuthModal)

  const handleClick = () => {
    modal.show()
  }

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
              <HStack spacing={2}>
                <Image src="/assets/images/location.svg" width={30} height={30} />
                {/* <Text color={'dark.40'} fontSize={'md'}>{t`No location has entered`}</Text> */}
                <Text
                  color={'dark.90'}
                  fontSize={'md'}
                  fontWeight={400}
                >{t`Urganch shahar, Mustaqillik ko‘cha, 6`}</Text>
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
                  onClick={handleClick}
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
