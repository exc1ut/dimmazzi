import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, IconButton, SimpleGrid, Stack, useDisclosure } from '@chakra-ui/react'
import Image from 'next/image'
import { MobileDrawer } from './components/MobileDrawer'

interface MobileHeaderProps {}

export const MobileHeader: React.FC<MobileHeaderProps> = ({}) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <SimpleGrid templateColumns="repeat(3,1fr)">
        <Box></Box>
        <Box display={'flex'} justifyContent={'center'}>
          <Image src="/assets/images/logo.svg" width={200} height={50} />
        </Box>
        <Box display={'flex'} justifyContent={'right'}>
          <IconButton
            variant="ghost"
            aria-label="Hamburger"
            size={'lg'}
            icon={<HamburgerIcon boxSize="1.5em" color={'dark.90'} />}
            onClick={onOpen}
            mr={6}
          />
        </Box>
      </SimpleGrid>
      <MobileDrawer isOpen={isOpen} onClose={onClose} />
    </>
  )
}
