import * as React from 'react'
import { isBoolean } from 'lodash'
import cls from 'classnames'

import { QButtonGroupInter, ButtonProps, QButtonInter } from '../interface'
import { clsPrefixGroup } from '../common'
import '../styles/style.scss'

export const ButtonGroup: QButtonGroupInter = ({ children: _children, isDisabled, size, theme }) => {
  return (
    <div className={cls(`${clsPrefixGroup}`)}>
      {React.Children.map(_children, (v: React.ReactElement<ButtonProps, QButtonInter>) => {
        const { type: Component, props } = v
        const { className: _className, theme: _theme, isDisabled: _isDisabled, size: _size } = props

        return (
          <Component
            {...props}
            className={cls({ [`${clsPrefixGroup}-gap`]: _theme === 'normal' || _theme === 'dashed' }, _className)}
            isDisabled={isBoolean(isDisabled) ? isDisabled : _isDisabled}
            size={size ? size : _size}
            theme={theme ? theme : _theme}
          />
        )
      })}
    </div>
  )
}
export default ButtonGroup
