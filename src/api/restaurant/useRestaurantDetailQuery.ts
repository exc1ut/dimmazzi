import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
import { IRestaurantQuery } from './IRestaurantQuery.interface'
import { useQuery } from 'react-query'

const fetcher = (id: number) => {
  // const query: string = Object.keys(queryParams)
  //   .map((key) => {
  //     let queryR: any = { ...queryParams }
  //     return `${key}=${queryR[key]}`
  //   })
  //   .join('&')

  return jwtAxios({
    url: `${API_URL}customer/restaurant/${id}/detail/`,
    method: 'GET',
  })
}

export const useRestaurantDetailQuery = (filters: [string & any], id: number) => {
  return useQuery(...filters, () => fetcher(id))
}