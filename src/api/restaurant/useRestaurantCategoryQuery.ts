import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
import { useQuery } from 'react-query'
import { IPagination } from '../IPagination.interface'
import { IRestaurantCategory } from './IRestaurantQuery.interface'

const fetcher = (id: number) => {
  return jwtAxios.get<IPagination<IRestaurantCategory>>(
    `${API_URL}customer/restaurant_category/list/?restaurant=${id}`
  )
}

export const useRestaurantCategoryQuery = (filters: [string & any], fetchArgs: any, id: number) => {
  return useQuery(...filters, () => fetcher(id))
}
