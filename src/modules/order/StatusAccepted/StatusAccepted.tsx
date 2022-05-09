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
import NiceModal, { create, useModal } from '@ebay/nice-modal-react'
import { useTranslation } from 'react-i18next'
import { OrderCreateResponse } from '../../../api/order/useOrderCreateMutation'
import { useRouter } from 'next/router'

export const StatusAccepted = NiceModal.create<OrderCreateResponse>(({ order_id }) => {
  const { t } = useTranslation()
  const router = useRouter()

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
                onClick={() => {
                  router.push('/')
                  modal.resolve()
                  modal.hide()
                }}
              >{t`Yana buyurtma qilish`}</Button>
              <Button
                onClick={() => {
                  router.push(`/order/${order_id}`)
                  modal.resolve()
                  modal.hide()
                }}
                variant="outline"
                w="100%"
                h="48px"
              >{t`Buyurtmani kuzatib borish`}</Button>
            </VStack>
          </VStack>
        </Box>
      </ModalContent>
    </Modal>
  )
})
