import { createStore, StoreType } from '../../../lib/zustand'

// export type Steps = 'phone' | 'sms' | 'name' | 'location'

export type MobileStoreType = {
  search: string
  setSearch: (search: string) => void
  reset: () => void
}

const store: StoreType<MobileStoreType> = (set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  reset: () => {
    set(initialState)
  },
})

export const useMobileStore = createStore(store)

var initialState = useMobileStore.getState()
