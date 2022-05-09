import { API_URL } from '@/config/constants/api.constants'
import jwtAxios from '@/services/jwtAxios'
import { useMutation, useQueryClient } from 'react-query'
import { IMutataionOptions } from '../IMutationOptions'

const fetcher = <V>(id: V) => {
  return jwtAxios.post(`/customer/favourite_restaurant/create_delete/`, {
    restaurant: id,
  })
}

export const useAddToFavourite = <T>(query_key: string, options: T) => {
  const queryClient = useQueryClient()
  return useMutation((variables: { id: number }) => fetcher(variables.id), {
    ...options,
    onSuccess: () => {
      queryClient.invalidateQueries(query_key)
    },
  })
}
