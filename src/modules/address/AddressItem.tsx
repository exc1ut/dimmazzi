import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Center, Flex, HStack, IconButton, Text } from '@chakra-ui/react'
import { Location } from '../../img/icons/Icons'

interface AddressItemProps {
  name: string
  onEdit: () => void
  onDelete: () => void
}

export const AddressItem: React.FC<AddressItemProps> = ({ name, onDelete, onEdit }) => {
  return (
    <Flex w="full" py={2} px={4} justifyContent={'space-between'}>
      <HStack>
        <Center borderRadius={'full'} backgroundColor={'premium_dark.100'} p={2}>
          <Location color="premium_dark.600" boxSize={'1.5em'} />
        </Center>
        <Text fontWeight={500} fontSize="lg">
          {name}
        </Text>
      </HStack>
      <HStack>
        <IconButton
          aria-label="edit"
          icon={<EditIcon />}
          size="md"
          variant={'ghost'}
          color="premium_dark.600"
          borderRadius={'full'}
          onClick={onEdit}
        />
        <IconButton
          aria-label="edit"
          icon={<DeleteIcon />}
          size="md"
          variant={'ghost'}
          color="premium_red.1000"
          borderRadius={'full'}
          onClick={onDelete}
        />
      </HStack>
    </Flex>
  )
}
