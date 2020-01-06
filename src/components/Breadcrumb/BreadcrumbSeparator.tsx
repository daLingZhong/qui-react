import * as React from 'react'

import { clsPrefix } from './common'
import { BreadcrumSeparatorProps } from './interface'

export interface IBreadcrumbSeparator extends React.FC<BreadcrumSeparatorProps> {
  __QUI_BREADCRUMB_SEPARATOR?: boolean
}

const BreadcrumbSeparator: IBreadcrumbSeparator = ({ children, className, style }) => {
  return (
    <span className={`${clsPrefix}-item-separator ${className}`} style={style}>
      {children || '/'}
    </span>
  )
}

BreadcrumbSeparator.__QUI_BREADCRUMB_SEPARATOR = true

export default BreadcrumbSeparator
