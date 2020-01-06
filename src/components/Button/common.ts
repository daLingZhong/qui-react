import { clsnamePrefix } from '@/var'

export const clsPrefix = `${clsnamePrefix}-button`
export const clsPrefixGroup = `${clsnamePrefix}-buttonGroup`
export const SINGLE_ICON_PADDING = {
  large: '10px',
  medium: '8px',
  small: '7px',
  mini: '6px',
}
// https://stackoverflow.com/questions/45251664/typescript-derive-union-type-from-tuple-array-values/45257357
export const BUTTON_THEME = ['primary', 'success', 'warning', 'danger', 'normal', 'text', 'dashed'] as const
export const BUTTON_SIZE = ['large', 'medium', 'small', 'mini'] as const
