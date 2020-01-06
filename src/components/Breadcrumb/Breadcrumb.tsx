import * as React from 'react'

import { BreadcrumbItem } from './BreadcrumbItem'
import { IBreadcrumbSeparator } from './BreadcrumbSeparator'

import { clsPrefix } from './common'
import { filterFragment } from './utils'
import { BreadcrumbProps } from './interface'

import './styles/index.scss'

export interface Breadcrumb extends React.FunctionComponent<BreadcrumbProps> {
  Item?: BreadcrumbItem
  Separator?: IBreadcrumbSeparator
}

const Breadcrumb: Breadcrumb = ({ separator, className, children, ...restProps }) => {
  let crumbs: React.ReactNode = null

  if (children) {
    crumbs = React.Children.map(filterFragment(children), (child: any, index: number) => {
      if (!child) {
        return child
      }

      const type = (child as React.ReactElement<any>).type as any

      if (type && !type.__QUI_BREADCRUMB_ITEM && !type.__QUI_BREADCRUMB_SEPARATOR) {
        console.warn("Breadcrumb only accepts Breadcrumb.Item or Breadcrumb.Separator as it's children")
      } else {
        return React.cloneElement(child, {
          separator,
          key: index,
        })
      }
    })
  }

  return (
    <div className={`${clsPrefix} ${className}`} {...restProps}>
      {crumbs}
    </div>
  )
}

Breadcrumb.defaultProps = {
  className: '',
  separator: '/',
}

export default Breadcrumb
