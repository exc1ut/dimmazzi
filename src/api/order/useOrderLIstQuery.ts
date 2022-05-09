import { useQuery } from 'react-query'
import jwtAxios from '../../services/jwtAxios'
import { IPagination } from '../IPagination.interface'
import { queryKeys } from '../queryKeys'

export interface IOrderList {
  id: number
  status: string
  created_at: string
  total_price: string
}

export type OrderType = 'pick_up' | 'delivery'

const fetcher = async (type: OrderType) => {
  const { data } = await jwtAxios.get<IPagination<IOrderList>>(`/order/?delivery_type=${type}`)
  return data
}

export const useOrderListQuery = (type: OrderType) => {
  return useQuery([queryKeys.orderList, type], () => fetcher(type))
}
