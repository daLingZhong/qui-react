import * as React from 'react'
import classNames from 'classnames'
import { noop } from 'lodash'

import { clsnamePrefix } from '@/var'
import useWave from '@/hooks/useWave'

import { QSwitchInter } from '../interface'

import '../styles/switch.scss'

const clsPrefix = `${clsnamePrefix}-switch`

const Switch = React.forwardRef<{ focus: () => void; blur: () => void }, QSwitchInter>((props, ref) => {
  const {
    className,
    style,
    size,
    isChecked,
    isDisable,
    onChange,
    checkedContent,
    unCheckedContent,
    isAutoFocus,
    isLoading,
    onMouseDown,
    onMouseUp,
    waveColor,
  } = props
  const [wave, setWave] = useWave(waveColor)
  const switchRef = React.useRef(null)
  const isDisabled = isDisable || isLoading

  React.useEffect(() => {
    if (isAutoFocus && !isDisable) {
      switchRef.current.focus()
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isChecked])

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      switchRef.current.focus()
    },
    blur: () => {
      switchRef.current.blur()
    },
  }))

  function handleKeyDown(event: KeyboardEvent) {
    if (document.activeElement !== switchRef.current) {
      return
    }

    if (event.keyCode === 37) {
      // Left
      onChange(false, event)
    } else if (event.keyCode === 39) {
      // Right
      onChange(true, event)
    } else if (event.keyCode === 13) {
      // Enter
      event.preventDefault()
      onChange(!isChecked, event)
    }
  }

  return (
    <button
      ref={switchRef}
      type="button"
      role="switch"
      data-switch-size={size}
      aria-checked={isChecked}
      disabled={isDisabled}
      onMouseDown={(e) => {
        onMouseDown(e)
        setWave(false)
      }}
      onMouseUp={(e) => {
        onMouseUp(e)
        setWave(true)
      }}
      className={classNames(
        `${clsPrefix}`,
        {
          [`${clsPrefix}--checked`]: isChecked,
          [`${clsPrefix}--disabled`]: isDisabled,
          [`${clsPrefix}--wave`]: wave && !waveColor,
          [`${clsPrefix}--wave-cus`]: wave && waveColor,
        },
        className
      )}
      style={style}
      onClick={(e) => onChange(!isChecked, e)}
    >
      {isLoading && <div className={`${clsPrefix}__loading`} />}
      <span className={`${clsPrefix}__inner`}>{isChecked ? checkedContent : unCheckedContent}</span>
    </button>
  )
})

Switch.defaultProps = {
  onChange: noop,
  onMouseDown: noop,
  onMouseUp: noop,
  isChecked: false,
  isDisable: false,
  isLoading: false,
  isAutoFocus: false,
  size: 'middle',
  checkedContent: '',
  unCheckedContent: '',
  waveColor: null,
}

export default Switch
