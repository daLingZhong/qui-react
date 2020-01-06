import * as React from 'react'
import { PAGER_TYPE } from './common'

export type PagerTypes = keyof typeof PAGER_TYPE
export type PageItemRenderType = (
  page: number,
  type: PagerTypes,
  originalElement: React.ReactNode,
  isDisabled: boolean
) => React.ReactNode
export interface PagerProps {
  page: number
  type?: PagerTypes
  isActive?: boolean
  isDisabled?: boolean
  small?: boolean
  itemRender: PageItemRenderType
  onClick: (page: number) => void
}
export interface PaginationProps {
  className?: string
  total: number
  page?: number
  pageSize?: number
  small?: boolean
  onChange?: (page: number, pageSize: number) => void
  isDisabled?: boolean
  itemRender?: PageItemRenderType
  totalRender?: (total: number, range: Array<number>) => React.ReactNode
  showSizeChanger?: boolean
  sizeChangerOptions?: Array<number>
  onSizeChange?: (page: number, pageSize: number) => void
  onJumperChange?: (page: number, jumpTo: number) => void
  showQuickJumper?: boolean
}
