import * as React from 'react'

import { NOTICE_TYPES, NOTICE_PLACEMENT } from './common'
import { RenderNode } from '../../constants/common'

export type NoticeType = typeof NOTICE_TYPES[number]
export type NoticePlacement = typeof NOTICE_PLACEMENT[number]
export interface NoticeProps {
  title?: RenderNode
  uuid?: string
  message?: RenderNode
  duration?: number
  placement?: NoticePlacement
  isReverse?: boolean
  onRemove?: (id: string) => void
  onClose?: () => void
  isClosable?: boolean
  type?: NoticeType
  className?: string
  style?: React.CSSProperties
}
