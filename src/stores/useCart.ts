import produce from 'immer'
import { DRAFT_STATE } from 'immer/dist/internal'
import { SetState } from 'zustand'
import { persist } from 'zustand/middleware'
import { createImmerStore, createStore, StoreImmerType, StoreType } from '../lib/zustand'

// Todo handle same product
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
  changeType: (type: 'pickup' | 'delivery') => void
  removeMeal: (mealId: number) => void
  increaseMealQuantity: (mealId: number) => void
  decreaseMealQuantity: (mealId: number) => void
  reset: () => void
}

const dummyData: MealType[] = [
  {
    image: 'https://static.onecms.io/wp-content/uploads/sites/44/2019/08/26231113/5783153.jpg',
    mealId: 1,
    name: 'Stake',
    price: 25000,
    quantity: 1,
  },
  {
    image:
      'https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg',
    mealId: 2,
    name: 'Burger',
    price: 35000,
    quantity: 2,
  },
  {
    image: 'https://static.toiimg.com/photo/76942221.cms',
    mealId: 3,
    name: 'Hot-dog',
    price: 45000,
    quantity: 2,
  },
]

const store: StoreType<ICart> = (set, get) => ({
  type: 'delivery',
  deliveryPrice: 12,
  deliveryTime: 12,
  meals: dummyData,
  preparingTime: '',
  addMeal: (meal) =>
    set(
      produce<ICart>((state) => {
        state.meals.push(meal)
      })
    ),
  removeMeal(mealId) {
    set(
      produce<ICart>((state) => {
        const filteredMeals = get().meals.filter((meal) => meal.mealId !== mealId)
        state.meals = filteredMeals
      })
    )
  },
  increaseMealQuantity(mealId) {
    set(
      produce<ICart>((state) => {
        const mealIndex = get().meals.findIndex((v) => v.mealId === mealId)
        state.meals[mealIndex]!.quantity++
      })
    )
  },
  decreaseMealQuantity(mealId) {
    set(
      produce<ICart>((state) => {
        const mealIndex = get().meals.findIndex((v) => v.mealId === mealId)
        const meal = state.meals[mealIndex]!
        if (meal.quantity > 1) {
          state.meals[mealIndex]!.quantity--
        }
      })
    )
  },
  changeType(type) {
    set({ type })
  },
  reset() {
    set({
      type: 'delivery',
      deliveryPrice: 0,
      deliveryTime: 0,
      meals: [],
      preparingTime: '',
    })
  },
})

export const totalMealCostSelector = (state: ICart) => {
  const totalCost = state.meals.reduce((prev, cur) => (prev += cur.price * cur.quantity), 0)
  return totalCost
}

export const totalMealSelector = (state: ICart) => {
  return state.meals.reduce((prev) => (prev += 1), 0)
}

export const useCart = createStore(
  persist(store, {
    name: 'cart-persist',
  })
)
