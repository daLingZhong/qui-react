import * as React from 'react'

import { OverrideInterface } from '../../utils/omit'

// MenuItem
export interface QMenuItemInter extends React.HTMLAttributes<HTMLLIElement> {
  className?: string
  isDisabled?: boolean
  isChecked?: boolean
  isHidden?: boolean
  isHaveCheckedIcon?: boolean
}
export type QMenuItem = React.FunctionComponent<QMenuItemInter>

// MenuGroup
export interface QMenuGroupInter {
  label: string | React.ReactNode
  classNames?: string
}
export type QMenuGroup = React.FunctionComponent<QMenuGroupInter>

// Menu
export type MenuProps = {
  onScrollBottom?: (value: number) => void
}
export type QMenuInter = OverrideInterface<React.HTMLAttributes<HTMLDivElement>, MenuProps>
export interface QMenu extends React.FunctionComponent<QMenuInter> {
  Item: QMenuItem
  Group: QMenuGroup
}
