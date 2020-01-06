import * as React from 'react'
import { dropRight, noop } from 'lodash'
import cls from 'classnames'

import Icon from '@/components/Icon'
import useWave from '@/hooks/useWave'

import ButtonGroup from './ButtonGroup'
import { QButtonInter } from '../interface'
import { clsPrefix, SINGLE_ICON_PADDING, BUTTON_THEME } from '../common'
import '../styles/style.scss'

const Button: QButtonInter = React.forwardRef((props, ref) => {
  const {
    className,
    style,
    isDisabled,
    theme,
    type,
    size,
    loadingText,
    isLoading,
    icon,
    children,
    onMouseDown,
    onMouseUp,
    waveColor,
    ...res
  } = props
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const [wave, setWave] = useWave(waveColor)
  const buttonStyle: React.CSSProperties = {
    padding: !children ? SINGLE_ICON_PADDING[size] : undefined,
    minWidth: !children ? 'auto' : undefined,
  }
  const isColorTheme = dropRight(BUTTON_THEME, 3).includes(theme)

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      buttonRef.current.focus()
    },
    blur: () => {
      buttonRef.current.blur()
    },
  }))

  return (
    <button
      ref={buttonRef}
      style={{ ...buttonStyle, ...style }}
      className={cls(
        `${clsPrefix}`,
        `${clsPrefix}__${theme}`,
        {
          [`${clsPrefix}__${size}`]: theme !== 'text',
          [`${clsPrefix}__disabled`]: isDisabled,
          [`${clsPrefix}__disabled-color`]: isColorTheme && isDisabled,
          [`${clsPrefix}__disabled-hollow`]: (theme === 'dashed' || theme === 'normal') && isDisabled,
          [`${clsPrefix}__disabled-text`]: theme === 'text' && isDisabled,
          [`${clsPrefix}__loading`]: isLoading,
          [`${clsPrefix}__wave-${theme}`]: wave && theme !== 'text' && !waveColor,
          [`${clsPrefix}__wave-cus`]: wave && theme !== 'text' && waveColor,
        },
        className
      )}
      disabled={isDisabled || isLoading}
      onMouseDown={(e) => {
        setWave(false)
        onMouseDown(e)
      }}
      onMouseUp={(e) => {
        setWave(true)
        onMouseUp(e)
      }}
      type={type}
      {...res}
    >
      {isLoading ? (
        <React.Fragment>
          <div
            className={cls(`${clsPrefix}__loading__icon`, {
              [`${clsPrefix}__loading__icon-single`]: !children,
              [`${clsPrefix}__loading__icon-color`]: isColorTheme,
            })}
          />
          {!!children && (
            <span className={`${clsPrefix}__loading-text`}>
              {loadingText} <span className={`${clsPrefix}__loading-dotting`}></span>
            </span>
          )}
        </React.Fragment>
      ) : (
        <span style={{ verticalAlign: 'bottom' }}>
          {icon && (
            <Icon
              icon={icon}
              className={cls(`${clsPrefix}__icon`, {
                [`${clsPrefix}__icon-single`]: !children,
              })}
            />
          )}
          {children}
        </span>
      )}
    </button>
  )
})
Button.defaultProps = {
  size: 'medium',
  theme: 'normal',
  type: 'button',
  isDisabled: false,
  isLoading: false,
  loadingText: '加载中',
  icon: '',
  waveColor: null,
  onMouseUp: noop,
  onMouseDown: noop,
}
Button.Group = ButtonGroup

export default Button
