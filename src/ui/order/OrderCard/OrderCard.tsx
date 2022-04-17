import { Box, Modal, ModalCloseButton, ModalContent, ModalHeader, VStack, Image, ModalOverlay } from "@chakra-ui/react";
import * as React from "react";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type OrderCardProps = {
  imgSourse?: string;
}

export const OrderCard = ({ imgSourse }: OrderCardProps) => {
  const { t } = useTranslation()

  return (
    <Modal isOpen={true} onClose={() => console.log('closed')}>

      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <VStack spacing={6} align="center">
            <ModalHeader>
              {t`order_card_modal_header`}
            </ModalHeader>
            <Image src={imgSourse || '/assets/images/Burger.jpg'} />

          </VStack>


        </Box>

      </ModalContent>
    </Modal>
  );
};