import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { IPagination } from '../IPagination.interface'
import { queryKeys } from '../queryKeys'
import { IMealCombo } from './IMealCombo.interface'

const fetcher = async (id: string) => {
  const { data } = await jwtAxios.get<IPagination<IMealCombo>>(
    `/customer/restaurant_meal_combo/list/?restaurant=${id}`
  )
  return data
}

export const useMealComboList = (id: string) => {
  return useQuery(queryKeys.mealComboList, () => fetcher(id))
}
