import { createStore, StoreType } from '../../../lib/zustand'

export type Steps = 'phone' | 'sms' | 'name' | 'location'

export type AuthStoreType = {
  step: Steps
}

const store: StoreType<AuthStoreType> = (set) => ({
  step: 'phone',
  setStep: (step: Steps) => set({ step }),
})

export const useAuthStore = createStore(store)
