import { useMemo } from 'react'
import qs from 'qs'
import { useLocation, useParams } from 'react-router-dom'

import useRouteStore from '@/store/route.ts'

const matchRoute = (path: string, routes: RouteRecord[] = []): RouteRecord | undefined => {
  let route = undefined
  for (const item of routes) {
    if (item.fullPath === path) return item
    if (item.children) {
      const res = matchRoute(path, item.children)
      if (res && Object.keys(res).length) route = res
    }
  }
  return route
}

const useRoute = (): RouteLocation => {
  const location = useLocation()
  const param = useParams()
  const { routes } = useRouteStore((state) => state)

  const search = useMemo(() => location.search, [location.search])
  const query = useMemo(
    () => (search ? { ...qs.parse(search.slice(1)) } : {}) as Record<string, object>,
    [search]
  )

  const params = useMemo(() => {
    const _state = (location.state ? { ...location.state } : {}) as Record<string, object>
    const _param = param ? { ...param } : {}
    return {
      ..._state,
      ..._param,
    } as Record<string, object>
  }, [location.state, param])

  const matchedRoute = useMemo(
    () => matchRoute(location.pathname, routes),
    [location.pathname, routes]
  )

  return {
    path: location.pathname,
    fullPath: location.pathname + search,
    hash: location.hash,
    query,
    params,
    matchedRoute,
  }
}

export default useRoute
