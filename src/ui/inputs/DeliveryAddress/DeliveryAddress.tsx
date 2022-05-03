import { ArrowDown, ArrowUp, NavIcon } from '../../../img/icons/Icons'
import {
  Box,
  Button,
  Collapse,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { IAddress } from '../../../api/address/IAddress.interface'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type DeliveryAddressProps = {
  addresses: IAddress[]
  onAddressChange: (address: IAddress) => void
  onAddressAdd: () => void
}

export const DeliveryAddress: React.FC<DeliveryAddressProps> = ({
  addresses,
  onAddressChange,
  onAddressAdd,
}) => {
  const [address, setAddress] = React.useState(addresses.at(-1))
  const { isOpen, onToggle } = useDisclosure()
  const { t } = useTranslation()

  const handleAddressChange = (item: IAddress) => {
    setAddress(item)
    onAddressChange(item)
  }
  return (
    <Box w="full">
      <Box w="100%" h="3.8rem" bgColor="premium_dark.50" p="0.625rem 1rem">
        <Flex cursor={'pointer'} onClick={onToggle} justify="space-between" align="center">
          <HStack spacing={3}>
            <NavIcon color="#E7E9EC" />
            <Text fontSize="1.0625rem" lineHeight="1.25rem">
              {address?.place_name}
            </Text>
          </HStack>
          <Box sx={{ cursor: 'pointer' }}>
            <Icon as={isOpen ? ArrowUp : ArrowDown} />
          </Box>
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity={false}>
        <VStack boxShadow="0px 1px 2px rgba(20, 38, 73, 0.12)" padding="10px 10px 10px 16px">
          {addresses.map((item, index) => {
            return (
              <Box
                cursor={'pointer'}
                onClick={() => handleAddressChange(item)}
                w="100%"
                h="3.8rem"
                p="0.625rem 0px"
              >
                <HStack spacing={3}>
                  <NavIcon
                    color={item.id === address?.id ? '#D13406' : '#E7E9EC'}
                    fill={item === address ? '#ffffff' : '#727C91'}
                  />
                  <Text fontSize="1.0625rem" lineHeight="1.25rem">
                    {item.place_name}
                  </Text>
                </HStack>
              </Box>
            )
          })}
          <Button
            variant="outline"
            w="100%"
            h="2.75rem"
            color="premium_red.1000"
            onClick={onAddressAdd}
          >{t`add_new_address`}</Button>
        </VStack>
      </Collapse>
    </Box>
  )
}
