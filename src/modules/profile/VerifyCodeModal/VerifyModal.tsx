import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { VerifyCodeModal } from './VerifyCodeModal'

type VerifyModalProps = {
  phone: string
}

export const VerifyModal = NiceModal.create<VerifyModalProps>(({ phone }) => {
  const modal = useModal()

  return (
    <Modal size={'sm'} isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <VerifyCodeModal phone={phone} />
      </ModalContent>
    </Modal>
  )
})
