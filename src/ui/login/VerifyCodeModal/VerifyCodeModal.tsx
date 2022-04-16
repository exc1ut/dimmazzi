
import { chakra, Modal, CloseButton, ModalContent, ModalOverlay, Box, Button, Text, VStack, Input, HStack, ModalCloseButton, ModalHeader, ChakraProvider } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type VerifyCodeModalProps = {}

export const VerifyCodeModal = (props: VerifyCodeModalProps) => {
  const inputPoxes = [1, 2, 3, 4, 5, 6];
  return (
    <Box>
      <Modal isOpen={true} onClose={() => console.log("close")}>
        <ModalOverlay />
        <ModalContent sx={{
          padding: "0px",
          // width: "416px",

        }}>
          {/* <CloseButton variant="modal" /> */}
          <ModalCloseButton />
          <Box p="40px">
            <VStack align="center" spacing={6}>
              <VStack align="center" spacing={4}>
                <ModalHeader>
                  Tizimga kirish
                </ModalHeader>
                <Text variant="modal_sub">
                  Tasdiqlash kodi <chakra.span color="dark.100">+998 99 987 65 43 </chakra.span>raqamiga yuborildi
                </Text>
              </VStack>
              <HStack spacing={2}>
                {inputPoxes.map((item, index) => {
                  return <Input key={index} variant="box" type="number" />
                })}
              </HStack>
              <Button variant="modal_gray">Tastiqlash</Button>

            </VStack>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};