import { extendTheme } from '@chakra-ui/react'
import { customColors } from './colors.theme'
import { customComponetntStyles } from './components.theme'

export const chakraTheme = extendTheme({
  components: {
    ...customComponetntStyles,
  },
  colors: {
    ...customColors,
  },
})
