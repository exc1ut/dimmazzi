import * as React from 'react'
import {
  Modal,
  VStack,
  ModalOverlay,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  Icon,
  Box,
  Button,
} from '@chakra-ui/react'
import { AcceptIcon } from '../../../img/icons/Icons'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type StatusAcceptedProps = {}

export const StatusAccepted = NiceModal.create<StatusAcceptedProps>(({}) => {
  const { t } = useTranslation()

  const modal = useModal()

  return (
    <Modal isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <VStack spacing={6} align="center">
            <Icon as={AcceptIcon} />
            <ModalBody>
              {t`Buyurtmangiz qabul qilindi.
								Kurer buyurtmangizni
								belgilangan vaqtda manzilingizga yetkazib beradi.`}
            </ModalBody>
            <VStack spacing={4} w="100%">
              <Button
                variant="modal"
                bgColor="premium_red.1000"
                w="100%"
              >{t`Yana buyurtma qilish`}</Button>
              <Button variant="outline" w="100%" h="48px">{t`Buyurtmani kuzatib borish`}</Button>
            </VStack>
          </VStack>
        </Box>
      </ModalContent>
    </Modal>
  )
})
