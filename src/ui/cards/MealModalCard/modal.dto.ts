import { IMealType } from '../../../api/meal/IMealType.interface'

export interface MealModalDto {
  quantity: number
  totalPrice: number
  type: IMealType
}
