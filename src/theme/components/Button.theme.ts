import { ComponentStyleConfig } from '@chakra-ui/react'

export const Button: ComponentStyleConfig = {
  variants: {
    modal: (props: any) => ({
      width: '100%',
      height: '48px',
      backgroundColor: props.bgColor || 'premium_dark.400',
      fontSize: '14px',
      lineheight: '18px',
      fontWeight: '600',
      letterSpacing: '0.25px',
      color: 'white',
      textTransform: 'uppercase',
      _focus: {
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
      },
      _hover: {
        _disabled: {
          bgColor: 'premium_dark.800',
        },
      },
      _disabled: {
        bgColor: 'premium_dark.800',
      },
    }),
    slider_right: {
      position: 'absolute',
      right: '-4.5rem',
      top: '30%',
      zIndex: 100,
      width: '3rem',
      maxW: '3rem',
      height: '3rem',
      borderRadius: '50%',
      bgColor: 'premium_dark.1000',
    },
    slider_left: {
      position: 'absolute',
      left: '-4.5rem',
      top: '30%',
      zIndex: 100,
      width: '3rem',
      maxW: '3rem',
      height: '3rem',
      borderRadius: '50%',
      bgColor: 'premium_dark.1000',
    },
    solid: {
      bg: 'premium_red.1000',
      color: 'white',
      _focus: {
        boxShadow: 'none',
      },
      _hover: {
        background: 'premium_red.900',
      },
      _active: {
        background: 'premium_red.700',
      },
    },
    outline: {
      border: '1.5px solid',
      borderColor: 'premium_red.1000',
      color: 'premium_red.1000',
      backgroundColor: 'white',
      _focus: {
        boxShadow: 'none',
      },
    },
  },
  baseStyle: {
    fontWeight: 600,
    _focus: {
      boxShadow: '0 0 1px 3px rgba(209, 52, 6, .30), 0 1px 1px rgba(0, 0, 0, .15)',
    },
  },

  defaultProps: {
    // colorScheme: 'premium_red',
  },
}
