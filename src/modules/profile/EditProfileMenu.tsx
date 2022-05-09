import { EditIcon } from '@chakra-ui/icons'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ModalHeader,
  Divider,
  VStack,
  Flex,
  Text,
  IconButton,
} from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useCurrentUser } from '../../api/user/useCurrentUser'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { NameFormModal } from './NameFormModal'
import { PhoneNumberModal } from './PhoneNumber/PhoneNumberModal'

export const EditProfileModal = NiceModal.create(({}) => {
  const modal = useModal()
  const nameFormModal = useModal(NameFormModal)
  const phoneNumberModal = useModal(PhoneNumberModal)
  const { t } = useTranslation()
  const { data, isLoading, isSuccess } = useCurrentUser()

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  const phone = `+${data.phone_number}`

  return (
    <Modal size={'sm'} isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalCloseButton />
        <ModalHeader textAlign={'center'}>{t`Edit profile`}</ModalHeader>
        <ModalBody>
          <VStack divider={<Divider />} spacing={4}>
            <Flex w="full" justifyContent={'space-between'} alignItems="center">
              <VStack spacing={0} alignItems={'flex-start'}>
                <Text fontWeight={400} fontSize="sm" color="premium_dark.400">
                  {t('Ism')}:
                </Text>
                <Text>{data.first_name}</Text>
              </VStack>
              <IconButton
                variant={'ghost'}
                borderRadius="full"
                aria-label="name"
                color={'premium_dark.700'}
                icon={<EditIcon />}
                onClick={() => nameFormModal.show({ name: data.first_name })}
              />
            </Flex>
            <Flex w="full" justifyContent={'space-between'} alignItems="center">
              <VStack spacing={0} alignItems={'flex-start'}>
                <Text fontWeight={400} fontSize="sm" color="premium_dark.400">
                  {t('Telefon raqam')}:
                </Text>
                <Text>{phone}</Text>
              </VStack>
              <IconButton
                variant={'ghost'}
                borderRadius="full"
                aria-label="name"
                color={'premium_dark.700'}
                icon={<EditIcon />}
                onClick={() => phoneNumberModal.show()}
              />
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
