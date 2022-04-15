import { Badge, Box, HStack, Image, Text } from '@chakra-ui/react'

import { useTranslation } from 'react-i18next'

interface CartProps {
  count: number
}

export const Cart: React.FC<CartProps> = ({ count }) => {
  const { t } = useTranslation()

  return (
    <HStack h={'full'} justifyContent={'center'} spacing={2}>
      <Image src="/assets/images/cart.svg" width={30} height={30} />
      <HStack spacing={1}>
        <Text color={'dark.90'} fontSize={'md'} fontWeight={500}>{t`Savat`}</Text>
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          fontSize={12}
          borderRadius={15}
          height={5}
          width={5}
          fontWeight={500}
          color={'white'}
          bg={'red.100'}
          m={0}
          p={0}
          transform={'translateY(-8px)'}
        >
          {count}
        </Box>
      </HStack>
    </HStack>
  )
}
