export interface IRestaurantQuery {
  longtitude: number
  latitude: number
  search?: string
  recommended?: boolean
}

export interface IRestaurantBody {
  id: number
  background: {
    id: number
    file: string
  }
  logo: {
    id: number
    file: string
  }
  title: string
  is_open: boolean
  has_delivery: boolean
  is_favourite: boolean
  rating: number
  distance: number
  additional: {
    approximate_delivery_time: number
    approximate_delivery_price: number
  }
}

export interface IRestaurantCategory {
  id: number
  title: string
  item_count: number
}
