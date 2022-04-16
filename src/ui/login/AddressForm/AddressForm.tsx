import * as React from "react";
import { Modal, ModalOverlay, ModalContent, CloseButton, VStack, Heading, Button, Input, Box, ModalCloseButton } from '@chakra-ui/react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type AddressFormProps = {}

export const AddressForm = (props: AddressFormProps) => {

  const inputs = ['Xonadon', 'Kocha', 'Orientir']

  return (
    <Modal isOpen={true} onClose={() => console.log('close')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p="40px">
          <VStack spacing={6} align="center">
            <Heading variant="modal">
              Manzilni kiriting
            </Heading>
            <Input placeholder={inputs[0]} />
            <Input placeholder={inputs[1]} />
            <Input placeholder={inputs[2]} />
            <Button variant="modal_gray">Tasdiqlash</Button>

          </VStack>
        </Box>
      </ModalContent>

    </Modal>
  );
};