import jwtAxios from '../../services/jwtAxios'
import { useMutation } from 'react-query'
import { API_URL } from '../../config/constants/api.constants'

const fetcher = (id: number) => {
  return jwtAxios({
    method: 'POST',
    url: `${API_URL}customer/favourite_restaurant/create_delete/`,
    data: {
      restaurant: id,
    },
  })
}

export const useAddRestaurantToFavouriteMutation = (id: number) => {
  return useMutation(() => fetcher(id))
}
