import { createContext, useContext } from 'react'

import { TabContextType } from '@/types'

const defaultTabContext: TabContextType = {
  tabs: [],
  activeKey: '',
  setActiveKey: () => {},
  setTabs: () => {},
  removeTab: () => {},
}

export const TabContext = createContext(defaultTabContext)

const useTabContext = () => {
  const context = useContext(TabContext)
  if (context === undefined) {
    throw new Error('tab context is undefined')
  }
  return context
}
export default useTabContext
