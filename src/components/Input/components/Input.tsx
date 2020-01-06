import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import Icon from '@/components/Icon'

import { IInputInter } from '../interface'
import { clsPrefix } from '../common'

import '../styles/input.scss'

const Input = React.forwardRef<{ focus: () => void; blur: () => void; select: () => void }, IInputInter>(
  (props, ref) => {
    const {
      isDisabled,
      suffix,
      prefix,
      type,
      width,
      height,
      style,
      inputStyle,
      inputClassName,
      size,
      onChange,
      onFocus,
      onBlur,
      value,
      className,
      addonAfter,
      addonBefore,
      isError,
      errorText,
      ...res
    } = props
    const [showPwd, setShowPwd] = React.useState(false)
    const [isFocus, setIsFocus] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)
    const isHaveFix = type === 'password' || !!suffix || !!prefix
    const _className = cls(clsPrefix, `${clsPrefix}__size-${size}`, {
      [`${clsPrefix}-focus`]: isFocus && !isError,
      [`${clsPrefix}-focus-error`]: isFocus && isError,
      [`${clsPrefix}-disabled`]: isDisabled,
      [`${clsPrefix}-hover`]: !isDisabled && !isError,
      [`${clsPrefix}-error`]: isError,
      [`${clsPrefix}__suffix-padding`]: type === 'password' || !!suffix,
      [`${clsPrefix}__prefix-padding`]: !!prefix,
      [`${clsPrefix}__addonBefore-radius`]: !!addonBefore,
      [`${clsPrefix}__addonAfter-radius`]: !!addonAfter,
    })
    const cus = {
      width: !!width ? '100%' : undefined,
      height: !!height ? '100%' : undefined,
    }

    React.useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus()
      },
      blur: () => {
        inputRef.current.blur()
      },
      select: () => {
        inputRef.current.select()
      },
    }))

    const inputNode = (
      <input
        {...res}
        ref={inputRef}
        type={type === 'password' ? (showPwd ? 'text' : 'password') : type}
        onChange={(e) => onChange(e, e.target.value)}
        onFocus={(e) => {
          setIsFocus(true)
          onFocus(e)
        }}
        onBlur={(e) => {
          setIsFocus(false)
          onBlur(e)
        }}
        className={!isHaveFix ? _className : inputClassName}
        disabled={isDisabled}
        value={value?.toString()}
        style={{ ...cus, ...inputStyle }}
      />
    )
    const addonBeforeNode =
      addonBefore &&
      (typeof addonBefore === 'string' ? (
        <span className={cls(`${clsPrefix}__addon`, `${clsPrefix}__addonBefore`, `${clsPrefix}__size-${size}`)}>
          {addonBefore}
        </span>
      ) : (
        addonBefore
      ))
    const addonAfterNode =
      addonAfter &&
      (typeof addonAfter === 'string' ? (
        <span className={cls(`${clsPrefix}__addon`, `${clsPrefix}__addonAfter`, `${clsPrefix}__size-${size}`)}>
          {addonAfter}
        </span>
      ) : (
        addonAfter
      ))
    const errorNode = isError && <span className={`${clsPrefix}__errorText`}>{errorText}</span>

    if (!isHaveFix) {
      return (
        <div className={cls(`${clsPrefix}__wrapper`, className)} style={{ width, height, ...style }}>
          {addonBeforeNode}
          {inputNode}
          {addonAfterNode}
          {errorNode}
        </div>
      )
    } else {
      const affixCls = `${clsPrefix}__affix`
      const _prefix = !!prefix ? <span>{prefix}</span> : null
      const _suffix = !!suffix ? <span>{suffix}</span> : null
      const pwdSuffix = (
        <Icon
          style={{ cursor: 'pointer' }}
          className={affixCls}
          icon={showPwd ? 'visible' : 'invisible'}
          onClick={() => setShowPwd(!showPwd)}
        />
      )

      return (
        <div className={cls(`${clsPrefix}__wrapper`, className)} style={{ width, height, ...style }}>
          {addonBeforeNode}
          <span className={_className} style={{ ...cus }}>
            <span className={`${clsPrefix}__prefix`}>{_prefix}</span>
            {inputNode}
            {type === 'password' ? pwdSuffix : <span className={`${clsPrefix}__suffix`}>{_suffix}</span>}
          </span>
          {addonAfterNode}
          {errorNode}
        </div>
      )
    }
  }
)
Input.defaultProps = {
  isDisabled: false,
  isError: false,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
  size: 'middle',
}
export default Input
