import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react'
import { MobileDrawerContent } from './MobileDrawerContent'

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
  handleAuth: () => void
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({ isOpen, onClose, handleAuth }) => {
  return (
    <Drawer isOpen={isOpen} size={'md'} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton colorScheme="premium_red" />
        <DrawerBody px={0}>
          <MobileDrawerContent onClose={onClose} handleAuth={handleAuth} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
