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
import { IAddress } from '../../api/address/IAddress.interface'
import { useUpdateAdressMutation } from '../../api/address/useUpdateAddress'
import { useQueryClient } from 'react-query'
import { queryKeys } from '../../api/queryKeys'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MapProps = {
  address?: IAddress
}

export const Map = NiceModal.create<MapProps>(({ address: initialAddress }) => {
  const modal = useModal()
  const { location, reset, setLocation, setCurrentPosition, setPosition } = useMapStore()
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { setStore } = useLocation()
  const toast = useToast()
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const mutation = useAddAdressMutation()
  const updateMutation = useUpdateAdressMutation()

  React.useEffect(() => {
    if (initialAddress) {
      const position = {
        lat: +initialAddress.latitude,
        lng: +initialAddress.longitude,
      }
      setLocation(position)
      setPosition(position)
    }
  }, [])

  const handleClick = () => {
    onOpen()
  }

  const onSubmit = (data: AddressValidation) => {
    const address = `${data.approximateLocation}, ${data.street}, ${data.home}`
    if (typeof location?.lat === 'number' && typeof location?.lng === 'number') {
      const addressDto = {
        latitude: location?.lat + '',
        longitude: location?.lng + '',
        place_name: address,
      }
      const handleOnSuccess = () => {
        setStore(addressDto)
        onClose()
        modal.resolve()
        reset()
        modal.hide()
        queryClient.invalidateQueries(queryKeys.addressList)
      }

      if (initialAddress) {
        updateMutation.mutate(
          { id: initialAddress.id, ...addressDto },
          {
            onSuccess: handleOnSuccess,
          }
        )
      } else {
        mutation.mutate(addressDto, {
          onSuccess: handleOnSuccess,
        })
      }
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
