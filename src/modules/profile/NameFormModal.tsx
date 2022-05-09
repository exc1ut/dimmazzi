import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  VStack,
  Input,
} from '@chakra-ui/react'
import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { DevTool } from '@hookform/devtools'
import { t } from 'i18next'
import { useForm } from 'react-hook-form'
import { useEditProfile } from '../../api/auth/useEditProfileMutation'
import { useCurrentUser } from '../../api/user/useCurrentUser'
import { AppLoader } from '../../ui/AppComponents/AppLoader'
import { SubmitButton } from '../../ui/AppComponents/SubmitButton'

type FormType = {
  first_name: string
}

type Props = {
  name: string
}

export const NameFormModal = NiceModal.create<Props>(({ name }) => {
  const modal = useModal()
  const { data: currentUser, isSuccess, isLoading, refetch } = useCurrentUser()
  const { register, formState, control, handleSubmit } = useForm<FormType>({
    defaultValues: {
      first_name: name,
    },
    mode: 'onChange',
  })
  const mutation = useEditProfile()

  if (isLoading) return <AppLoader />
  if (!isSuccess) return null

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(
      {
        first_name: data.first_name,
        last_name: currentUser.last_name,
      },
      {
        onSuccess: () => {
          refetch()
          modal.hide()
        },
      }
    )
  })

  return (
    <Modal size={'sm'} isOpen={modal.visible} onClose={modal.hide}>
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalCloseButton />
        <ModalHeader textAlign={'center'}>{t`Name`}</ModalHeader>
        <ModalBody>
          <form onSubmit={onSubmit}>
            <VStack>
              <Input {...register('first_name', { required: true })} />
              <SubmitButton isLoading={mutation.isLoading} isValid={!formState.errors.first_name}>
                {t`Submit`}
              </SubmitButton>
              <DevTool control={control} />
            </VStack>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
})
