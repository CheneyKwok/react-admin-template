export namespace Mock {
  export interface RouteMetaType {
    key: string
    label: string
    auth?: boolean
  }
  export interface RouteType {
    path?: string
    index?: boolean
    element: string
    meta?: RouteMetaType
    children?: RouteType[]
  }
}
