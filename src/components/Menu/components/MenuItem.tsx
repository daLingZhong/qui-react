import * as React from 'react'
import classNames from 'classnames'

import Icon from '@/components/Icon'

import { QMenuItem } from '../interface'
import { clsPrefix } from '../common'

const MenuItem: QMenuItem = (props) => {
  const { isDisabled, isChecked, isHaveCheckedIcon, isHidden, className, style, children, ...restProps } = props

  return isHidden ? null : (
    <li
      className={classNames(
        `${clsPrefix}-li`,
        {
          [`${clsPrefix}-hover`]: !isDisabled,
          [`${clsPrefix}-active`]: isChecked,
          [`${clsPrefix}-disabled`]: isDisabled,
        },
        className
      )}
      {...restProps}
    >
      {children}
      {isHaveCheckedIcon && <Icon icon="check" className={`${clsPrefix}__checkIcon`} />}
    </li>
  )
}

MenuItem.defaultProps = {
  isDisabled: false,
  isChecked: false,
  isHaveCheckedIcon: false,
  isHidden: false,
}

export default MenuItem
