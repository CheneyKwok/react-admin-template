import React, { JSX, Suspense } from 'react'

import Loading from '@/components/loading'

const lazyLoad = (Comp: React.LazyExoticComponent<() => JSX.Element>): React.ReactNode => {
  return (
    <Suspense fallback={<Loading />}>
      <Comp />
    </Suspense>
  )
}
export default lazyLoad
