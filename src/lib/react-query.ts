import { createStandaloneToast, theme } from '@chakra-ui/react'
import { QueryClient } from 'react-query'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
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
      cacheTime: 1000 * 60 * 60 * 1,
      refetchOnMount: process.env.NEXT_PUBLIC_BASE_ENV === 'prod',
      refetchOnWindowFocus: process.env.NEXT_PUBLIC_BASE_ENV === 'prod',
      refetchOnReconnect: process.env.NEXT_PUBLIC_BASE_ENV === 'prod',
      queryFn: defaultQueryFn,
    },
    mutations: {
      onError: onErrorFn,
    },
  },
})

if (typeof window !== 'undefined') {
  const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })

  persistQueryClient({
    queryClient,
    persistor: localStoragePersistor,
  })
}
