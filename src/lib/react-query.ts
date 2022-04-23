import { QueryClient } from 'react-query'
import jwtAxios from '../services/jwtAxios'

export const defaultQueryFn = async ({ queryKey }: any) => {
  const [_key, params] = queryKey

  const { data } = await jwtAxios.get(_key, {
    params: params,
  })

  return data
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      queryFn: defaultQueryFn,
    },
  },
})
