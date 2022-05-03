import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { PhoneNumber } from './PhoneNumber'

type PhoneNumberModalProps = {}

export const PhoneNumberModal = NiceModal.create<PhoneNumberModalProps>(({}) => {
  const modal = useModal()

  return (
    <Modal size={'sm'} isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <PhoneNumber />
      </ModalContent>
    </Modal>
  )
})
