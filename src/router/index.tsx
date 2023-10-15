import { lazy, ReactNode } from 'react'
import { cloneDeep } from 'lodash'
import { Navigate } from 'react-router-dom'

import constantRouteConfigs from '@/router/constant.ts'
import { formatRoutes } from '@/router/helper.ts'
import lazyLoad from '@/router/Suspense'

const pageModules = import.meta.glob(['@/pages/**/*.tsx'])

const renderRoutesByConfig = (routeConfigs: RouteConfig[]): RouteRecord[] => {
  return routeConfigs.map((routeConfig) => {
    const { path, index, redirect, component, meta } = routeConfig
    let element: ReactNode
    if (redirect) {
      element = <Navigate to={redirect} replace />
    }
    if (component) {
      const key = '/src/' + component + '/index.tsx'
      const PageComponent = pageModules[key]
      // @ts-ignore
      element = lazyLoad(lazy(PageComponent))
    }
    return {
      path,
      index,
      element,
      meta,
      children: routeConfig.children?.length
        ? renderRoutesByConfig(routeConfig.children)
        : undefined,
    }
  })
}

export const createRoutes = (menus: RouteConfig[] = []) => {
  const _constantRouteConfigs = cloneDeep(constantRouteConfigs)
  _constantRouteConfigs.forEach((routeConfig) => {
    if (routeConfig.path === '/' && routeConfig.children) {
      routeConfig.children = routeConfig.children.concat(menus)
    }
  })
  let routes = renderRoutesByConfig(_constantRouteConfigs)
  routes = formatRoutes(routes)
  const menuRoutes = routes.find((route) => (route.path = '/'))?.children || []
  return {
    routes,
    menuRoutes,
  }
}

const { routes } = createRoutes()

export default routes
