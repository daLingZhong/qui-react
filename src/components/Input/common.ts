import { clsnamePrefix } from '@/var'

export const clsPrefix = `${clsnamePrefix}-input`
export const clsPrefixText = `${clsnamePrefix}-textarea`
export const INPUT_SIZE = ['large', 'middle', 'small'] as const
export const INPUT_RANGE = {
  large: {
    height: '34px',
    marginTop: '-8px',
  },
  middle: {
    height: '32px',
    marginTop: '-7px',
  },
  small: {
    height: '28px',
    marginTop: '-6px',
  },
}
