import * as React from 'react'
import classNames from 'classnames'

import MenuItem from './MenuItem'
import MenuGroup from './MenuGroup'
import { QMenu } from '../interface'
import { clsPrefix } from '../common'

import '../styles/menu.scss'

const Menu: QMenu = ({ children, className, onScrollBottom, ...restProps }) => {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    ref.current.addEventListener('scroll', onScroll)

    return () => {
      ref.current.removeEventListener('scroll', onScroll)
    }
  }, [])

  function onScroll(e) {
    if (onScrollBottom) {
      onScrollBottom(e.target.scrollHeight - 300 - e.target.scrollTop)
    }
  }

  return (
    <div ref={ref} className={classNames(`${clsPrefix}`, className)} {...restProps}>
      <ul tabIndex={-1} className={classNames(`${clsPrefix}-ul`)}>
        {children}
      </ul>
    </div>
  )
}

Menu.Item = MenuItem
Menu.Group = MenuGroup

export default Menu
