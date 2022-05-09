import { createStandaloneToast, theme } from '@chakra-ui/react'
import { QueryClient } from 'react-query'
import jwtAxios from '../services/jwtAxios'
import chakraTheme from '../theme/chakraTheme'
import i18n from './i18n'

const toast = createStandaloneToast({ theme: chakraTheme })
const { t } = i18n

export const defaultQueryFn = async ({ queryKey }: any) => {
  const [_key, params] = queryKey

  const { data } = await jwtAxios.get(_key, {
    params: params,
  })

  return data
}

export const onErrorFn = async (error: unknown, variables: unknown, context: unknown) => {
  if (error instanceof Error) {
    const message = error.message.replace('Error: ', '')

    toast({
      title: t`Request error`,
      description: message,
      status: 'error',
      duration: 5000,
      isClosable: true,
    })
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      queryFn: defaultQueryFn,
    },
    mutations: {
      onError: onErrorFn,
    },
  },
})
