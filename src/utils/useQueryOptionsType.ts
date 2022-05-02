import { UseQueryOptions } from 'react-query'

export type UseQueryOptionsType<T> = Omit<UseQueryOptions<T, any, any, any>, 'queryKey' | 'queryFn'>
