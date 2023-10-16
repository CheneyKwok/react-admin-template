import { useMemo } from 'react'
import qs from 'qs'
import { matchRoutes, useLocation, useParams } from 'react-router-dom'

import useRouteStore from '@/store/route.ts'

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

  const matchedRoutes = useMemo(() => {
    const matchedRouteObjs = matchRoutes(routes as any[], location)
    const matchedPaths = matchedRouteObjs?.map((route) => route.pathname) || []
    return matchedPaths.reduce((matchedRoutes: RouteRecord[], path) => {
      if (matchedRoutes.length) {
        const children = matchedRoutes[matchedRoutes.length - 1].children
        if (children) {
          const matchedChildrenRoute = children.find((route) => route.fullPath == path)
          matchedChildrenRoute && matchedRoutes.push(matchedChildrenRoute)
        }
      } else {
        const matchedRootRoute = routes.find((route) => (route.fullPath = path))
        matchedRootRoute && matchedRoutes.push(matchedRootRoute)
      }
      return matchedRoutes
    }, [])
  }, [location, routes])

  const matchedRoute = useMemo(() => matchedRoutes[matchedRoutes.length - 1], [matchedRoutes])

  return {
    path: location.pathname,
    fullPath: location.pathname + search,
    hash: location.hash,
    query,
    params,
    matchedRoute,
    matchedRoutes,
  }
}

export default useRoute
