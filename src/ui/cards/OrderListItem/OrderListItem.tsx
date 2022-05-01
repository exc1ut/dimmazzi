import { BagIcon, ForwardIcon } from "../../../img/icons/Icons";
import { Box, Flex, HStack, VStack, Text } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
import { stat } from "fs";
=======
>>>>>>> d25dbb856460fcb8be6b197211136be736a67569

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type OrderListItemProps = {
  date: string,
  price: number,
  orderId: number,
  status: "finished" | "pending",
}

export const OrderListItem: React.FC<OrderListItemProps> = ({ date, price, orderId, status }) => {
  const { t } = useTranslation();
<<<<<<< HEAD

  const getStatus = React.useMemo(() => ({
    finished: t`finished`,
    pending: t`pending`,
  }), [status])

=======
>>>>>>> d25dbb856460fcb8be6b197211136be736a67569
  return (
    <Box w="100%" borderRadius="0.5rem" bgColor="premium_dark.50" padding=".625rem" boxShadow="0px 1px 2px rgba(20, 38, 73, 0.12)">
      <Flex w="100%" justify="space-between" align="center">
        <HStack spacing={3}>
          <Box boxSize="2.5rem" borderRadius="50%" bgColor="premium_dark.100" padding=".625rem, .75rem, .75rem, .75rem" display="flex" justifyContent="center" alignItems="center">
            <BagIcon />
          </Box>
          <VStack align="start">
            <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem">
              {orderId}
            </Text>
            <Text textTransform="uppercase" color={status === "finished" ? "premium_green.1000" : "premium_orange.1000"} lineHeight="1rem" fontSize=".8rem" fontWeight={600}>
<<<<<<< HEAD
              {getStatus[status]}
=======
              {t(status)}
>>>>>>> d25dbb856460fcb8be6b197211136be736a67569
            </Text>
          </VStack>
        </HStack>
        <HStack spacing=".625rem" align="center">
          <VStack>
            <Text fontSize="1.07rem" fontWeight={600} lineHeight="1.25rem">
              {price}
            </Text>
            <Text color="premium_dark.600" fontSize="0.8rem" lineHeight="1rem">
              {date}
            </Text>
          </VStack>
          <Box boxSize="1.5rem" padding=".375rem, .5rem" display="flex" alignItems="center" justifyContent="center">
            <ForwardIcon />
          </Box>
        </HStack>

      </Flex>
    </Box >
  );
};