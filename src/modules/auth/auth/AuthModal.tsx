import { Modal, ModalOverlay, ModalContent, ModalCloseButton } from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { AnimatePresence } from 'framer-motion'
import { useCallback, useMemo } from 'react'
import { NameForm } from './NameForm'
import { PhoneNumber } from './PhoneNumber'
import { useAuthStore } from './useAuthStore'
import { VerifyCodeModal } from './VerifyCodeModal'

export const AuthModal = NiceModal.create(({}) => {
  const modal = useModal()
  const { step } = useAuthStore()

  const body = useMemo(() => {
    switch (step) {
      case 'sms':
        return <VerifyCodeModal key={step} />
      case 'name':
        return <NameForm key={step} />
      case 'phone':
      default:
        return <PhoneNumber key={step} />
    }
  }, [step])

  return (
    <Modal isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <AnimatePresence exitBeforeEnter>{body}</AnimatePresence>
      </ModalContent>
    </Modal>
  )
})
