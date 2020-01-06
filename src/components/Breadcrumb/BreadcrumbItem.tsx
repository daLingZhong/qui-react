import * as React from 'react'
import classNames from 'classnames'

import { Icon, Menu } from '@/components'
import { PortalWithState } from '@/components/Portal'
import { CSSTransition } from '@/components/Animate'

import { clsPrefix } from './common'
import { BreadcrumbItemProps, IOverlay } from './interface'

export interface BreadcrumbItem extends React.FunctionComponent<BreadcrumbItemProps> {
  __QUI_BREADCRUMB_ITEM?: boolean
}

const BreadcrumbItem: BreadcrumbItem = ({ separator, children, key, overlay, href, className, ...restProps }) => {
  let link: React.ReactNode = null

  const renderMenuNode = (breadcrumbItem: React.ReactNode) => {
    if (overlay) {
      return (
        <PortalWithState closeOnOutsideClick={true} position="bottomRight" trigger="hover">
          {({ openPortal, closePortal, isOpen, portal }) => (
            <div>
              <span onMouseEnter={openPortal} onMouseLeave={closePortal}>
                <span style={{ paddingRight: 3 }}>{breadcrumbItem}</span>

                <Icon
                  icon="down"
                  className={classNames(`${clsPrefix}-item-arrow`, {
                    [`${clsPrefix}-item-arrow-active`]: isOpen,
                  })}
                />
              </span>

              {portal(
                <CSSTransition in={isOpen} timeout={300} unmountOnExit={true} classNames={`${clsPrefix}-item-slide`}>
                  <Menu onMouseEnter={openPortal} onMouseLeave={closePortal} className={`${clsPrefix}__menu`}>
                    {overlay.map(({ children, ...restProps }: IOverlay, index: number) => (
                      <Menu.Item key={index} {...restProps}>
                        {children}
                      </Menu.Item>
                    ))}
                  </Menu>
                </CSSTransition>
              )}
            </div>
          )}
        </PortalWithState>
      )
    }

    return breadcrumbItem
  }

  if (href) {
    link = (
      <a className={`${clsPrefix}-item-link ${className}`} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    link = (
      <span className={`${clsPrefix}-item-link ${className}`} {...restProps}>
        {children}
      </span>
    )

    link = renderMenuNode(link)
  }

  return (
    <div className={`${clsPrefix}-item`} data-key={key}>
      {link}
      {separator && <span className={`${clsPrefix}-item-separator`}>{separator}</span>}
    </div>
  )
}

BreadcrumbItem.__QUI_BREADCRUMB_ITEM = true

BreadcrumbItem.defaultProps = {
  separator: '/',
  className: '',
  key: 0,
  onClick: () => {},
}

export default BreadcrumbItem
