import * as React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  CloseButton,
  VStack,
  Heading,
  Button,
  Input,
  Box,
  ModalCloseButton,
  ModalHeader,
  useBreakpointValue,
} from '@chakra-ui/react'
import { MotionBox } from '../MotionBox'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { NameValidation, resolver } from './name.validation'
import { useEditProfile } from '../../../../api/auth/useEditProfileMutation'
import { useAuthStore } from '../useAuthStore'
import { useAuth } from '../../../../stores/useAuth'
import { useModal } from '@ebay/nice-modal-react'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type NameFormProps = {}

export const NameForm = (props: NameFormProps) => {
  // hooks
  const { register, handleSubmit, formState } = useForm<NameValidation>({
    resolver,
    mode: 'onChange',
  })
  const { t } = useTranslation()
  const { setAuth } = useAuth()
  const modal = useModal()
  const { reset } = useAuthStore()

  const mutation = useEditProfile()

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data, {
      onSuccess: (data) => {
        setAuth(true)
        modal.resolve()
        modal.hide()
        reset()
      },
    })
  })
  return (
    <MotionBox data-testid={'name-container'} p="40px">
      <form onSubmit={onSubmit}>
        <VStack spacing={6} align="center">
          <ModalHeader>{t`User information`}</ModalHeader>
          <Input
            placeholder={t`Name`}
            isInvalid={!!formState.errors.first_name}
            data-testid="name"
            {...register('first_name')}
          />
          <Input
            placeholder={t`Surname`}
            isInvalid={!!formState.errors.last_name}
            {...register('last_name')}
          />
          <Button
            type="submit"
            backgroundColor={
              formState.isValid && !mutation.isLoading ? 'premium_red.1000' : undefined
            }
            variant={'modal'}
            isLoading={mutation.isLoading}
            disabled={!formState.isValid || mutation.isLoading}
            loadingText={t`Submitting`}
          >{t`Submit`}</Button>
        </VStack>
      </form>
    </MotionBox>
  )
}
