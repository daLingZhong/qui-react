import { clsnamePrefix } from '@/var'
import { SortObjState } from './interface'

export function findProperty<T>(data: T, keyArray: string | string[]): string {
  if (keyArray instanceof Array) {
    for (const item of keyArray) {
      if (data.hasOwnProperty(item)) {
        return item
      }
    }
  } else {
    return keyArray
  }

  return ''
}

export const clsPrefix = `${clsnamePrefix}-table`

export const clsPrefixEd = `${clsnamePrefix}-edTable`

export const initSortObj: SortObjState = {
  key: null,
  func: null,
  order: 'asc',
}
