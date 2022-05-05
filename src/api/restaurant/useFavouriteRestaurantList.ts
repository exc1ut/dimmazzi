import jwtAxios from '@/services/jwtAxios'
import { useQuery } from 'react-query'
import { queryKeys } from '../queryKeys'
import { IRestaurantListDto } from './useRestaurantListQuery'

const fetcher = (dto: IRestaurantListDto) => {
  return jwtAxios.get(`customer/restaurant/favourite_list/`, { params: dto })
}

const useFavouriteRestaurantList = (dto: IRestaurantListDto) => {
  return useQuery([queryKeys.favouriteRestaurantList], () =>
    fetcher({ latitude: dto.latitude, longitude: dto.longitude })
  )
}
