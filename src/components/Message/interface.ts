import * as React from 'react'

import { MESSAGE_ICON } from './common'

export interface MessageProps {
  uuid?: string
  onRemove?: (id: string) => void
  message?: React.ReactNode
  type?: keyof typeof MESSAGE_ICON
  isLoading?: boolean
  isLoadingAlive?: boolean
  loadingText?: React.ReactNode
  duration?: number
  className?: string
  style?: React.CSSProperties
}
