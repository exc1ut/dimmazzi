import { createStore, StoreType } from '../lib/zustand'
import { setAuthToken } from '../services/jwtAxios'
import { useLocation } from './useLocation'

type AuthType = {
  phone?: string
  isAuthenticated: boolean
  setAuth: (bool: boolean) => void
  logout: () => void
}

const store: StoreType<AuthType> = (set) => ({
  isAuthenticated: false,
  setAuth: (bool) => set({ isAuthenticated: bool }),
  setPhone: (phone: string) => set({ phone }),
  logout() {
    const resetLocation = useLocation.getState().reset
    set(initialState)
    setAuthToken()
    resetLocation()
  },
})

export const useAuth = createStore(store)

var initialState = useAuth.getState()
