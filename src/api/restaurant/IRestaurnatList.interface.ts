export interface IRestaurantList {
  id: number
  background: Background
  logo: Background
  title: string
  is_open: boolean
  has_delivery: boolean
  is_favourite: boolean
  rating: string
  distance: number
  additional: Additional
}

export interface Additional {
  approximate_delivery_time: number
  approximate_delivery_price: number
}

export interface Background {
  id: number
  file: string
}
