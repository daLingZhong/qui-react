import * as React from 'react'
import cls from 'classnames'

import { QCheckboxInter } from '../interface'
import { clsPrefix } from '../common'

import '../styles/style.scss'

const Checkbox = React.forwardRef<{ focus: () => void; blur: () => void }, QCheckboxInter>((props, ref) => {
  const {
    children,
    className,
    style,
    id,
    isChecked,
    isDisabled,
    isIndeterminate,
    isAutoFocus,
    onChange,
    ...res
  } = props
  const [focus, setFocus] = React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    if (isAutoFocus) {
      inputRef.current.focus()
    }
  }, [])

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus()
    },
    blur: () => {
      inputRef.current.blur()
    },
  }))

  return (
    <label
      style={style}
      className={cls(
        `${clsPrefix}__wrapper`,
        {
          [`${clsPrefix}__wrapper-hover`]: !isDisabled || focus,
          [`${clsPrefix}__wrapper-disabled`]: isDisabled,
        },
        className
      )}
      id={id}
      {...res}
    >
      <span
        className={cls(`${clsPrefix}__checkbox`, {
          [`${clsPrefix}__checkbox-checked`]: isChecked,
        })}
      >
        <input
          ref={inputRef}
          type="checkbox"
          className={cls(`${clsPrefix}__input`)}
          checked={isChecked}
          disabled={isDisabled}
          onChange={(e) => onChange(e, !isChecked)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <span
          className={cls(isIndeterminate && !isChecked ? `${clsPrefix}__indeterminate` : `${clsPrefix}__inner`, {
            [`${clsPrefix}__inner-checked`]: isChecked,
            [`${clsPrefix}__inner-checked-disabled`]: isChecked && isDisabled,
            [`${clsPrefix}__inner-focus`]: focus,
            [`${clsPrefix}__inner-disabled`]: isDisabled,
            [`${clsPrefix}__indeterminate-disabled`]: isDisabled && isIndeterminate && !isChecked,
          })}
        />
        {children && <span className={`${clsPrefix}__children`}>{children}</span>}
      </span>
    </label>
  )
})

export default Checkbox
