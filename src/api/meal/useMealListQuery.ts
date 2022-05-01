import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
//import { IRestaurantQuery } from "./IRestaurantQuery.interface";
import { useQuery } from 'react-query'

//fetch meal of restaurant with id
const fetcher = (id: number) => {
  return jwtAxios({
    url: `${API_URL}customer/restaurant_meal/list/?restaurant=${id}`,
    method: 'GET',
  })
}

export const useMealListQuery = (filters: [string & any], id: number) => {
  return useQuery(...filters, () => fetcher(id))
}
