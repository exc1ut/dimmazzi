import { MoneyIcon } from '../../../img/icons/Icons'
import { HStack, Box, VStack, Heading, Text, useMediaQuery, Stack, Icon } from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type PaymentOptionsProps = {
  isActive?: boolean
  onClick: () => void
  title: string
  description: string
  icon: any
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  isActive,
  onClick,
  description,
  title,
  children,
  icon,
}) => {
  const { t } = useTranslation()

  const activeColor = isActive ? 'premium_red.1000' : 'premium_dark.600'

  return (
    <Box
      cursor="pointer"
      w="11.25rem"
      h="7.7rem"
      padding={4}
      borderRadius="0.5rem"
      border="1.5px solid"
      borderColor={isActive ? 'premium_red.1000' : '#F3F4F5'}
      bgColor={!isActive ? '#F3F4F5' : undefined}
      onClick={onClick}
    >
      <VStack spacing="5px" align="start">
        <MoneyIcon color={isActive ? '#D13406' : undefined} />
        <Heading size="sm" fontWeight={600} color={activeColor}>
          {title}
        </Heading>
        <Text color="premium_dark.600" fontSize="0.825rem" lineHeight="0.98rem">
          {description}
        </Text>
      </VStack>
    </Box>
  )
}
