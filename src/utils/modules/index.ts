
const componentModules = import.meta.glob(['@/components/*/*.tsx', '@/pages/*/*.tsx'])
export const importFCComponent = <T>(path: string) => {
  return componentModules[path] as () => Promise<{ default: T }>
}