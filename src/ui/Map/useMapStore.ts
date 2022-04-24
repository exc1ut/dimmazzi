import { tryCatch } from 'ramda'
import { createStore, StoreType } from '../../lib/zustand'
import { getCurrentLocation } from '../../utils/getCurrentLocation'

type Position = google.maps.LatLng | google.maps.LatLngLiteral

export type MapStore = {
  zoom: number
  position: Position
  location?: Position
  setZoom: (num: number) => void
  setPosition: (position: Position) => void
  increase: () => void
  decrease: () => void
  setCurrentPosition: (cb?: () => void) => void
  setLocation: (position: Position) => void
  reset: () => void
}

const store: StoreType<MapStore> = (set, get) => ({
  zoom: 15,
  position: {
    lat: 41.328443,
    lng: 69.242346,
  },
  reset: () => set({}),
  setZoom: (zoom) => set({ zoom }),
  setPosition: (position) => set({ position }),
  increase: () => {
    if (get().zoom < 22) set((state) => ({ zoom: state.zoom + 1 }))
  },
  decrease: () => {
    if (get().zoom > 0) set((state) => ({ zoom: state.zoom - 1 }))
  },
  setCurrentPosition: async (cb) => {
    const coordinate = await getCurrentLocation()
    set({
      location: {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
      },
      position: {
        lat: coordinate.latitude,
        lng: coordinate.longitude,
      },
    })
    cb?.()
  },
  setLocation: (position) => set({ location: position }),
})

export const useMapStore = createStore(store)
