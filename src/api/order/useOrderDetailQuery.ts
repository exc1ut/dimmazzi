import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { queryKeys } from '../queryKeys'

export type OrderStatus = 'pending' | 'processing' | 'ready' | 'finished'
export interface IOrderDetail {
  id: number
  address: Address
  payment_type: string
  delivery_type: string
  preparation_time: number
  delivery_price: number
  meal_total_price: string
  total_price: string
  status: OrderStatus
  products: Product[]
}

export interface Address {
  id: number
  place_name: string
  latitude: string
  longitude: string
}

export interface Product {
  id: number
  meal: Meal
  quantity: number
  price: number
}

export interface Meal {
  id: number
  name: string
  image: string
}

const fetcher = async (id: number) => {
  const { data } = await jwtAxios.get<IOrderDetail>(`/order/${id}/`)
  return data
}

export const useOrderDetailQuery = (id: number) => {
  return useQuery([queryKeys.orderDetail, id], () => fetcher(id), {
    refetchInterval: 60 * 1000,
  })
}
