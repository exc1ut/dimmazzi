import { Box, Center, Spinner } from '@chakra-ui/react'
import { Loader } from './Loader'

interface AppLoaderProps {}

export const AppLoader: React.FC<AppLoaderProps> = ({}) => {
  return (
    <Box w="full" h="60vh">
      <Loader />
    </Box>
  )
}
