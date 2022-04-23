import { createStore, StoreType } from '../../../lib/zustand'

export type Steps = 'phone' | 'sms' | 'name' | 'location'

export type AuthStoreType = {
  step: Steps
  phone?: string
  setStep: (step: Steps) => void
  setPhone: (phone: string) => void
}

const store: StoreType<AuthStoreType> = (set) => ({
  step: 'phone',
  setStep: (step) => set({ step }),
  setPhone: (phone) => set({ phone }),
})

export const useAuthStore = createStore(store)
