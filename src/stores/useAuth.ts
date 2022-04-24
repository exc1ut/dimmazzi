import { createStore, StoreType } from '../lib/zustand'

type AuthType = {
  phone?: string
  isAuthenticated: boolean
  isNewUser?: boolean
}

const store: StoreType<AuthType> = (set) => ({
  isAuthenticated: false,
  setPhone: (phone: string) => set({ phone }),
})

export const useAuth = createStore(store)
