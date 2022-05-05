import jwtAxios from '@/services/jwtAxios'
import { useQuery } from 'react-query'
import { IPagination } from '../IPagination.interface'
import { queryKeys } from '../queryKeys'
import { IRestaurantList } from './IRestaurnatList.interface'
export interface IRestaurantListDto {
  latitude?: string
  longitude?: string
  search?: string
  recommended?: 'true' | 'false'
}

const fetcher = async (dto: IRestaurantListDto) => {
  const { data } = await jwtAxios.get<IPagination<IRestaurantList>>('/customer/restaurant/list/', {
    params: dto,
  })
  return data
}

export const useRestaurantListQuery = (dto: IRestaurantListDto) => {
  return useQuery([queryKeys.restaurantList, dto], () => fetcher(dto))
}
