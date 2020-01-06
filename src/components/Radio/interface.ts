import * as React from 'react'
import { OverrideInterface } from '../../utils/omit'

export interface RadioGroupProps<T extends any> {
  name?: string
  value?: T
  isDisabled?: boolean
  onChange?: (nv: any) => void
}
export interface RadioOptionProps<T extends any> {
  readonly groupName?: string
  value?: T
  isDisabled?: boolean
  isChecked?: boolean
  onClick?: (nv: T) => void
}
export type QRadioGroupInter<T> = OverrideInterface<React.HtmlHTMLAttributes<HTMLDivElement>, RadioGroupProps<T>>
export type QRadioOptionInter<T> = OverrideInterface<React.HTMLAttributes<HTMLDivElement>, RadioOptionProps<T>>
