import * as React from 'react'

import { Position } from '../../constants/common'

// Portal
export interface QPortalInter {
  children: React.ReactNode
  ref?: React.Ref<any>
  container?: HTMLElement
  className?: string
  style?: React.CSSProperties
}

// PortalWithState
export type CallbackOptions = {
  isOpen: boolean
  openPortal: (event) => void
  closePortal: () => void
  portal: (children: React.ReactNode) => any
}
export interface QPortalWithStateInter {
  children: (options: CallbackOptions) => React.ReactElement<any, any>
  container?: HTMLElement
  onOpen?: () => void
  onClose?: () => void
  defaultOpen?: boolean
  closeOnOutsideClick?: boolean
  closeWithoutMainWrapper?: boolean // 废弃
  closeOnEsc?: boolean
  trigger?: 'click' | 'hover'
  position?: Position
  className?: string
  style?: React.CSSProperties
}
