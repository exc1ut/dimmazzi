import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, IconButton, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import { MobileDrawer } from './components/MobileDrawer'
import MobileSearch from './components/MobileSearch'
import { useMobileStore } from './useMobileStore'

interface MobileHeaderProps { }

export const MobileHeader: React.FC<MobileHeaderProps> = ({ }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [searchVisible, setSearchVisible] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState('')






  return (
    <>
      <SimpleGrid templateColumns={!searchVisible ? "repeat(3,1fr)" : "1fr 6fr"}>
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

        {searchVisible ? <Box w="full" paddingRight=".8rem"> <MobileSearch /> </Box>
          :
          <><Box display={'flex'} justifyContent={'center'}>
            <Image src="/assets/images/logo.svg" width={200} height={50} />
          </Box>
            <Box display={'flex'} alignItems={'center'} justifyContent={'right'} marginRight=".5rem">
              <IconButton
                onClick={() => setSearchVisible(!searchVisible)}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'} aria-label='search'
                _hover={{
                  backgroundColor: 'transparent',
                }}
                backgroundColor="transparent" color="premium_dark.600">
                <SearchIcon boxSize={6} top='.6rem' />
              </IconButton>
            </Box>
          </>}
      </SimpleGrid>
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
