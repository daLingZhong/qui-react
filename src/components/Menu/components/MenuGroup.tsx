import * as React from 'react'
import cls from 'classnames'

import { QMenuGroup } from '../interface'
import { clsPrefix } from '../common'

const MenuGroup: QMenuGroup = ({ label, children, classNames, ...res }) => {
  return (
    <li className={cls(`${clsPrefix}__group`, classNames)} {...res}>
      <div>{label}</div>
      <ul>{children}</ul>
    </li>
  )
}

MenuGroup.defaultProps = {
  label: '',
}

export default MenuGroup
