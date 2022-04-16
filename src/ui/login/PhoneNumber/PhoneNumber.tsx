import * as React from "react";
import {
  chakra,
  Box, Modal, ModalContent, ModalHeader, ModalOverlay, VStack,
  Text,
  Input,
  Button,
  ModalCloseButton,

} from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type PhoneNumberProps = {}

export const PhoneNumber = (props: PhoneNumberProps) => {
  return (
    <>
      <Box>
        <Modal isOpen={true} onClose={() => console.log("close")}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <Box p="40px">
              <VStack align="center" spacing={6}>
                <VStack align="center" spacing={4}>
                  <ModalHeader>
                    Tizimga kirish
                  </ModalHeader>
                  <Text variant="modal_sub">
                    Telefon raqamingizni tasdiqlash uchun sizga sms orqali kod jo’natiladi.
                  </Text>

                </VStack>

                <Input />
                <Button variant="modal_gray">Tizimga kirish</Button>
                <Box w="100%">
                  <Text
                    variant="modal_info"
                  >
                    "Kirish" tugmasini bosish orqali
                    <chakra.span color="red.100"> foydalanuvchi shartnomasi </chakra.span>
                    shartlarini qabul qilaman.</Text>
                </Box>

              </VStack>
            </Box>
          </ModalContent>
        </Modal>


      </Box >


    </>
  );
};