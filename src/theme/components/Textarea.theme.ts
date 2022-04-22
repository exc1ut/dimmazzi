import { none } from 'ramda'

export const Textarea = {
  baseStyle: {},
  variants: {
    outline: {
      height: '132px',
      _focus: {
        border: '2px solid',
        borderColor: 'premium_dark.1000',
        boxShadow: none,
        outline: none,
      },
    },
  },
}
