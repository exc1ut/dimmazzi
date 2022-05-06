import { NextImage } from '../../NextImage'
import { Avatar, Box, Button, Text, Flex, Heading, HStack, Icon, useBreakpointValue, useMediaQuery, VStack, chakra } from "@chakra-ui/react";
import * as React from "react";
import { HeartOutlined, SmallStarIcon, Tick, CircleIcon } from '../../../img/icons/Icons';
import { useTranslation } from 'react-i18next';


// eslint-disable-next-line @typescript-eslint/no-unused-vars 
export type RestourantProps = {
  imgSrc?: string,
  status: 'open' | 'closed',
  logoSrc?: string,
  title: string,
  rating: number,
  distance: number,
  cookTime: number
}

export const Restourant: React.FC<RestourantProps> = ({ imgSrc, status, logoSrc, title, rating, distance, cookTime }) => {
  const { t } = useTranslation();
  const size = useBreakpointValue({ base: 'xl', sm: 'xl', md: 'xl', lg: '2xl', xl: "2xl" });
  const bottom = useBreakpointValue({ base: '-40px', sm: '-44px', md: '-52px' });
  const left = useBreakpointValue({ base: '35%', sm: '35%', md: '40px' });
  //const [small] = useMediaQuery('(max-width: 512px)');  
  return (
    <VStack spacing="76">
      <Box w="100%" height='280px' position='relative' borderRadius='0.5rem'>
        <Avatar
          position='absolute'
          src={logoSrc}
          zIndex={100}
          // w='120px'
          // h='120px'
          size={size}
          bottom={bottom}
          left={left}
        />
        <Box position="absolute" zIndex={100} right="0px" h="100%" w={["100%", "auto"]}>
          <Flex direction={["row-reverse", "column"]} align={["flex-start", "flex-end"]} height="100%" w={["100%", "auto"]} padding={[".8rem", "1.5rem"]} justify="space-between">
            <Box boxSize={12} borderRadius="50%" bgColor="white" display="flex" justifyContent="center" alignItems="center">
              <Icon as={HeartOutlined} color="red" w="1.3em" h="1.5em" />
            </Box>

            <Button bgColor="premium_green.1000">{t(status)}</Button>
          </Flex>

        </Box>
        <NextImage
          filter="brightness(0.6)"
          src={imgSrc || "/assets/images/Restaurant.jpg"}
          w={"full"} h={'full'} placeholder='blur'
          objectFit="cover" borderRadius="0.5rem" />
      </Box>
      <Box padding={['0', '0px 2.5rem']} w="100%">
        <VStack>
          <Flex flexDirection={['column', 'row']} justify="space-between" align="flex-start" w="100%">
            <VStack spacing={4} align="flex-start">
              <Heading fontSize="1.8rem" lineHeight="2.5rem">{t(title)}</Heading>
              <HStack fontWeight={600} color="premium_dark.300" w="100%" lineHeight="1.5rem" spacing={1}>
                <Box boxSize={6}><SmallStarIcon /> </Box>
                <HStack />
                <Text>{rating}</Text>
                <CircleIcon boxSize={1.5} color="premium_dark.300" />
                <Text>{distance}km</Text>
                <HStack />
              </HStack>
              <Box borderRadius="0.5rem" padding="0.5rem 1rem" boxShadow="0px .125rem .05rem rgba(20, 38, 73, 0.15)">
                <Text fontSize="0.875rem" fontWeight={500} lineHeight="1.25rem" color="premium_dark.600">Taom tayyorlash o’rtacha vaqti:
                  <chakra.span fontWeight={700} color="premium_dark.1000">{cookTime} daqiqa </chakra.span></Text>
              </Box>
            </VStack>

            <Flex w={["100%", "auto"]} direction={["column", "row"]} marginTop={['1.5rem', '0']} >
              <Button variant="outline" borderColor="premium_green.1000" color="premium_green.1000">
                <Icon as={Tick} />
                <Text fontSize={["0.8rem", "1em"]} textTransform="uppercase" marginLeft=".8rem "> {t`Olib ketish`} </Text>
              </Button>
              <Button
                marginTop={["0.5rem ", "0"]}
                marginLeft={["0", "0.5rem"]}
                fontSize={["0.8rem", ".8rem"]}
                variant="outline"
                borderColor="premium_green.1000"
                color="premium_green.1000">
                <Icon as={Tick} />
                <Text textTransform="uppercase" marginLeft=".5rem "> Yetkazib berish </Text>

              </Button>
            </Flex>
          </Flex>
        </VStack>

      </Box>
    </VStack>

  );
};