import * as React from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'

import { Icon } from '@/components'

import './index.scss'

const Topbar = ({ type }) => {
  return (
    <div className="topbar">
      <div className="topbar__search">
        <Icon icon="search" />
        <input placeholder="在woqu design中搜索" />
      </div>
      <div className="topbar__link">
        <ul>
          <li className={cls({ 'topbar__link-active': type === 'design' })}>
            <Link to={'/design'}>设计语言</Link>
          </li>
          <li className={cls({ 'topbar__link-active': type === 'components' })}>
            <Link to={'/components/button'}>组件</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Topbar
