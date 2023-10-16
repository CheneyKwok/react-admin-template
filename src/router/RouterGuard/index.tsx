import { PropsWithChildren, ReactNode, useCallback, useEffect, useState } from 'react'
import { notification } from 'antd'

import Loading from '@/components/Loading.tsx'
import useRoute from '@/hooks/useRoute.ts'
import useRouter from '@/hooks/useRouter.ts'
import { searchIndexRoute } from '@/router/helper.ts'
import useRouteStore from '@/store/route.ts'
import useUserStore from '@/store/user.ts'
import { getToken } from '@/utils/token'

type RouterGuardNext = (options?: (RouterOptions & { replace?: boolean }) | string) => void

type RouterGuardBeforeEach = (
  path: string,
  route: RouteRecord | undefined,
  next: RouterGuardNext
) => void | Promise<void>

const RouterGuard = ({ children }: PropsWithChildren): ReactNode => {
  const { needLoadMenus, setNeedLoadMenus } = useUserStore((state) => state)
  const { routes, loadMenuRoutes } = useRouteStore((state) => state)
  const router = useRouter()
  const { path, matchedRoute } = useRoute()
  const [pending, setPending] = useState(false)

  useEffect(() => {
    setPending(false)
    beforeEach(path, matchedRoute, next)
  }, [path, routes])

  const beforeEach: RouterGuardBeforeEach = useCallback(
    async (path, route, next) => {
      if (getToken()) {
        if (needLoadMenus) {
          await loadMenus(path, next)
        } else {
          if (path === '/login') {
            next('/')
          } else if (path === '/') {
            const indexRoute = searchIndexRoute(routes)
            if (indexRoute?.path) {
              next({ path: indexRoute.path, replace: true })
            } else {
              next()
            }
          } else {
            next()
          }
        }
      } else {
        if (route?.meta?.auth === false) {
          next()
        } else {
          next('/login')
        }
      }
    },
    [needLoadMenus, routes]
  )

  const next: RouterGuardNext = useCallback(
    (options) => {
      if (options) {
        if (typeof options !== 'string' && options.replace) {
          router.replace(options)
        } else {
          router.push(options)
        }
      } else {
        setPending(true)
      }
    },
    [router]
  )

  const loadMenus = useCallback(
    async (path: string, next: RouterGuardNext) => {
      try {
        setNeedLoadMenus(false)
        await loadMenuRoutes()
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
    },
    [loadMenuRoutes, setNeedLoadMenus]
  )

  return pending ? children : <Loading />
}

export default RouterGuard
