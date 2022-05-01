import { Spinner } from '@chakra-ui/react'

interface AppLoaderProps {}

export const AppLoader: React.FC<AppLoaderProps> = ({}) => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="premium_dark.400"
      color="premium_red.1000"
      size="xl"
    />
  )
}
