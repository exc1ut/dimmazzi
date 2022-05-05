import { IMeal } from '../api/meal/IMeal.interface'

export const mockProduct: IMeal = {
  id: 1,
  title: 'Шашлык',
  language: 'ru',
  category: 1,
  image: 'http://45.12.214.152/media/418513-svetik.2022-04-18.06-34-07.jpg',
  is_available: true,
  meal_types: [
    {
      id: 1,
      type: 'portion',
      quantity: '1.0',
      price: '5000.00',
    },
  ],
}
