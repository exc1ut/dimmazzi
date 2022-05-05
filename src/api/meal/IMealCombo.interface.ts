import { IMeal } from './IMeal.interface'

export interface IMealCombo {
  thumbnail: string
  title: string
  price: string
  items: IMeal[]
}
