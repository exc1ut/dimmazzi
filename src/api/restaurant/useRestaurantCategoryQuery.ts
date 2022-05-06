import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
import { useQuery } from 'react-query'

const fetcher = (id: number) => {
  return jwtAxios({
    url: `${API_URL}customer/restaurant_category/list/?restaurant=${id}`,
    method: 'GET',
  })
}

export const useRestaurantCategoryQuery = (filters: [string & any], fetchArgs: any, id: number) => {
  return useQuery(...filters, () => fetcher(id))
}
