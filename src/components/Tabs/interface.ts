import * as React from 'react'
import { OverrideInterface } from '../../utils/omit'

export interface TabItemProps {
  title?: React.ReactNode
  icon?: string
  isDisabled?: boolean
  isCloseable?: boolean
  className?: string
  style?: React.CSSProperties
}
export interface TabItemInter extends React.FC<TabItemProps> {
  tabItem?: boolean
}
export interface TabsProps {
  havebg?: boolean
  isClosable?: boolean
  isAddable?: boolean
  type?: 'line' | 'card'
  defaultActive?: React.ReactText
  onChange?: (key: React.ReactText) => void
  onRemove?: (key: React.ReactText) => void
  onAdd?: () => void
}
export type QTabProps = OverrideInterface<React.HTMLAttributes<HTMLDivElement>, TabsProps>
export interface QTabInter extends React.FC<QTabProps> {
  Item?: TabItemInter
}
