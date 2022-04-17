import {
  Center,
  ComponentWithAs,
  MenuItem as ChakraMenuItem,
  MenuItemProps as Props,
  chakra,
  Box,
} from '@chakra-ui/react'
import Image from 'next/image'

interface MenuItemProps extends Props {
  imageSrc?: string
}

export const MenuItem: React.FC<MenuItemProps> = ({ imageSrc, children, ...rest }) => {
  return (
    <ChakraMenuItem minH={8} {...rest}>
      <Center justifyContent="flex-start" w={'full'}>
        <Box mr={3}>
          {imageSrc ? (
            <Image src={imageSrc} width={20} height={20} />
          ) : (
            <Box w={'20px'} h={'20px'} />
          )}
        </Box>
        {children}
      </Center>
    </ChakraMenuItem>
  )
}
