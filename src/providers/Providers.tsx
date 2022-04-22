import { ChakraProvider } from '@chakra-ui/react'
import NiceModal from '@ebay/nice-modal-react'
import chakraTheme from '../theme/chakraTheme'

export const Providers: React.FC = ({ children }) => {
  return (
    <ChakraProvider theme={chakraTheme}>
      <NiceModal.Provider>{children}</NiceModal.Provider>
    </ChakraProvider>
  )
}
