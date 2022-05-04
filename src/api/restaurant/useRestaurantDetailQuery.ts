import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
import { IRestaurantBody, IRestaurantQuery } from './IRestaurantQuery.interface'
import { useQuery } from 'react-query'
import { IPagination } from '../IPagination.interface'

const fetcher = (id: number) => {
  // const query: string = Object.keys(queryParams)
  //   .map((key) => {
  //     let queryR: any = { ...queryParams }
  //     return `${key}=${queryR[key]}`
  //   })
  //   .join('&')

  return jwtAxios.get<IPagination<IRestaurantBody>>(`${API_URL}customer/restaurant/${id}/detail/`)
}

export const useRestaurantDetailQuery = (filters: [string], id: number) => {
  return useQuery(...filters, () => fetcher(id))
}
