import * as React from "react";
import { Flex, Text, HStack, VStack, Icon, Divider, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { MoneyIcon } from "../../../img/icons/Icons";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type PaymentDetailsProps = {
  mealCost: number,
  deliveryCost: number,
  totalCost: number,
}

export const PaymentDetails: React.FC<PaymentDetailsProps> = ({ mealCost, deliveryCost, totalCost }) => {
  const { t } = useTranslation();
  return (
    <Box w="100%" padding="0 0.125rem">
      <VStack spacing={4} w="100%">
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={3}>
            <Icon as={MoneyIcon} />
            <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem" >{t`meal_cost`}</Text>
          </HStack>
          <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem">{`${mealCost}`}</Text>
        </Flex>
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={3}>
            <Icon as={MoneyIcon} />
            <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem">{t`delivery_cost`}</Text>
          </HStack>
          <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem">{`${deliveryCost}`}</Text>
        </Flex>
        <Divider />
        <Flex justify="space-between" align="center" w="100%">
          <HStack spacing={3}>
            <Icon as={MoneyIcon} />
            <Text color="premium_dark.600" fontSize="1rem" lineHeight="1.2rem">{t`delivery`}</Text>
          </HStack>
          <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem">{`${totalCost}`}</Text>
        </Flex>
      </VStack>
    </Box>
  );
};