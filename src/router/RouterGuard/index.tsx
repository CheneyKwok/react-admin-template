import { PropsWithChildren, ReactNode, useCallback, useEffect, useMemo, useState } from 'react'
import { notification } from 'antd'
import { useLocation } from 'react-router-dom'

import Loading from '@/components/Loading.tsx'
import useRouter from '@/hooks/useRouter.ts'
import useRouteStore from '@/store/route.ts'
import useUserStore from '@/store/user.ts'
import { searchIndexRoute, searchRoute } from '@/utils/public'
import { getToken } from '@/utils/token'

type RouterGuardNext = (options?: (RouterOptions & { replace?: boolean }) | string) => void

type RouterGuardBeforeEach = (
  path: string,
  route: RouteRecord | undefined,
  next: RouterGuardNext,
  userStore: UserStore,
  routeStore: RouteStore
) => void | Promise<void>

const wrapperPath = (path: string, routes: RouteRecord[]) => {
  console.log('>>>>>>routes', routes)
  // '/'的path路由到首页
  if (path === '/') {
    const indexRoute = searchIndexRoute(routes)
    if (indexRoute?.path) path = indexRoute.path
  }
  return path
}

const loadMenus = async (
  path: string,
  next: RouterGuardNext,
  userStore: UserStore,
  routeStore: RouteStore
) => {
  try {
    await routeStore.loadMenuRoutes()
    userStore.setLoadMenu(false)
    // next({path, replace: true})
    console.log('+++++++++++++++++++++++++++++++++++')
    next()
  } catch (e) {
    notification.error({
      message: '路由菜单加载失败',
      description: '您可以尝试刷新浏览器，或者联系管理员',
    })
    next({
      path: '/500',
      replace: true,
    })
  }
}

const beforeEach: RouterGuardBeforeEach = async (path, route, next, userStore, routeStore) => {
  if (path === '/') {
    next({ path: '/home', replace: true })
    return
  }
  if (getToken()) {
    if (userStore.loadMenus) {
      console.log('>>>>>>>> loadMenus')
      await loadMenus(path, next, userStore, routeStore)
    } else {
      if (path === '/login' || path === '/') {
        next('/')
      } else {
        next()
      }
    }
  } else {
    if (!route || route.meta?.auth) {
      next('/login')
    } else {
      next()
    }
  }
}
const RouterGuard = ({ children }: PropsWithChildren): ReactNode => {
  const location = useLocation()
  const userStore = useUserStore((state) => state)
  const routeStore = useRouteStore((state) => state)
  const router = useRouter()
  const [done, setDone] = useState(false)
  const { pathname } = location

  const route = useMemo(
    () => searchRoute(pathname, routeStore.routes),
    [pathname, routeStore.routes]
  )

  const next: RouterGuardNext = useCallback(
    (options) => {
      console.log('next, options', options)
      if (options) {
        if (typeof options !== 'string' && options.replace) {
          options.path = wrapperPath(options.path, routeStore.routes)
          console.log('wrapperPath', options)
          router.replace(options)
        } else {
          router.push(wrapperPath(options as string, routeStore.routes))
        }
      } else {
        console.log('set done-----------------')
        setDone(true)
      }
    },
    [routeStore.routes, router]
  )

  useEffect(() => {
    console.log('route beforeEach >==========================')
    setDone(false)
    beforeEach(pathname, route, next, userStore, routeStore)
  }, [pathname])
  // debugger
  const res = done ? children : <Loading />

  return res
}

export default RouterGuard
