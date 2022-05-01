import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
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
          right: -12,
        }
      default:
        return {
          left: -12,
        }
    }
  }, [direction])

  return (
    <IconButton
      // {...rest}
      aria-label="arrow"
      icon={direction === 'left' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
      position="absolute"
      borderRadius={'full'}
      top={'45%'}
      translateY="0%"
      backgroundColor="premium_dark.1000"
      colorScheme={'premium_dark'}
      _focus={{
        borderColor: 'none',
      }}
      _hover={{
        backgroundColor: 'premium_dark.800',
      }}
      onClick={rest.onClick}
      {...props}
    />
  )
}
