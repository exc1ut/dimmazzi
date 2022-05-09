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
  ModalProps,
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { AddressValidation, resolver } from './Address.validation'
import { useTranslation } from 'react-i18next'
import { DevTool } from '@hookform/devtools'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type AddressFormProps = Omit<ModalProps, 'children'> & {
  onSubmit: (data: AddressValidation) => void
}

export const AddressForm = (props: AddressFormProps) => {
  const { register, handleSubmit, control, formState } = useForm<AddressValidation>({
    resolver,
  })
  const values = useBreakpointValue({ sm: 'full', md: 'md' })
  const { t } = useTranslation()
  return (
    <Modal {...props} size={values}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <form onSubmit={handleSubmit(props.onSubmit)}>
            <VStack spacing={6} align="center">
              <ModalHeader>{t`Manzilni kiriting`}</ModalHeader>
              <Input
                isInvalid={!!formState.errors.home}
                {...register('home')}
                placeholder={t`Home`}
              />
              <Input
                isInvalid={!!formState.errors.street}
                {...register('street')}
                placeholder={t`Street`}
              />
              <Input
                isInvalid={!!formState.errors.approximateLocation}
                {...register('approximateLocation')}
                placeholder={t`Approximate location`}
              />
              <Button type="submit" variant="modal">{t`Submit`}</Button>
              <DevTool control={control} />
            </VStack>
          </form>
        </Box>
      </ModalContent>
    </Modal>
  )
}
