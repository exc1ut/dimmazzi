import * as React from 'react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import {
  Box,
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  position,
  useBreakpointValue,
} from '@chakra-ui/react'
import { GoogleMap } from './GoolgeMap'
import { Controls } from './Controls'
import { useMapStore } from './useMapStore'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MapProps = {}

export const Map = NiceModal.create(({}) => {
  const modal = useModal()
  const { location, reset } = useMapStore()

  const handleClick = () => {
    modal.resolve(location)
    reset()
    modal.hide()
  }

  return (
    <ChakraModal size="4xl" isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent overflow="hidden" borderRadius="lg">
        <ModalCloseButton fontWeight="bold" color={'premium_red.1000'} zIndex={999} />
        <ModalBody position="relative" p={0} m={0}>
          <GoogleMap />
          <Controls />
          <Box w={'full'} px={'30%'} bottom={8} position="absolute">
            <Button
              onClick={handleClick}
              boxShadow="lg"
              size="lg"
              w="full"
              colorScheme="premium_red"
            >
              Submit
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </ChakraModal>
  )
})
