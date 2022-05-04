import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '@/services/jwtAxios'
import { IRestaurantBody, IRestaurantQuery } from './IRestaurantQuery.interface'
import { useQuery } from 'react-query'
import { IPagination } from '../IPagination.interface'

const fetcher = ({ ...queryParams }: IRestaurantQuery) => {
  const query: string = Object.keys(queryParams)
    .map((key) => {
      let queryR: any = { ...queryParams }
      if (typeof queryR[key] === 'string') queryR[key].replace(/\s/g, '%20')
      return `${key}=${queryR[key]}`
    })
    .join('&')

  return jwtAxios.get<IPagination<IRestaurantBody>>(`${API_URL}customer/restaurant/list/?${query}`)
}

export const useRestaurantListQuery = (filters: string[], fetchArgs: any, options: any) => {
  return useQuery([...filters], () => fetcher(fetchArgs), { ...options })
}
