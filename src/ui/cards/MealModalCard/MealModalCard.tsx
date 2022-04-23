import * as React from 'react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { Content } from './Content'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MealModalCardProps = {
  title: string
  price: number
  image: string
  types?: string[]
}

export const MealModalCard = NiceModal.create<MealModalCardProps>((props) => {
  const modal = useModal()

  console.log(props)

  const handleClose = () => {
    modal.resolve()
    modal.hide()
  }

  return (
    <Modal size={'md'} isOpen={modal.visible} onClose={() => handleClose()}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton color={'premium_red.1000'} />
        <ModalBody p={5}>
          <Content {...props} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
