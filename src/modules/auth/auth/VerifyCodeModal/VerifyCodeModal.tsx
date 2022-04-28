import {
  chakra,
  Modal,
  CloseButton,
  ModalContent,
  ModalOverlay,
  Box,
  Button,
  Text,
  VStack,
  Input,
  HStack,
  ModalCloseButton,
  ModalHeader,
  ChakraProvider,
  PinInput,
  PinInputField,
  useBreakpointValue,
} from '@chakra-ui/react'
import { useModal } from '@ebay/nice-modal-react'
import * as React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useLoginMutation } from '../../../../api/auth/useLoginMutation'
import { setAuthToken } from '../../../../services/jwtAxios'
import { useAuth } from '../../../../stores/useAuth'
import { MotionBox } from '../MotionBox'
import { resolver } from '../PhoneNumber/phone.validation'
import { useAuthStore } from '../useAuthStore'
import { PhoneValidation } from './validation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type VerifyCodeModalProps = {}

export const VerifyCodeModal = (props: VerifyCodeModalProps) => {
  const { register, control, handleSubmit, formState, watch } = useForm<PhoneValidation>({
    // resolver,
    mode: 'onChange',
    defaultValues: {
      code: '',
    },
  })
  const { t } = useTranslation()
  const values = useBreakpointValue({ sm: 'full', md: 'md' })
  const { setStep, phone, reset } = useAuthStore()
  const { setAuth } = useAuth()
  const mutation = useLoginMutation()
  const modal = useModal()

  const watchAll = watch('code')
  console.log(watchAll)

  const onSubmit = handleSubmit((data) => {
    if (phone) {
      const formattedPhone = phone.replaceAll(' ', '').replace('+', '')
      mutation.mutate(
        {
          phone: formattedPhone,
          code: data.code,
        },
        {
          onSuccess: (data) => {
            if (data.is_new_user) {
              setStep('name')
            } else {
              setAuth(true)
              modal.resolve()
              modal.hide()
              reset()
            }
            setAuthToken(data.token)
          },
        }
      )
    }
  })

  return (
    <MotionBox p="40px">
      <form onSubmit={onSubmit}>
        <VStack align="center" spacing={6}>
          <VStack align="center" spacing={4}>
            <ModalHeader>
              {/* Tizimga kirish */}
              {t('verify_code')}
            </ModalHeader>
            <Text variant="modal_sub">
              {t`Tasdiqlash kodi`}
              <chakra.span color="premium_dark.1000"> {phone} </chakra.span>
              {t`raqamiga yuborildi`}
            </Text>
          </VStack>

          <Controller
            name="code"
            control={control}
            rules={{
              // maxLength: 6,
              minLength: 6,
              required: true,
            }}
            render={({ field, fieldState, formState }) => (
              <HStack spacing={2}>
                <PinInput
                  focusBorderColor="premium_dark.1000"
                  placeholder=""
                  errorBorderColor="premium_red.1000"
                  value={field.value}
                  onChange={field.onChange}
                  isInvalid={!!fieldState.error}
                >
                  {new Array(6).fill(null).map((item, index) => {
                    return <PinInputField w={12} h={12} key={index} />
                  })}
                </PinInput>
              </HStack>
            )}
          />

          <Button
            type="submit"
            backgroundColor={
              formState.isValid && !mutation.isLoading ? 'premium_red.1000' : undefined
            }
            variant={'modal'}
            isLoading={mutation.isLoading}
            disabled={!formState.isValid}
            loadingText={t`Submitting`}
          >{t`Submit`}</Button>
        </VStack>
      </form>
    </MotionBox>
  )
}
