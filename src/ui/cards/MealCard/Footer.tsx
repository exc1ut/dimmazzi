import { AddIcon } from '@chakra-ui/icons'
import { Box, HStack, IconButton, Text } from '@chakra-ui/react'

interface FooterProps {
  title: string
  price: number
  onAdd: () => void
}

export const Footer: React.FC<FooterProps> = ({ onAdd, price, title }) => {
  return (
    <Box w={'full'} p={4}>
      <HStack>
        <Text fontSize={'1em'} fontWeight={500} color="premium_dark.700">
          {title}
        </Text>
      </HStack>
      <HStack py={1} alignItems="center" justifyContent="space-between">
        <Text verticalAlign={'baseline'} fontSize={'1.3em'} fontWeight={'700'}>
          {price}
        </Text>
        <IconButton colorScheme="premium_red" size={'sm'} aria-label="add" icon={<AddIcon />} />
      </HStack>
    </Box>
  )
}
