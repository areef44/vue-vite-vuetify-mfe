import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    message: 'Hello from host app!'
  }),
  actions: {
    increment() {
      this.count++
    },
    updateMessage(newMessage :any) {
      this.message = newMessage
    },
    decrement() {
      this.count--
    },
  }
})