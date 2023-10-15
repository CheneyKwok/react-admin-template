declare global {
  interface Flattenable<T> {
    children?: T[]
  }
}

export {}
