import { extendTheme, theme } from '@chakra-ui/react'

import { breakPoints } from './breakPoints'
import { colors } from './colors'
import { fonts } from './fonts'

export const chakraTheme = extendTheme({
  ...theme,
  colors,
  fonts,
  breakPoints,
})
