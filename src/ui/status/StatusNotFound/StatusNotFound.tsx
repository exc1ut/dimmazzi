import { RejectIcon } from "../../../img/icons/Icons";
import { Modal, VStack, ModalOverlay, ModalCloseButton, ModalBody, ModalContent, Icon, Box, Button } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type StatusNotFoundProps = {}

export const StatusNotFound: React.FC<StatusNotFoundProps> = ({ }) => {
  return (
    <Modal isOpen={true} onClose={() => console.log('close')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <VStack spacing={6} align="center">
            <Icon as={RejectIcon} />
            <ModalBody>
              Afsuski, bu restoran ayni damda mijozlarga hizmat ko’rsatmayapti.
            </ModalBody>
            <Button variant="outline" w="100%" h="48px">Orqaga</Button>
          </VStack>


        </Box>
      </ModalContent>

    </Modal>
  );
};