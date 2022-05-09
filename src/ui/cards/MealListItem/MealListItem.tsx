import { NextImage } from '../../NextImage'
import { Box, Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import * as React from 'react'
import CountChange from './CountChangeButton'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type MealListItemProps = {
  mealName: string
  imgSrc: string
  price: number
  type: 'cart' | 'order'
  quantity: number
  handleDecrease?: () => void
  handleIncrease?: () => void
}

export const MealListItem: React.FC<MealListItemProps> = ({
  mealName,
  imgSrc,
  price,
  quantity,
  type,
  handleDecrease,
  handleIncrease,
}) => {
  return (
    <Box paddingRight=".2rem" w="100%">
      <VStack spacing={2} w="100%">
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={4}>
            <Box w="3rem" h="3rem">
              <NextImage src={imgSrc} objectFit="cover" w={'full'} h={'full'} borderRadius="50%" />
            </Box>
            <VStack spacing={1} align="start">
              <Text
                fontSize="0.8125rem"
                fontWeight={600}
                color="premium_dark.600"
                lineHeight="1rem"
              >
                {mealName}
              </Text>
              <Text fontSize="1.05rem" fontWeight={600} lineHeight="1.3rem">
                {price}
              </Text>
            </VStack>
          </HStack>
          {type === 'order' ? (
            <Text fontWeight={600}>{quantity}</Text>
          ) : (
            <HStack spacing={4}>
              <CountChange onClick={handleDecrease} operator="-" />
              <Box fontWeight={700} fontSize="1.2rem">
                {quantity}
              </Box>
              <CountChange onClick={handleIncrease} operator="+" />
            </HStack>
          )}
        </Flex>
        <Divider />
      </VStack>
    </Box>
  )
}
