import * as React from 'react'
import { BUTTON_THEME, BUTTON_SIZE } from './common'

export type ButtonTheme = typeof BUTTON_THEME[number]
export type ButtonSize = typeof BUTTON_SIZE[number]
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<any>
  theme?: ButtonTheme
  size?: ButtonSize
  isDisabled?: boolean
  isLoading?: boolean
  loadingText?: string | React.ReactNode
  icon?: string
  waveColor?: string
}
export interface ButtonGroupProps {
  size?: ButtonSize
  theme?: ButtonTheme
  isDisabled?: boolean
}
export type QButtonGroupInter = React.FC<ButtonGroupProps>
export interface QButtonInter extends React.FC<ButtonProps> {
  Group?: QButtonGroupInter
}
