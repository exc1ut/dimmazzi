import * as React from 'react'
import { Flex, Text, HStack, VStack, Icon, Divider, Box, As } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { MoneyIcon, CarIcon, CookIcon } from '../../../img/icons/Icons'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type OrderDetailsListItemProps = {
  type: 'mealCost' | 'cookTime' | 'deliveryTime' | 'deliveryCost' | 'totalCost'
  value: { time?: number; cost?: number }
}

export const OrderDetailsListItem: React.FC<OrderDetailsListItemProps> = ({ type, value }) => {
  const { t } = useTranslation()
  const getTitle = React.useCallback(
    (type: OrderDetailsListItemProps['type']) => {
      switch (type) {
        case 'mealCost':
          return t`meal_cost`
        case 'cookTime':
          return t`cook_time`
        case 'deliveryTime':
          return t`delivery_time`
        case 'deliveryCost':
          return t`delivery_cost`
        case 'totalCost':
          return t`total_cost`
        default:
          t`total_cost`
      }
    },
    [type]
  )

  const getIcon = React.useCallback(
    (type: OrderDetailsListItemProps['type']) => {
      if (type.includes('Cost')) {
        return MoneyIcon as As<any>
      } else if (type === 'deliveryTime') {
        return CarIcon as As<any>
      } else {
        return CookIcon as As<any>
      }
    },
    [type]
  )

  const getValue = React.useCallback(
    (type: OrderDetailsListItemProps['type']) => {
      if (type.includes('Cost')) {
        return `${value.cost}`
      } else if (type === 'deliveryTime') {
        return `${value.time}${t`min`} / ${value.cost}`
      } else {
        return `${value.time} ${t`min`}`
      }
    },
    [type]
  )

  return (
    <Box w="100%" padding="0 0.125rem">
      <Flex justify="space-between" w="100%">
        <HStack spacing={3}>
          <Icon as={getIcon(type)} />
          <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem">{t`meal_cost`}</Text>
        </HStack>
        <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem" textAlign={'end'}>
          {getValue(type)}
        </Text>
      </Flex>
    </Box>
  )
}
