import * as React from "react";
import { Modal, VStack, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, Icon, Box, Button } from "@chakra-ui/react";
import { AcceptIcon } from "../../../img/icons/Icons";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type StatusAcceptedProps = {}

export const StatusAccepted: React.FC<StatusAcceptedProps> = ({ }) => {
  return (
    <Modal isOpen={true} onClose={() => console.log('close')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <VStack spacing={6} align="center">
            <Icon as={AcceptIcon} />
            <ModalBody>
              Buyurtmangiz qabul qilindi.
              Kurer buyurtmangizni
              belgilangan vaqtda manzilingizga yetkazib beradi.
            </ModalBody>
            <VStack spacing={4} w="100%">
              <Button variant="modal" bgColor='premium_red.1000' w="100%">Yana buyurtma qilish</Button>
              <Button variant="outline" w="100%" h="48px">Buyurtmani kuzatib borish</Button>
            </VStack>

          </VStack>


        </Box>
      </ModalContent>

    </Modal>
  );
};