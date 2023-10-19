import { ReactNode, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TabContext } from '@/hooks/useTabContext.ts'

const TabContextProvider = ({ children }: { children: ReactNode }) => {
  const [tabs, setTabs] = useState<TabType[]>([])
  const [activeKey, setActiveKey] = useState('')
  const navigate = useNavigate()

  const addTab = useCallback(
    (tab: TabType) => {
      if (tab) {
        const isSome = tabs.some((sourceTab) => sourceTab.key === tab.key)
        if (!isSome) setTabs([...tabs, tab])
      }
    },
    [tabs]
  )

  const removeTab = useCallback(
    (targetKey: string, callBackFun = () => {}) => {
      const newTabs = tabs.filter((tab) => tab.key !== targetKey)
      if (targetKey === activeKey) {
        const activeTabIndex = tabs.findIndex((tab) => tab.key === activeKey)
        const nextActiveKey = activeTabIndex > 0 ? tabs[activeTabIndex - 1].key : activeKey
        navigate(nextActiveKey)
        setActiveKey(nextActiveKey)
      }
      if (newTabs.length == 0) {
        navigate('/')
      }
      setTabs(newTabs)
      callBackFun()
    },
    [tabs, activeKey, navigate]
  )
  const providerValue: TabContextType = useMemo(
    () => ({
      tabs,
      activeKey,
      addTab,
      setActiveKey,
      removeTab,
    }),
    [tabs, activeKey, addTab, removeTab]
  )
  return <TabContext.Provider value={providerValue}>{children}</TabContext.Provider>
}

export default TabContextProvider
