import { Center, Spinner } from '@chakra-ui/react'
import Lottie from 'lottie-react-web'
import loader from './loader.json'

export const Loader: React.FC = ({}) => {
  return (
    <Center h="full">
      <Lottie options={{ animationData: loader, loop: true }} height="10rem" />
    </Center>
  )
}
