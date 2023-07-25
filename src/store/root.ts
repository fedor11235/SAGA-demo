import { defineStore } from 'pinia'

export const useRootStore = defineStore('root', {
  state: () => ({ 
    loader: true
  }),
})