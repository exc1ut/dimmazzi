import { AppLoader } from "@/ui/AppComponents/AppLoader";
import { Modal, ModalContent, ModalOverlay, VStack, Text, Button, CloseButton, Box, Spinner } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface ConfirmDeleteProps {
  isOpen: boolean,
  confirmDelete: () => void,
  cancelDelete: () => void,
  handleClose: () => void,
  isFetching: boolean
}

export const ConfirmDelete: FunctionComponent<ConfirmDeleteProps> = ({ isOpen, confirmDelete, cancelDelete, handleClose, isFetching }) => {

  const { t } = useTranslation()

  return (<Modal isOpen={isOpen} onClose={handleClose}>
    <ModalOverlay />

    <ModalContent>
      <CloseButton variant="modal" onClick={cancelDelete} />
      <VStack spacing={4} w="100%" p="1.5rem">
        <Text fontSize="1.5rem" fontWeight={600} mt="1rem">{t`Are you sure to delete address?`}</Text>
        {!isFetching ? <><Button variant="outline" w="100%" onClick={confirmDelete}>{t`Yes`}</Button>
          <Button variant="modal" onClick={cancelDelete}>{t`No`}</Button></> :
          <Box w="100%" h="4rem" justifyContent="center" display="flex"><Spinner color="premium_red.1000" /> </Box>
        }
      </VStack>
    </ModalContent>


  </Modal>);
}

