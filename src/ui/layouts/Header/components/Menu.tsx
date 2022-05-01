import { ChevronDownIcon } from '@chakra-ui/icons'
import {
  Button,
  MenuButton,
  Menu as ChakraMenu,
  Center,
  Box,
  Avatar,
  Text,
  HStack,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useCurrentUser } from '../../../../api/user/useCurrentUser'
import { MenuList } from './MenuList'

interface MenuProps {}

export const Menu: React.FC<MenuProps> = ({}) => {
  const { t } = useTranslation()
  const { data, isLoading, isSuccess } = useCurrentUser()

  if (isLoading || !isSuccess) return null

  return (
    <ChakraMenu>
      <MenuButton
        fontWeight={500}
        variant="ghost"
        w={'full'}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        <HStack spacing={2}>
          <Avatar size={'sm'} name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
          <Text>{data.first_name}</Text>
        </HStack>
      </MenuButton>
      <MenuList />
    </ChakraMenu>
  )
}
