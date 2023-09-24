import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { TabContext } from '@/components/hooks/TabContext'
import Home from '@/pages/home'
import { ReactPropsType, TabType } from '@/types'

const initTabs: TabType[] = [
  {
    key: 'home',
    label: 'Home',
    disabled: false,
    forceRender: false,
    closeIcon: null, // 在 type="editable-card" 时有效。设置为 null 或 false 时隐藏关闭按钮
    children: <Home />,
  },
]
const TabContextProvider = ({ children }: ReactPropsType) => {
  const [tabs, setTabs] = useState([])
  const [activeKey, setActiveKey] = useState(initTabs[0].key)
  const navigate = useNavigate()

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
        console.log(11111111111)
        navigate('/')
      }
      setTabs(newTabs)
      callBackFun()
    },
    [tabs, activeKey, navigate]
  )
  const providerValue = useMemo(
    () => ({
      tabs,
      activeKey,
      setTabs,
      setActiveKey,
      removeTab,
    }),
    [tabs, activeKey, setTabs, setActiveKey, removeTab]
  )
  return <TabContext.Provider value={providerValue}>{children}</TabContext.Provider>
}

export default TabContextProvider
