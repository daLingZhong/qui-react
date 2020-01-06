import * as React from 'react'

import { Position } from '../../constants/common'

export interface ITooltip {
  message: React.ReactNode
  placement?: Position
  tipClassname?: string
  tipStyle?: React.CSSProperties
  onVisible?: () => void
  onClose?: () => void
  mouseEnterDelay?: number
  mouseLeaveDelay?: number
  defaultVisible?: boolean
  container?: HTMLElement
  trigger?: 'hover' | 'click' | 'focus'
  triggerStyle?: React.CSSProperties
}
