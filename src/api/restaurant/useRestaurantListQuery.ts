import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '@/services/jwtAxios'
import { IRestaurantQuery } from './IRestaurantQuery.interface'
import { useQuery } from 'react-query'

const fetcher = ({ ...queryParams }: IRestaurantQuery) => {
  const query: string = Object.keys(queryParams)
    .map((key) => {
      let queryR: any = { ...queryParams }
      return `${key}=${queryR[key]}`
    })
    .join('&')

  return jwtAxios({
    url: `${API_URL}customer/restaurant/list/?${query}`,
    method: 'GET',
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  })
}

export const useRestaurantListQuery = (filters: [string & any], fetchArgs: any, options: any) => {
  return useQuery([...filters], () => fetcher(fetchArgs), { ...options })
}
