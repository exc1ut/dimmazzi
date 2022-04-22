import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { useCallback, useMemo } from 'react'
import { PhoneNumber } from './PhoneNumber'
import { useAuthStore } from './useAuthStore'

export const AuthModal = NiceModal.create(({}) => {
  const modal = useModal()
  const { step } = useAuthStore()

  const body = useMemo(() => {
    switch (step) {
      case 'phone':
      default:
        return <PhoneNumber />
    }
  }, [step])

  return (
    <Modal isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        {body}
      </ModalContent>
    </Modal>
  )
})
