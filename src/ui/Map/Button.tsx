import { IconButton, IconButtonProps } from '@chakra-ui/react'

interface ButtonProps extends IconButtonProps {}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <IconButton
      size={'md'}
      colorScheme="premium_red"
      variant="ghost"
      backgroundColor="white"
      color="premium_red.1000"
      shadow={'md'}
      {...props}
    />
  )
}
