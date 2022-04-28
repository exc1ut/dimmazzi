import { ArrowDown, ArrowUp, NavIcon } from "../../../img/icons/Icons";
import { Box, Button, Collapse, Flex, HStack, Icon, Text, useDisclosure, VStack } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type DeliveryAddressProps = {
  addresses: [string]
}

export const DeliveryAddress: React.FC<DeliveryAddressProps> = ({ addresses }) => {

  const [address, setAddress] = React.useState("Урганч шахар, Мустакиллик куча, 6");
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation();
  return (
    <Box w="50%">
      <Box w="100%" h="3.8rem" bgColor="premium_dark.50" p="0.625rem 1rem">
        <Flex justify="space-between" align="center">
          <HStack spacing={3}>
            <NavIcon color="#E7E9EC" />
            <Text fontSize="1.0625rem" lineHeight="1.25rem">{address}</Text>
          </HStack>
          <Box sx={{ cursor: 'pointer' }} onClick={onToggle}>
            <Icon as={isOpen ? ArrowUp : ArrowDown} />
          </Box>
        </Flex>
      </Box>
      <Collapse in={isOpen} animateOpacity={false}>
        <VStack boxShadow="0px 1px 2px rgba(20, 38, 73, 0.12)" padding="10px 10px 10px 16px">
          {addresses.map((item, index) => {
            return (
              <Box w="100%" h="3.8rem" p="0.625rem 0px">
                <HStack spacing={3}>
                  <NavIcon color={item === address ? "#D13406" : "#E7E9EC"} fill={item === address ? "#ffffff" : "#727C91"} />
                  <Text fontSize="1.0625rem" lineHeight="1.25rem">{item}</Text>
                </HStack>
              </Box>
            );
          })}
          <Button variant="outline" w="100%" h="2.75rem" color="premium_red.1000">{t`add_new_address`}</Button>
        </VStack>
      </Collapse>
    </Box>
  );
};