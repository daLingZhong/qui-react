import * as React from 'react'
import { Link } from 'react-router-dom'
import cls from 'classnames'

import { Icon } from '@/components'

import { MENU_LIST, MENU_DESIGN } from '../../constant/Menu'

import './index.scss'

const Sidebar: React.FC<{ route: string; type?: string }> = ({ route, type }) => {
  return (
    <React.Fragment>
      <div className="sidebar__logo">
        <Icon icon="rhino-orange-" />
        Woqu Design
      </div>

      <div className="sidebar__con">
        {(type === 'components' ? MENU_LIST : MENU_DESIGN).map((item, index) => (
          <div className="sidebar__link" key={index}>
            <div className="sidebar__title">{item.type}</div>
            <ul>
              {item.component.map((con, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${type}/${con.route}`}
                    className={cls('sidebar__route', { 'sidebar__route-active': con.route === route })}
                  >
                    {con.name} {(con as any).alias_name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </React.Fragment>
  )
}
Sidebar.defaultProps = {
  type: 'components',
}
export default Sidebar
