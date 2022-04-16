import { baseStyle } from '@chakra-ui/react'
import { Props } from 'framer-motion/types/types'

export const components = {
  Input: {
    baseStyle: {
      field: {
        padding: '12px 16px',
        border: '1px solid dark.10',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeigth: 400,
        color: 'dark.input',
        borderRadius: '20px',
        _placeholder: {
          color: 'gray.lightText',
          fontSize: '16x',
          lineheight: '24px',
          fontWeigth: 400,
        },
      },
    },
    variants: {
      outline: {
        field: {
          height: '48px',
          _focus: {
            outline: 'none',
            borderColor: 'dark.text',
            border: '2px solid',
            boxShadow: 'none',
          },
        },
      },
      box: {
        field: {
          maxLength: '1',
          width: '48px',
          height: '48px',
          padding: '10px 10px',
          borderColor: 'dark.10',
          border: '1px solid',
          _focus: {
            outline: 'none',
            borderColor: 'dark.text',
            border: '2px solid',
            boxShadow: 'none',
          },
        },
      },
    },
  },

  CloseButton: {
    variants: {
      modal: {
        w: '12px',
        h: '12px',
        position: 'absolute',
        right: '22px',
        top: '22px',
        color: 'red.premium',
        _hover: { bg: 'none' },
        _active: { bg: 'none' },
        _focus: {
          boxShadow: 'none',
        },
      },
    },
  },

  Button: {
    variants: {
      modal_gray: {
        width: '100%',
        height: '48px',
        backgroundColor: 'gray.button',
        fontSize: '14px',
        lineheight: '18px',
        fontWeight: '600',
        letterSpacing: '0.25px',
        color: 'white',
        textTransform: 'uppercase',
      },
    },
  },
  Heading: {
    variants: {
      search: {
        fontSize: '18px',
        lineHeight: '24px',
        fontWeigth: 600,
        color: 'dark.text',
      },
      modal: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeigth: 700,
        color: 'dark.text',
      },
    },
  },

  Text: {
    variants: {
      category: {
        fontSize: '14px',
        lineheight: '20px',
        fontWeigth: 400,
        color: 'gray.lightText',
      },
      modal_sub: {
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '24px',
        textAlign: 'center',
        color: 'gray.modalText',
      },
      modal_info: {
        fontSize: '14px',
        fontWeight: '500',
        lineheight: '20px',
        textAlign: 'center',
        color: 'gray.modalText',
      },
      highlighted: (props: { color: string }) => ({
        display: 'inline',
        color: props.color ? props.color : 'dark.text',
      }),
    },
  },
}
