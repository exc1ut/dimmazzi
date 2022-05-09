import { SetState } from 'zustand'
import { persist } from 'zustand/middleware'
import { createStore, StoreType } from '../lib/zustand'

export interface ILocation {
  place_name?: string
  latitude?: string
  longitude?: string
  setStore: SetState<ILocation>
  reset: () => void
}

const store: StoreType<ILocation> = (set) => ({
  setStore: set,
  reset: () => set({ latitude: undefined, longitude: undefined, place_name: undefined }),
})

export const useLocation = createStore(
  persist(store, {
    name: 'location-persist',
  })
)
