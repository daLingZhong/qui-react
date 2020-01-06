import * as React from 'react'
import { OverrideInterface } from '../../utils/omit'

export interface QCheckboxProps {
  isChecked?: boolean
  isDisabled?: boolean
  isAutoFocus?: boolean
  isIndeterminate?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>, nv: boolean) => void
}
export type QCheckboxInter = OverrideInterface<React.TableHTMLAttributes<HTMLLabelElement>, QCheckboxProps>
