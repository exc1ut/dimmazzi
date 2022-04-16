
import { Modal, CloseButton, ModalContent, ModalOverlay, Box, Button, Text, Heading, VStack, Input, HStack } from "@chakra-ui/react";
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
          width: "416px",

        }}>
          <CloseButton variant="modal" />
          <Box p="40px">
            <VStack align="center" spacing={6}>
              <VStack align="center" spacing={4}>
                <Heading variant="modal">
                  Tizimga kirish
                </Heading>
                <Text variant="modal_sub">
                  Tasdiqlash kodi <Text variant="highlighted">+998 99 987 65 43 </Text>raqamiga yuborildi
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