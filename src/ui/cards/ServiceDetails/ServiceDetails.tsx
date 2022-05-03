import { CarIcon, CookIcon } from '../../../img/icons/Icons'
import { Flex, Text, HStack, VStack, Icon, Divider, Box } from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type ServiceDetailsProps = {
  icon: React.ReactNode
  title: string
  value: string
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ icon, title, value }) => {
  return (
    <Flex py={1} justify="space-between" align="center" w="100%">
      <HStack spacing={3}>
        {icon}
        <Text fontWeight={500} color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem">
          {title}
        </Text>
      </HStack>
      <Text color={'premium_dark.1000'} fontSize="1.08rem" fontWeight={600} lineHeight="1.25rem">
        {value}
      </Text>
    </Flex>
  )
}
