import * as React from 'react'
import { OverrideInterface } from '../../utils/omit'

export interface CardProps {
  title?: React.ReactNode
  hasColorBar?: boolean
  hasBorder?: boolean
  hasShadow?: boolean
  hoverable?: boolean
  footer?: React.ReactNode
  footerClass?: string
  footerStyle?: React.CSSProperties
}
export type CardInter = OverrideInterface<React.HTMLAttributes<HTMLDivElement>, CardProps>
