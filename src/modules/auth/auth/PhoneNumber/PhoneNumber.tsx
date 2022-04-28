import * as React from 'react'
import {
  chakra,
  Box,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
  Input,
  Button,
  ModalCloseButton,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Controller, useForm } from 'react-hook-form'
import { resolver, SendCode } from './phone.validation'
import InputMask from 'react-input-mask'
import { MaskField } from 'react-mask-field'
import { register } from '@ebay/nice-modal-react'
import styled from '@emotion/styled'
import { useAuthStore } from '../useAuthStore'
import { useAuth } from '../../../../stores/useAuth'
import { useSmsMutation } from '../../../../api/auth/useSmsMutation'
import { motion } from 'framer-motion'
import { MotionBox } from '../MotionBox'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PhoneNumberProps = {}

export const PhoneNumber = (props: PhoneNumberProps) => {
  const { t } = useTranslation()
  const { register, handleSubmit, control, formState } = useForm<SendCode>({
    resolver,
    mode: 'onChange',
  })
  const mutation = useSmsMutation()
  const { setStep, setPhone } = useAuthStore()

  const onSubmit = handleSubmit((data) => {
    const phone = data.phone_number.replaceAll(' ', '').replace('+', '')
    mutation.mutate(phone, {
      onSuccess: () => {
        setStep('sms')
        setPhone(data.phone_number)
      },
    })
  })

  return (
    <MotionBox p="40px">
      <form onSubmit={onSubmit}>
        <VStack align="center" spacing={6}>
          <VStack align="center" spacing={4}>
            <ModalHeader>{t`Tizimga kirish`}</ModalHeader>
            <Text variant="modal_sub">
              {t`Telefon raqamingizni tasdiqlash uchun sizga sms orqali kod jo’natiladi.`}
            </Text>
          </VStack>

          <Controller
            control={control}
            name="phone_number"
            render={({ field, fieldState, formState }) => (
              <FormControl isInvalid={!!fieldState.error}>
                <InputMask
                  value={field.value}
                  maskPlaceholder={null}
                  onChange={field.onChange}
                  mask="+\9\98 99 999 99 99"
                >
                  <Input fontWeight={500} placeholder="+998 XX XXX XX XX" type="tel" />
                </InputMask>
              </FormControl>
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
          >{t`Tizimga kirish`}</Button>

          <Box w="100%">
            <Text variant="modal_info">
              {t`"Kirish" tugmasini bosish orqali`}
              <chakra.span color="premium_red.1000"> {t`foydalanuvchi shartnomasi`} </chakra.span>
              {t`shartlarini qabul qilaman.`}
            </Text>
          </Box>
        </VStack>
      </form>
    </MotionBox>
  )
}
