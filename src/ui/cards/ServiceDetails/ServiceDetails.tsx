import { CarIcon, CookIcon } from "../../../img/icons/Icons";
import { Flex, Text, HStack, VStack, Icon, Divider, Box } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type ServiceDetailsProps = {
  cookTime: number,
  deliveryPrice: number,
  deliveryTime: number,
}

export const ServiceDetails: React.FC<ServiceDetailsProps> = ({ cookTime, deliveryPrice, deliveryTime }) => {
  const { t } = useTranslation();
  return (
    <Box w="100%" padding="0 0.125rem">
      <VStack spacing={4} w="100%">
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={3}>
            <Icon as={CookIcon} />
            <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem" >{t`avarage_time_to_cook`}</Text>
          </HStack>
          <Text fontSize="1.08rem" fontWeight={600} lineHeight="1.25rem">{`${cookTime} ${t`minutes`}`}</Text>
        </Flex>
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={3}>
            <Icon as={CarIcon} />
            <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem">{t`delivery`}</Text>
          </HStack>
          <Text fontSize="1.08rem" fontWeight={600} lineHeight="1.25rem">{`${deliveryTime} ${t`minutes`} / ${deliveryPrice}`}</Text>
        </Flex>
        <Divider />
      </VStack>
    </Box>
  );
};