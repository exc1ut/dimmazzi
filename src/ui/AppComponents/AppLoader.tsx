import { Box, Center, Spinner } from '@chakra-ui/react'
import { Loader } from './Loader'

interface AppLoaderProps {
  h?: string
}

export const AppLoader: React.FC<AppLoaderProps> = ({ h }) => {
  return (
    <Box w="full" h={h || "60vh"}>
      <Loader />
    </Box>
  )
}
