import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
//import { IRestaurantQuery } from "./IRestaurantQuery.interface";
import { useQuery } from 'react-query'
import { queryKeys } from '../queryKeys'
import { IPagination } from '../IPagination.interface'
import { IMeal } from './IMeal.interface'
import { UseQueryOptionsType } from '../../utils/useQueryOptionsType'

export interface IMealListDto {
  category?: number
  restaurant?: number
}

//fetch meal of restaurant with id
const fetcher = async (dto: IMealListDto) => {
  const { data } = await jwtAxios.get<IPagination<IMeal>>('/customer/restaurant_meal/list/', {
    params: dto,
  })
  return data
}

export const useMealListQuery = (dto: IMealListDto, options?: UseQueryOptionsType<any>) => {
  return useQuery([queryKeys.mealList, dto], () => fetcher(dto), options)
}
