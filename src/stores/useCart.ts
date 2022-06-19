import produce from 'immer'

import { persist } from 'zustand/middleware'
import { IMealType } from '../api/meal/IMealType.interface'
import { createStore, StoreType } from '../lib/zustand'
import { createStandaloneToast } from '@chakra-ui/react'
import chakraTheme from '../theme/chakraTheme'
import i18n from '../lib/i18n'

const toast = createStandaloneToast({
  theme: chakraTheme,
})

const { t } = i18n

// Todo handle same product
export interface ICartMeal {
  id: number
  title: string
  category: number
  image: string
  meal_type: IMealType
  total_price: number
  quantity: number
}

export interface ICartCombo {
  id: number
  title: string
  price: number
  total_price: number
  quantity: number
  image: string
}

export interface ICartRestaurant {
  restourantId: number
  preparingTime: string
  deliveryTime: number
  deliveryPrice: number
}

export interface ICart {
  type: 'pick_up' | 'delivery'
  meals: ICartMeal[]
  combos: ICartCombo[]
  restourantId?: number
  preparingTime: string
  deliveryTime: number
  deliveryPrice: number
  addMeal: (meal: ICartMeal, restaurant: ICartRestaurant) => void
  changeType: (type: 'pick_up' | 'delivery') => void
  removeMeal: (mealId: number) => void
  increaseMealQuantity: (mealId: number) => void
  decreaseMealQuantity: (mealId: number) => void
  reset: () => void
}

const store: StoreType<ICart> = (set, get) => ({
  type: 'delivery',
  deliveryPrice: 12,
  deliveryTime: 12,
  meals: [],
  combos: [],
  preparingTime: '',
  addMeal: (meal, { deliveryPrice, deliveryTime, preparingTime, restourantId }: ICartRestaurant) =>
    set(
      produce<ICart>((state) => {
        const currentRestaurantId = get().restourantId

        if (!currentRestaurantId || restourantId === currentRestaurantId) {
          const existingMealIndex = get().meals.findIndex((v) => v.id === meal.id)
          if (existingMealIndex > -1) {
            state.meals[existingMealIndex] = meal
          } else {
            state.meals.push(meal)
            state.deliveryPrice = deliveryPrice
            state.deliveryTime = deliveryTime
            state.preparingTime = preparingTime
            state.restourantId = restourantId
          }
        } else {
          toast({
            title: t`Error while adding to card`,
            description: t`You can add meals only from a single restaurant!`,
            status: 'error',
          })
        }
      })
    ),
  removeMeal(mealId) {
    const filteredMeals = get().meals.filter((meal) => meal.id !== mealId)
    set((state) => ({ ...state, meals: filteredMeals }))
    const meals = get().meals
    const combos = get().combos
    if (meals.length === 0 && combos.length === 0) {
      get().reset()
    }
  },
  increaseMealQuantity(mealId) {
    set(
      produce<ICart>((state) => {
        const mealIndex = get().meals.findIndex((v) => v.id === mealId)
        state.meals[mealIndex]!.quantity++
        state.meals[mealIndex]!.total_price += +state.meals[mealIndex]!.meal_type.price
      })
    )
  },
  decreaseMealQuantity(mealId) {
    set(
      produce<ICart>((state) => {
        const mealIndex = get().meals.findIndex((v) => v.id === mealId)
        const meal = get().meals[mealIndex]!
        if (meal.quantity > 1) {
          state.meals[mealIndex]!.quantity--
          state.meals[mealIndex]!.total_price -= +state.meals[mealIndex]!.meal_type.price
        } else {
          const filtered = get().meals.filter((v) => v.id !== mealId)
          state.meals = filtered
        }
      })
    )
    const meals = get().meals
    const combos = get().combos
    if (meals.length === 0 && combos.length === 0) {
      get().reset()
    }
  },
  changeType(type) {
    set({ type })
  },
  reset() {
    set(initialState, true)
  },
})

export const totalMealCostSelector = (state: ICart) => {
  const totalMealCost = state.meals.reduce((prev, cur) => (prev += cur.total_price), 0)
  const totalComboCost = state.combos.reduce((prev, cur) => (prev += cur.total_price), 0)
  return totalComboCost + totalMealCost
}

export const totalMealSelector = (state: ICart) => {
  const totalMeal = state.meals.reduce((prev) => (prev += 1), 0)
  const totalCombo = state.combos.reduce((prev) => (prev += 1), 0)
  return totalCombo + totalMeal
}

export const useCart = createStore(
  persist(store, {
    name: 'cart-persist',
  })
)

var initialState = useCart.getState()
