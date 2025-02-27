import type { restaurantStatusList, dietList } from './constants'

export type Restaurant = {
  id: string
  name: string
  address: string
  website: string
  status: Status
  diet?: Diet
}

export type Dish = {
  id: string
  name: string
  status: Status
  diet?: Diet
}

type Status = typeof restaurantStatusList[number]

// type Status = 'Want to Try' | 'Recommended' | 'Do Not Recommend'

// type Diet = 'Vegetarian' | 'Pescatarian' | 'Keto' | ''
type Diet = typeof dietList[number]
