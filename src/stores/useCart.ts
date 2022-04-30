import { SetState } from 'zustand'
import { persist } from 'zustand/middleware'
import { createStore, StoreType } from '../lib/zustand'

export type MealType = {
  mealId: number
  image: string
  name: string
  price: number
  quantity: number
}

export interface ICart {
  type: 'pickup' | 'delivery'
  meals: MealType[]
  restourantId?: number
  preparingTime: string
  deliveryTime: number
  deliveryPrice: number
  addMeal: (meal: MealType) => void
  removeMeal: (mealId: number) => void
  increaseMealQuantity: (mealId: number) => void
  decreaseMealQuantity: (mealId: number) => void
}

const initialState = {
  type: 'delivery',
  deliveryPrice: 0,
  deliveryTime: 0,
  meals: [],
  preparingTime: '',
}

const store: StoreType<ICart> = (set) => ({
  ...initialState,
})

export const useLocation = createStore(
  persist(store, {
    name: 'location-persist',
  })
)
