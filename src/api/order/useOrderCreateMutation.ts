import { useMutation } from 'react-query'
import jwtAxios from '../../services/jwtAxios'

export interface IOrderCreate {
  address: number
  payment_type: string
  delivery_type: string
  preparation_time: number
  restaurant: number
  delivery_price: number
  meal_total_price: number
  total_price: number
  products: IOrderProduct[]
}

export interface IOrderProduct {
  meal: number | null
  meal_type: number
  combo: number | null
  quantity: number
  price: number
}

export interface OrderCreateResponse {
  order_id: number
  link: string
}

export const useOrderCreateMutation = () => {
  return useMutation((data: IOrderCreate) =>
    jwtAxios.post<OrderCreateResponse>('/order/create/', data)
  )
}
