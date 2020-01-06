import * as React from 'react'
import classNames from 'classnames'

import { Menu } from '@/components/Menu'

import { clsPrefix } from '../common'
import { OptionComponent, OptionGroupComponent } from '../interface'

import '../styles/select.scss'

const Option: OptionComponent = (props) => {
  const { onCheck, onKeyDown, value, checkedItem, focusItem, children, ...restProps } = props
  let isChecked: boolean

  if (checkedItem instanceof Array) {
    isChecked = !!checkedItem.find((item) => item.value === value)
  } else {
    isChecked = value === checkedItem
  }

  return (
    <Menu.Item
      onClick={() => {
        onCheck && onCheck(value)
      }}
      // className={classNames({
      //   [`${clsPrefix}__slide-multiple-active`]: isChecked && checkedItem instanceof Array && focusItem !== value,
      // })}
      isChecked={focusItem ? focusItem === value : isChecked}
      isHaveCheckedIcon={checkedItem instanceof Array && isChecked}
      {...restProps}
    >
      {children}
    </Menu.Item>
  )
}

Option.Option = true

const OptionGroup: OptionGroupComponent = (props) => {
  return <Menu.Group {...props} />
}

OptionGroup.OptionGroup = true

export { Option, OptionGroup }
