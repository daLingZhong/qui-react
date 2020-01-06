import { clsnamePrefix } from '@/var'

export const clsPrefix = `${clsnamePrefix}-notification`
export const NOTICE_TYPES = ['info', 'success', 'warning', 'error'] as const
export const NOTICE_PLACEMENT = ['topRight', 'bottomRight', 'topLeft', 'bottomLeft'] as const
export const NOTICE_DURATION = 4.5

export const buildUuid = (con: string | number) => {
  return `${clsPrefix}_${con}_${Date.now()}`
}
