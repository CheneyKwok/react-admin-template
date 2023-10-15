import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      loadMenus: true,
      setLoadMenu: (loadMenus) =>
        set(() => {
          return { loadMenus }
        }),
    }),
    { name: 'UserStore' }
  )
)
export default useUserStore
