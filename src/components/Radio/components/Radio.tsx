import * as React from 'react'
import { noop } from 'lodash'
import cls from 'classnames'

import { clsPrefix } from '../common'
import { QRadioOptionInter } from '../interface'
import RadioGroup from './RadioGroup'

import '../styles/style.scss'

const Radio = <T extends any>(props: QRadioOptionInter<T>) => {
  const { groupName, isChecked, isDisabled, children, onClick, value, className, style, ...res } = props
  const ref = React.useRef<HTMLInputElement>(null)
  const [focus, setFocus] = React.useState<boolean>(false)

  return (
    <div
      onClick={() => {
        if (!isDisabled) {
          ref.current.focus()
          onClick(value)
        }
      }}
      className={cls(`${clsPrefix}__con`, className)}
      style={style}
      {...res}
    >
      <input
        type="radio"
        ref={ref}
        className={`${clsPrefix}__input`}
        name={groupName}
        disabled={isDisabled}
        checked={isChecked}
        onChange={noop}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <label
        className={cls(`${clsPrefix}__label`, {
          [`${clsPrefix}__label-focus`]: focus,
          [`${clsPrefix}__label-hover`]: !isDisabled,
          [`${clsPrefix}__label-disabledCheck`]: isDisabled && isChecked,
          [`${clsPrefix}__label-disabled`]: isDisabled && !isChecked,
        })}
      >
        {children && (
          <span
            className={cls(`${clsPrefix}__child`, {
              [`${clsPrefix}__child-disabled`]: isDisabled,
            })}
          >
            {children}
          </span>
        )}
      </label>
    </div>
  )
}
Radio.defaultProps = {
  isChecked: false,
  isDisabled: false,
  onClick: noop,
}
Radio.Group = RadioGroup

export default Radio
