import { omitBy } from 'lodash'

export const filterObject = (obj: object | undefined) => {
  if (obj) {
    const filterObj = omitBy(obj, (value) => value === undefined || value == null || value === '')
    return Object.keys(obj).length ? filterObj : null
  }
  return null
}
