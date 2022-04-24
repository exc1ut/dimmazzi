import produce, { Draft } from 'immer'
import create, { GetState, SetState, State, StateCreator, StoreApi, UseBoundStore } from 'zustand'
import { devtools } from 'zustand/middleware'

// Immer middleware
export const immer =
  <T extends State>(
    config: StateCreator<T, (fn: (draft: Draft<T>) => void) => void>
  ): StateCreator<T> =>
  (set, get, api) =>
    config((fn) => set(produce<T>(fn)), get, api)

//Store types
export type StoreImmerType<T extends object = any> = StateCreator<
  T,
  (fn: (draft: Draft<T>) => void) => void
>
export type StoreType<T extends object = any> = StateCreator<T, SetState<T>, GetState<T>, any>

// Store creators
export const createImmerStore = <T extends object>(store: StoreImmerType<T>) =>
  create<T>(devtools(immer(store)))

export const createStore = <T extends object>(store: StoreType<T>) => create<T>(devtools(store))
