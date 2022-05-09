import { Button, ButtonProps } from '@chakra-ui/react'
import { t } from 'i18next'
import { useTranslation } from 'react-i18next'
import { isValid } from 'zod'

interface SubmitButtonProps extends ButtonProps {
  isValid: boolean
  isLoading: boolean
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ isValid, isLoading, ...rest }) => {
  const { t } = useTranslation()
  return (
    <Button
      type="submit"
      backgroundColor={isValid && !isLoading ? 'premium_red.1000' : undefined}
      variant={'modal'}
      isLoading={isLoading}
      disabled={!isValid}
      loadingText={t`Submitting`}
      {...rest}
    />
  )
}
