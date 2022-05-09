import { createStore, StoreType } from '../../../lib/zustand'

export type Steps = 'phone' | 'sms' | 'name' | 'location'

export type AuthStoreType = {
  step: Steps
  phone?: string
  setStep: (step: Steps) => void
  setPhone: (phone: string) => void
  reset: () => void
}

const store: StoreType<AuthStoreType> = (set) => ({
  step: 'phone',
  setStep: (step) => set({ step }),
  setPhone: (phone) => set({ phone }),
  reset() {
    set(initialState)
  },
})

export const useAuthStore = createStore(store)

var initialState = useAuthStore.getState()
