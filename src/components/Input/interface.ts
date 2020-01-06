import * as React from 'react'
import { OverrideInterface } from '../../utils/omit'
import { INPUT_SIZE } from './common'

export interface IInputProps {
  isDisabled?: boolean
  size?: typeof INPUT_SIZE[number]
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  style?: React.CSSProperties
  inputStyle?: React.CSSProperties
  inputClassName?: string
  className?: string
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  isError?: boolean
  errorText?: React.ReactNode
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, nv: string) => void
}
export type IInputInter = OverrideInterface<React.InputHTMLAttributes<HTMLInputElement>, IInputProps>

export interface ITextAreaProps {
  isError?: boolean
  errorText?: React.ReactNode
  allowClear?: boolean
  className?: string
  onClear?: () => void
}
export type ITextAreaInter = OverrideInterface<React.TextareaHTMLAttributes<HTMLTextAreaElement>, ITextAreaProps>
