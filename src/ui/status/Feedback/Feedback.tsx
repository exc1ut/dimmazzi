import { Box, Modal, ModalCloseButton, ModalContent, ModalOverlay, VStack, Text, HStack, Icon, Textarea, Button } from "@chakra-ui/react";
// import * as React from "react";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
import { StarIcon } from "../../../img/icons/Icons";
import { useState } from "react";


// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type FeedbackProps = {}

export const Feedback: React.FC<FeedbackProps> = ({ }) => {
  const { t } = useTranslation();
  const RATINGS = [1, 2, 3, 4, 5];
  const [currentRating, setCurrentRating] = useState<number>(0);
  return (
    <Modal isOpen={true} onClose={() => console.log('close')}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <Box p='40px'>
          <VStack spacing={6} align="center">
            <Image src='/assets/images/logo.svg' width='200px' height='63px' />
            <VStack spacing={3}>
              <Text variant="title">{t`Tajribangizni baholang`}</Text>
              <HStack spacing={5}>
                {RATINGS.map((item) => {
                  return <Box onClick={() => { currentRating === 1 ? setCurrentRating(0) : setCurrentRating(item) }}><StarIcon color={item <= currentRating ? '#FFA505' : '#727C91'} /></Box>
                })}
              </HStack>
            </VStack>
            <Textarea placeholder='Here is a sample placeholder' resize="none" />
            <Button variant="modal">JONATSH</Button>
          </VStack>
        </Box>
      </ModalContent>
    </Modal>
  );
};