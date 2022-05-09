import { Badge, Box, HStack, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

import { useTranslation } from 'react-i18next'

interface CartProps {
  count: number
}

export const Cart: React.FC<CartProps> = ({ count }) => {
  const { t } = useTranslation()

  return (
    <Link href={'/cart'}>
      <HStack
        cursor={'pointer'}
        _hover={{ color: 'premium_red.1000' }}
        as={'a'}
        h={'full'}
        justifyContent={'center'}
        spacing={2}
      >
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
            bg={'premium_red.1000'}
            m={0}
            p={0}
            transform={'translateY(-8px)'}
          >
            {count}
          </Box>
        </HStack>
      </HStack>
    </Link>
  )
}
