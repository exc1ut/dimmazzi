import { useQuery, UseQueryOptions } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { UseQueryOptionsType } from '../../utils/useQueryOptionsType'
import { queryKeys } from '../queryKeys'

export interface RestaurantDetail {
  id: number
  background: Background
  logo: Background
  title: string
  is_open: boolean
  has_delivery: boolean
  average_cooking_time: string
  has_pickup: boolean
  is_favourite: boolean
  rating: string
  distance: number
  additional: Additional
  categories: Category[]
}

export interface Additional {
  approximate_delivery_time: number
  approximate_delivery_price: number
}

export interface Background {
  id: number
  file: string
}

export interface Category {
  id: number
  title: string
}

const fetcher = async (id: number) => {
  const { data } = await jwtAxios.get<RestaurantDetail>(`/customer/restaurant/${id}/detail/`)
  return data
}

export const useRestourantDetail = (id: number) => {
  return useQuery([queryKeys.restaurantDetail, id], () => fetcher(id))
}
