import { create } from 'zustand'

interface UserStoreTYpe {
  token: string
  setToken: (token: string) => void
}

const useUserStore = create<UserStoreTYpe>(() => ({
  token: localStorage.getItem('token'),
  setToken: (token) => localStorage.setItem('token', token),
}))

export default useUserStore
