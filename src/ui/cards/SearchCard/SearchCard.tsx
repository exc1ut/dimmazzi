import { Box, Heading, HStack, Image, Skeleton, VStack, Text } from "@chakra-ui/react";
import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type SearchCardProps = {
  img?: string;
}

export const SearchCard = ({ img }: SearchCardProps) => {
  const imgDefault = 'https://icons.iconarchive.com/icons/dakirby309/simply-styled/256/Minecraft-icon.png';

  return (
    <Box p="16px">
      <HStack spacing={4} justify="flex-start">
        <Box
          borderRadius={4}
        >
          <Image
            boxSize={16}
            src={img || imgDefault}
            fallback={<Skeleton boxSize={16} />}
          />
        </Box>
        <Box>
          <VStack justify="center" spacing={0} align="flex-start">
            <Heading variant="search">Restoran nomi</Heading>
            <Text
              variant="category"
            >kategoriasi</Text>
          </VStack>
        </Box>
      </HStack>

    </Box>
  );
};