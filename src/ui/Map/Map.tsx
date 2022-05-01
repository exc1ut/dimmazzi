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
  useToast,
} from '@chakra-ui/react'
import { GoogleMap } from './GoolgeMap'
import { Controls } from './Controls'
import { useMapStore } from './useMapStore'
import { useDisclosure } from '@chakra-ui/react'
import { AddressForm } from './AddressForm'
import { AddressValidation } from './AddressForm/Address.validation'
import { useLocation } from '../../stores/useLocation'
import { useTranslation } from 'react-i18next'
import { useAddAdressMutation } from '../../api/address/useAddAddressMutation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MapProps = {}

export const Map = NiceModal.create(({}) => {
  const modal = useModal()
  const { location, reset } = useMapStore()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { setStore } = useLocation()
  const toast = useToast()
  const { t } = useTranslation()
  const mutation = useAddAdressMutation()

  const handleClick = () => {
    onOpen()
  }

  const onSubmit = (data: AddressValidation) => {
    const address = `${data.approximateLocation}, ${data.street}, ${data.home}`
    if (typeof location?.lat === 'number' && typeof location?.lng === 'number') {
      mutation.mutate(
        {
          latitude: location?.lat + '',
          longitude: location?.lng + '',
          place_name: address,
        },
        {
          onSuccess: () => {
            setStore({
              latitude: location?.lat + '',
              longitude: location?.lng + '',
              place_name: address,
            })

            onClose()

            modal.resolve()
            reset()
            modal.hide()
          },
        }
      )
    } else {
      toast({
        duration: 3000,
        description: t`Please select location before submitting`,
        position: 'bottom',
        status: 'error',
      })
    }
  }

  return (
    <ChakraModal size="4xl" isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent overflow="hidden" borderRadius="lg">
        <ModalCloseButton fontWeight="bold" color={'premium_red.1000'} zIndex={999} />
        <ModalBody position="relative" p={0} m={0}>
          <AddressForm onSubmit={onSubmit} isOpen={isOpen} onClose={onClose} />
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
