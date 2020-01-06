import { clsnamePrefix } from '@/var'

export const clsPrefix = `${clsnamePrefix}-message`
export const NOTICE_DURATION = 3
export const MESSAGE_ICON = {
  info: 'info-circle',
  success: 'check-circle',
  error: 'close-circle',
  warning: 'exclamation-circle',
}

export const buildUuid = (con: string | number) => {
  return `${clsPrefix}_${con}_${Date.now()}`
}
