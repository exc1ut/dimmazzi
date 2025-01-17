import { extendTheme, theme } from '@chakra-ui/react'
import { components } from './components.theme'
import { breakPoints } from './breakPoints'
import { colors } from './colors'
import { fonts } from './fonts'

export const chakraTheme = extendTheme({
  ...theme,
  components,
  colors,
  fonts,
  breakPoints,
})

export default chakraTheme
