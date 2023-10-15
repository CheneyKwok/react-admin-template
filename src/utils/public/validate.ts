
export const isArray = Array.isArray

export function isString (val: any){
  return typeof val === 'string'
}

export function isFunction (val: any) {
  return typeof val === 'function'
}

export function isNumber (val: any) {
  return typeof val === 'number'
}

export const URLReg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/

export function validateURL (val: string) {
  return isString(val) && URLReg.test(val)
}
