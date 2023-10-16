import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const useUserStore = create<UserStore>()(
  devtools(
    (set) => ({
      needLoadMenus: true,
        setNeedLoadMenus: (needLoadMenus) =>
        set(() => {
          return { needLoadMenus }
        }),
    }),
    { name: 'UserStore' }
  )
)
export default useUserStore
