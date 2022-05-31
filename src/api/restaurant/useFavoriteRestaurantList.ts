import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { useLocation } from '../../stores/useLocation'
import { IPagination } from '../IPagination.interface'
import { queryKeys } from '../queryKeys'
import { IRestaurantQuery } from './IRestaurantQuery.interface'
import { IRestaurantList } from './IRestaurnatList.interface'

const fetcher = async (dto: IRestaurantQuery) => {
  const { data } = await jwtAxios.get<IPagination<IRestaurantList>>(
    '/customer/restaurant/favourite_list/',
    {
      params: dto,
    }
  )
  return data
}

export const useFavoriteRestaurantList = () => {
  const { latitude, longitude } = useLocation()

  return useQuery([queryKeys.favoriteRestaurant, latitude, longitude], () =>
    fetcher({ latitude, longitude })
  )
}
