import * as React from 'react'
import { QMenuItemInter, QMenuGroupInter } from '../Menu/interface'
import { OverrideInterface } from '../../utils/omit'
import { Noop } from '../../utils/commonInterface'

// Select
export type SelectMode = 'multiple' | 'tags' | 'default'
export type SelectSize = 'large' | 'default' | 'small'
export type ValueLabel = { value: string | number; label: React.ReactNode | string | number }
export interface QSelectProps {
  className?: string
  defaultValue?: ValueLabel | string[]
  placeholder?: string
  isDisabled?: boolean
  isLoading?: boolean
  isError?: boolean
  isSearch?: boolean
  errorText?: string | React.ReactNode
  isRenderSlide?: boolean
  isReRenderDfVal?: boolean
  isLabelInValue?: boolean
  haveDropdownIcon?: boolean
  container?: HTMLElement
  mode?: SelectMode
  size?: SelectSize
  onChange?: (newValue: string | number | string[] | ValueLabel) => void
  onInputChange?: (newValue: string) => void
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
  onScrollButtom?: (value: number) => void
  onDropDownVisible?: Noop
}
export type QSelectRef = {
  focus: () => void
  blur: () => void
  cleanData: () => void
}
export type QSelectInter = OverrideInterface<React.HtmlHTMLAttributes<HTMLDivElement>, QSelectProps>

// Option
export interface QOptionInter extends QMenuItemInter {
  onCustomizeFun?: (nv: ValueLabel, closeFun: Noop) => void // 自定义select选项，暂时只支持单选模式
  onCheck?: (value: string | number) => void
  onKeyDown?: (e) => void
  checkedItem?: ValueLabel[]
  focusItem?: string | number
  value?: string | number
}
export interface OptionComponent extends React.FunctionComponent<QOptionInter> {
  Option: boolean
}
export interface OptionGroupComponent extends React.FunctionComponent<QMenuGroupInter> {
  OptionGroup: boolean
}

// Cascade
export type CascadeTrigger = 'hover' | 'click'
export type CascadeOptions = {
  value: string | number
  label?: React.ReactNode | string | number
  isDisabled?: boolean
  children?: CascadeOptions[]
}
export interface QCascadeProps {
  value?: Array<string | number>
  options?: CascadeOptions[]
  trigger?: CascadeTrigger
  isCleaner?: boolean
  isDisabled?: boolean
  isRenderSlide?: boolean
  isLoading?: boolean
  placeholder?: string
  noResultContent?: string | React.ReactNode
  className?: string
  size?: SelectSize
  container?: HTMLElement
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
  onDropDownVisible?: Noop
  onChange?: (value: Array<number | string> | ValueLabel[]) => void
}
export type QCascadeInter = OverrideInterface<React.HtmlHTMLAttributes<HTMLDivElement>, QCascadeProps>

// TreeSelect
export type TreeSelectOptions = {
  value: string
  label?: string | React.ReactNode
  isDisabled?: boolean
  children?: TreeSelectOptions[]
}
export type ShowCheckedStrategy = 'parent' | 'all' | 'child'
export type TreeSelectMode = 'default' | 'multiple'
export type TreeSelectValueType = string | string[]
export interface QTreeNodeInter<T> {
  selectedItem?: T
  searchValue?: string
  flattenList?: TreeSelectOptions[]
  preState?: boolean
  parentNode?: TreeSelectOptions
  node?: TreeSelectOptions
  showCheckedStrategy?: ShowCheckedStrategy
  checkable?: boolean
  onChange?: (nv: T, action?: 'add' | 'del') => void
  closeFun?: Noop
}
export interface QTreeSelectProps<T> {
  value?: T
  options?: TreeSelectOptions[]
  noResultContent?: string | React.ReactNode
  className?: string
  isCheckable: boolean
  isCleaner?: boolean
  isDisabled?: boolean
  isError?: boolean
  isSearch?: boolean
  errorText?: string | React.ReactNode
  isRenderSlide?: boolean
  isLoading?: boolean
  showCheckedStrategy?: ShowCheckedStrategy
  container?: HTMLElement
  placeholder?: string
  size?: SelectSize
  mode?: TreeSelectMode
  onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void
  onChange?: (nv: T) => void
}
export type QTreeSelectInter<T> = OverrideInterface<React.HtmlHTMLAttributes<HTMLDivElement>, QTreeSelectProps<T>>
