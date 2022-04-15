import { Box, useMediaQuery } from '@chakra-ui/react'
import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

export const Header = () => {
  const [isLessThanLg] = useMediaQuery('(max-width: 959px)')

  return (
    <Box borderBottomWidth={1} borderColor={'dark.10'} py={4}>
      {isLessThanLg ? <MobileHeader /> : <DesktopHeader />}
    </Box>
  )
}
