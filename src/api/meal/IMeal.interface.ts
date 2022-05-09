import { IMealType } from './IMealType.interface'

export interface IMeal {
  id: number
  title: string
  language: string
  category: number
  image: string
  is_available: boolean
  meal_types: IMealType[]
}
