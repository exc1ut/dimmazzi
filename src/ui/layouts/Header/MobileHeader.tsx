import { useRestaurantListQuery } from '@/api/restaurant/useRestaurantListQuery'
import { useAuth } from '@/stores/useAuth'
import { useLocation } from '@/stores/useLocation'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  useDisclosure,
  VStack,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { MobileDrawer } from './components/MobileDrawer'
import MobileSearch from './components/MobileSearch'
import { useMobileStore } from './useMobileStore'

interface MobileHeaderProps {
  handleLocation: () => void
  handleAuth: () => void
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ handleLocation, handleAuth }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { searchVisible, setSearchVisible } = useMobileStore()
  const [searchValue, setSearchValue] = React.useState('')
  const { isAuthenticated } = useAuth()
  const { t } = useTranslation()
  const location = useLocation((state) => state.place_name)
  const router = useRouter()

  const handleMobileAuth = async () => {
    await handleAuth()
    onClose()
  }

  return (
    <>
      <VStack w="100%" align="start">
        {isAuthenticated && (
          <Box marginX="1rem">
            <HStack justify="start" cursor={'pointer'} onClick={handleLocation} spacing={2}>
              <Image src="/assets/images/location.svg" width={30} height={30} />
              {location ? (
                <Text color={'premium_dark.900'} fontSize={'md'} fontWeight={400}>
                  {location}
                </Text>
              ) : (
                <Text color={'premium_dark.400'} fontSize={'md'}>{t`No location has entered`}</Text>
              )}
            </HStack>
          </Box>
        )}
        <SimpleGrid templateColumns={!searchVisible ? 'repeat(3,1fr)' : '1fr'} w="100%">
          {!searchVisible && (
            <Box display={'flex'} justifyContent={'left'} marginLeft={'.8rem'}>
              <IconButton
                variant="ghost"
                color={searchVisible ? 'white' : 'premium_dark.600'}
                aria-label="Hamburger"
                size={'lg'}
                bgColor={searchVisible ? 'premium_red.1000' : 'transparent'}
                borderRadius=".5rem"
                icon={<HamburgerIcon boxSize="1.5em" color={'dark.90'} />}
                onClick={onOpen}
                mr={6}
              />
            </Box>
          )}

          {searchVisible ? (
            <Box w="full" padding={'.5rem'}>
              {' '}
              <MobileSearch onClose={() => setSearchVisible(false)} />{' '}
            </Box>
          ) : (
            <>
              <Box display={'flex'} justifyContent={'center'} onClick={() => router.push('/')}>
                <Image src="/assets/images/logo.svg" width={200} height={50} />
              </Box>
              <Box
                display={'flex'}
                alignItems={'center'}
                justifyContent={'right'}
                marginRight=".5rem"
              >
                <IconButton
                  onClick={() => setSearchVisible(!searchVisible)}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                  aria-label="search"
                  _hover={{
                    backgroundColor: 'transparent',
                  }}
                  backgroundColor="transparent"
                  color="premium_dark.600"
                >
                  <SearchIcon boxSize={6} top=".6rem" />
                </IconButton>
              </Box>
            </>
          )}
        </SimpleGrid>
      </VStack>

      <MobileDrawer handleAuth={handleMobileAuth} isOpen={isOpen} onClose={onClose} />
    </>
  )
}
