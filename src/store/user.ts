import { create } from 'zustand'

const useUserStore = create<UserStore>((set) => ({
  loadMenus: true,
  setLoadMenu: (loadMenus) =>
    set(() => {
      console.log('setLoadMenu')
      return { loadMenus }
    }),
}))
export default useUserStore
