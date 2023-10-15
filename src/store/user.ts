import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      loadMenus: true,
      setLoadMenu: (loadMenus) =>
        set(() => {
          console.log('setLoadMenu')
          return { loadMenus }
        }),
    }),
    { name: 'UserStore' }
  )
)
export default useUserStore
