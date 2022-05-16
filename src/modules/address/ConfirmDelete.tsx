import { AppLoader } from '@/ui/AppComponents/AppLoader'
import {
  Modal,
  ModalContent,
  ModalOverlay,
  VStack,
  Text,
  Button,
  CloseButton,
  Box,
  Spinner,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
  HStack,
} from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

interface ConfirmDeleteProps {
  isOpen: boolean
  confirmDelete: () => void
  cancelDelete: () => void
  handleClose: () => void
  isFetching: boolean
}

export const ConfirmDelete: FunctionComponent<ConfirmDeleteProps> = ({
  isOpen,
  confirmDelete,
  cancelDelete,
  handleClose,
  isFetching,
}) => {
  const { t } = useTranslation()

  return (
    <Modal isCentered onClose={cancelDelete} isOpen={isOpen} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent py={2}>
        <ModalHeader textAlign={'center'}>{t`Are you sure to delete address?`}</ModalHeader>
        <ModalFooter>
          <HStack w={'full'} justifyContent="center" spacing={6}>
            <Button onClick={cancelDelete} variant="ghost">{t`Disagree`}</Button>
            <Button isLoading={isFetching} onClick={confirmDelete} colorScheme="blue" mr={3}>
              {t`Agree`}
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
