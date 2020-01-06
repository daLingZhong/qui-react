import * as React from 'react'

import { RenderNode } from '../../constants/common'
import { OverrideInterface } from '../../utils/omit'

// Table
export type TableTheme = 'underline' | 'bordered'
export type SortObjState = {
  key: string
  func: () => number
  order: 'asc' | 'desc'
}
export type FilterList<T> = {
  key: string
  itemList?: FilterItemList[]
  newData?: T[]
}
export type FilterItemList = {
  text: string
  value: string
}
export interface RowSelection<T> {
  selectKey?: string
  disabled?: (record: T) => boolean
  selectedRowKeys: string[]
  onSelectedChange: (selectedRowKeys: string[]) => void
}
export interface QTableProps<T> {
  col: Col<T>[]
  dataSource: T[]
  className?: string
  style?: React.CSSProperties
  header?: RenderNode
  footer?: RenderNode
  theme?: TableTheme
  fixCol?: number
  small?: boolean
  isLoading?: boolean
  isResizable?: boolean
  isFixHeader?: boolean
  scroll?: { x?: string; y?: string }
  loadingText?: RenderNode
  isError?: boolean
  errorText?: RenderNode
  noDataText?: RenderNode
  rowSelection?: RowSelection<T>
  expandedRowRender?: (record: T) => React.ReactNode
}
export interface Col<T> {
  title: string | ((data: T[]) => React.ReactNode)
  dataIndex: string | string[]
  key?: string
  style?: React.CSSProperties
  className?: string
  width?: number
  isHidden?: boolean
  colSpan?: number
  rowSpan?: (value: { text: any; record: T; index: number }) => number
  filterItemList?: FilterItemList[]
  filterRender?: (record: T[], checkFun: (newData: T[]) => void, resetFun: () => void) => React.ReactNode
  sort?: ((a: T, b: T) => number) | boolean
  sortOrder?: (order: 'asc' | 'desc' | boolean) => void
  render?: (text: any, record: T, index: number) => React.ReactNode
}
export interface DataSource<T extends DataSource<T>> {
  key?: string
  children?: T[]
}
export type QTableInter<T> = OverrideInterface<React.TableHTMLAttributes<HTMLTableElement>, QTableProps<T>>

// EditTable
export interface QEditTableProps<T> {
  col: ColArray<T>[]
  dataSource: T[]
  isDeletable?: boolean
  isCustomize?: boolean
  isSubmitting?: boolean
  onEdit?: (key: string) => void
  onCheck?: (item: T, index: number, exit: () => void) => void
  onDel?: (item: T, index: number) => void
  onCancel?: () => void
}
export interface EditCol<T> {
  isEditable?: boolean
  renderItem?: (changeItem: (key: string, nv: any) => void, text: any, record: T, item: any) => React.ReactNode
}
export interface EditDataSource<T extends EditDataSource<T>> {
  key: string
  children?: T[]
}
export type ColArray<T> = OverrideInterface<Col<T>, EditCol<T>>
export type QEditTableInter<T> = OverrideInterface<QTableInter<T>, QEditTableProps<T>>
