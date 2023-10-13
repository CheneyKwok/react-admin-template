import { useCallback } from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { filterObject } from '@/utils/public'
import { validateURL } from '@/utils/public/validate.ts'

const useRouter = () => {
  const navigate = useNavigate()

  const customNavigate = useCallback(
    (options: RouterOptions | string, replace = false) => {
      if (typeof options === 'string') {
        validateURL(options) ? window.open(options, '_blank') : navigate(options, { replace })
      } else {
        const navigateQuery = filterObject(options.query)
        const navigatePath = options.path + (navigateQuery ? '?' + qs.stringify(navigateQuery) : '')
        validateURL(navigatePath)
          ? window.open(navigatePath, '_blank')
          : navigate(navigatePath, {
              replace,
              state: filterObject(options.params),
            })
      }
    },
    [navigate]
  )

  const push = useCallback(
    (options: RouterOptions | string) => {
      customNavigate(options, false)
    },
    [customNavigate]
  )

  const replace = useCallback(
    (options: RouterOptions | string) => {
      customNavigate(options, true)
    },
    [customNavigate]
  )

  const go = useCallback(
    (num: number) => {
      navigate(num)
    },
    [navigate]
  )

  const back = useCallback(() => {
    go(-1)
  }, [go])

  return {
    push,
    replace,
    go,
    back,
  }
}

export default useRouter
