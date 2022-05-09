import jwtAxios from '../../services/jwtAxios'
import { useMutation } from 'react-query'
import { API_URL } from '../../config/constants/api.constants'

export const useAddRestaurantToFavouriteMutation = () => {
  return useMutation((id: number) =>
    jwtAxios.post('/customer/favourite_restaurant/create_delete/', {
      restaurant: id,
    })
  )
}
