import { ICartMeal, ICartRestaurant, useCart } from './useCart'
import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils'

const initialState = useCart.getState()

const meals: ICartMeal[] = [
  {
    category: 0,
    id: 0,
    image: 'image_src',
    meal_type: {
      id: 0,
      price: '20',
      quantity: '20',
      type: 'big',
    },
    quantity: 2,
    title: 'sample',
    total_price: 40,
  },
  {
    category: 1,
    id: 1,
    image: 'image_src',
    meal_type: {
      id: 1,
      price: '30',
      quantity: '30',
      type: 'small',
    },
    quantity: 3,
    title: 'sample2',
    total_price: 90,
  },
]

const restaurant: ICartRestaurant = {
  deliveryPrice: 1.23,
  deliveryTime: 2.34,
  preparingTime: '3.44',
  restourantId: 0,
}

describe('useCart', () => {
  it('should initialize', () => {
    const { result } = renderHook(() => useCart())

    expect(result.current).toEqual(initialState)
  })

  it('should add product', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.addMeal(meals[0]!, restaurant)
      result.current.addMeal(meals[1]!, restaurant)
    })

    expect(result.current.meals).toHaveLength(2)
  })

  it('should remove product', () => {
    const { result } = renderHook(() => useCart())
    const mealIdToRemove = meals[0]!.id

    act(() => {
      result.current.removeMeal(mealIdToRemove)
    })

    const foundMeal = result.current.meals.find((v) => v.id === mealIdToRemove)
    expect(foundMeal).toBeUndefined()
  })

  it('increment product count', () => {
    const { result } = renderHook(() => useCart())
    const mealToIncrease = meals[1]!

    act(() => {
      result.current.increaseMealQuantity(mealToIncrease.id)
      result.current.increaseMealQuantity(mealToIncrease.id)
    })

    const increasedMeal = result.current.meals.find((v) => v.id === mealToIncrease.id)
    expect(increasedMeal?.quantity).toBe(mealToIncrease.quantity + 2)
  })

  it('decrement product count', () => {
    const { result } = renderHook(() => useCart())
    const mealToDecrease = meals[1]!

    act(() => {
      result.current.decreaseMealQuantity(mealToDecrease.id)
      result.current.decreaseMealQuantity(mealToDecrease.id)
    })

    const decreasedMeal = result.current.meals.find((v) => v.id === mealToDecrease.id)
    expect(decreasedMeal?.quantity).toBe(mealToDecrease.quantity)
  })

  it('should reset', () => {
    const { result } = renderHook(() => useCart())

    act(() => {
      result.current.reset()
    })

    expect(result.current).toEqual(initialState)
  })
})
