import * as React from 'react'

export interface QSwitchInter {
  className?: string
  style?: React.CSSProperties
  isChecked?: boolean
  checkedContent?: string | React.ReactNode
  isDisable?: boolean
  isLoading?: boolean
  isAutoFocus?: boolean
  size?: 'large' | 'middle' | 'small'
  waveColor?: string
  unCheckedContent?: string | React.ReactNode
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  onChange?: (preProp: boolean, event: React.MouseEvent<HTMLButtonElement> | KeyboardEvent) => void
}
