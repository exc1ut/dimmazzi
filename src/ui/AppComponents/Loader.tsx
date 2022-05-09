import { Center, Spinner } from '@chakra-ui/react'

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <Center h="full">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="premium_dark.400"
        color="premium_red.1000"
        size="xl"
      />
    </Center>
  )
}
