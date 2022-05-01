import { MoneyIcon } from "../../../img/icons/Icons";
import { HStack, Box, VStack, Heading, Text, useMediaQuery, Stack } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type PaymentOptionsProps = {}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({ }) => {
  const { t } = useTranslation();
<<<<<<< HEAD
  //const [small] = useMediaQuery("(max-width: 512px)");
  return (
    <Stack direction={["column", "row"]} spacing={4} align={["center", "flex-start"]}>
=======
  const [small] = useMediaQuery("(max-width: 512px)");
  return (
    <Stack direction={small ? "column" : "row"} spacing={4} align={small ? "center" : "flex-start"}>
>>>>>>> d25dbb856460fcb8be6b197211136be736a67569
      <Box cursor="pointer" w="11.25rem" h="7.7rem" padding="0.625rem 1rem" borderRadius="0.5rem" border="1.5px solid" borderColor="premium_red.1000">
        <VStack spacing="5px" align="start">
          <MoneyIcon color="#D13406" />
          <Heading size="sm" fontWeight={600} color="premium_red.1000">{t`pay_with_cash`}</Heading>
          <Text color="premium_dark.600" fontSize="0.825rem" lineHeight="0.98rem">
            {t`To’lov O’zbek so’mida
            kurer tomonidan 
            qabul qilinadi.`}
          </Text>
        </VStack>
      </Box>
      <Box cursor="pointer" w="11.25rem" h="7.7rem" padding="0.625rem 1rem" borderRadius="0.5rem" bgColor="premium_dark.100">
        <VStack spacing="5px" align="start">
          <MoneyIcon />
          <Heading size="sm" fontWeight={500}>{t`pay_with_card`}</Heading>
          <Text color="premium_dark.600" fontSize="0.825rem" lineHeight="0.98rem">
            {t`Toʻlov UzCard bank kartalari orqali qabul qilinadi.`}
          </Text>
        </VStack>
      </Box>
    </Stack>
  );
};