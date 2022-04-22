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
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PhoneNumberProps = {}

export const PhoneNumber = (props: PhoneNumberProps) => {
  const { t } = useTranslation()

  return (
    <Box p="40px">
      <VStack align="center" spacing={6}>
        <VStack align="center" spacing={4}>
          <ModalHeader>{t`Sign in`}</ModalHeader>
          <Text variant="modal_sub">
            {t`Telefon raqamingizni tasdiqlash uchun sizga sms orqali kod jo’natiladi.`}
          </Text>
        </VStack>

        <Input />
        <Button variant="modal_gray">{t`Tizimga kirish`}</Button>
        <Box w="100%">
          <Text variant="modal_info">
            {t`"Kirish" tugmasini bosish orqali`}
            <chakra.span color="red.100"> {t`foydalanuvchi shartnomasi`} </chakra.span>
            {t`shartlarini qabul qilaman.`}
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}
