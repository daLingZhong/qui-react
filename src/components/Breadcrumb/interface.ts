import * as React from 'react'

export interface BreadcrumbProps {
  separator?: string | React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface IOverlay {
  children: string | React.ReactNode
  isDisabled?: boolean
  isChecked?: boolean
  isHaveCheckedIcon?: boolean
  isHidden?: boolean
}

export interface BreadcrumbItemProps {
  separator?: string | React.ReactNode
  overlay?: IOverlay[]
  key?: number
  href?: string
  className?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>
}

export interface BreadcrumSeparatorProps {
  className?: string
  style?: React.CSSProperties
}
