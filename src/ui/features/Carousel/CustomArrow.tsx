import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { useMemo } from 'react'
import { CustomArrowProps as CProps } from 'react-slick'

interface CustomArrowProps extends Omit<IconButtonProps, 'onClick'>, CProps {
  direction: 'right' | 'left'
}

export const CustomArrow: React.FC<CustomArrowProps> = ({ style, direction, ...rest }) => {
  const props = useMemo(() => {
    switch (direction) {
      case 'right':
        return {
          right: -16,
        }
      default:
        return {
          left: -16,
        }
    }
  }, [direction])

  return (
    <IconButton
      // {...rest}
      aria-label="arrow"
      icon={direction === 'left' ? <ArrowBackIcon /> : <ArrowForwardIcon />}
      position="absolute"
      fontSize={'1.4em'}
      borderRadius={'full'}
      top={'45%'}
      translateY="0%"
      backgroundColor="premium_dark.1000"
      colorScheme={'premium_dark'}
      _focus={{
        borderColor: 'none',
      }}
      _active={{
        bgColor: 'premium_dark.600',
      }}
      _hover={{
        backgroundColor: 'premium_dark.800',
      }}
      onClick={rest.onClick}
      {...props}
    />
  )
}
