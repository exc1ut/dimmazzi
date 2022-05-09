import { ChakraProvider } from '@chakra-ui/react'
import NiceModal from '@ebay/nice-modal-react'
import { QueryClientProvider } from 'react-query'
import { queryClient } from '../lib/react-query'
import chakraTheme from '../theme/chakraTheme'
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from './AuthProvider'

export const Providers: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChakraProvider theme={chakraTheme}>
          <NiceModal.Provider>{children}</NiceModal.Provider>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </AuthProvider>
    </QueryClientProvider>
  )
}
