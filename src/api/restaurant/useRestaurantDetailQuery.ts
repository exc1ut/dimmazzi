import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
import { IRestaurantBody, IRestaurantQuery } from './IRestaurantQuery.interface'
import { useQuery } from 'react-query'
import { IPagination } from '../IPagination.interface'
import { IRestaurantList } from './IRestaurnatList.interface'

const fetcher = (id: string) => {
  // const query: string = Object.keys(queryParams)
  //   .map((key) => {
  //     let queryR: any = { ...queryParams }
  //     return `${key}=${queryR[key]}`
  //   })
  //   .join('&')
  let rest_id = parseInt(id)

  return jwtAxios.get<IPagination<IRestaurantList>>(`/customer/restaurant/${rest_id}/detail/`)
}

export const useRestaurantDetailQuery = (filters: [string], id: string) => {
  return useQuery(...filters, () => fetcher(id))
}
