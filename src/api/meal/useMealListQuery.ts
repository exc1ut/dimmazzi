import { API_URL } from '../../config/constants/api.constants'
import jwtAxios from '../../services/jwtAxios'
//import { IRestaurantQuery } from "./IRestaurantQuery.interface";
import { useQuery } from 'react-query'
import { queryKeys } from '../queryKeys'

export interface IMealListDto {
  category?: number
  restaurant?: number
}

//fetch meal of restaurant with id
const fetcher = async (dto: IMealListDto) => {
  const { data } = await jwtAxios.get('/customer/restaurant_meal/list/', {
    params: dto,
  })
  return data
}

export const useMealListQuery = (dto: IMealListDto) => {
  return useQuery([queryKeys.mealList, dto], () => fetcher(dto))
}
