declare global {
  interface RouterOptions {
    path: string
    query?: Record<string, any>
    params?: Record<string, any>
  }
}

export {}
