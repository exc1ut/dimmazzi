import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { queryKeys } from '../queryKeys'

export interface MealCombo {
  thumbnail: string
  title: string
  price: string
  items: Meal[]
}

export interface Meal {
  id: number
  title: string
  language: string
  category: number
  image: string
  is_available: boolean
  meal_types: MealType[]
}

export interface MealType {
  id: number
  type: string
  quantity: string
  price: string
}

const fetcher = async (id: number) => {
  const { data } = await jwtAxios.get<Meal>(
    `/customer/restaurant_meal_combo/list/?restaurant=${id}`
  )
  return data
}

export const useMealComboList = (id: number) => {
  return useQuery(queryKeys.maelComboList, () => fetcher(id))
}
