import * as React from 'react'
import { noop } from 'lodash'
import cls from 'classnames'

import Icon from '@/components/Icon'

import { ITextAreaInter } from '../interface'
import { clsPrefixText } from '../common'

const Textarea = React.forwardRef<{ focus: () => void; blur: () => void }, ITextAreaInter>((props, ref) => {
  const { className, isError, errorText, allowClear, onClear, style, disabled, ...res } = props
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      textareaRef.current.focus()
    },
    blur: () => {
      textareaRef.current.blur()
    },
    select: () => {
      textareaRef.current.select()
    },
  }))

  return (
    <span className={cls(`${clsPrefixText}__wrapper`, className)} style={style}>
      <textarea
        ref={textareaRef}
        className={cls(clsPrefixText, {
          [`${clsPrefixText}__clean-padding`]: allowClear,
          [`${clsPrefixText}-error`]: isError,
          [`${clsPrefixText}-focus`]: !isError,
        })}
        disabled={disabled}
        {...res}
      />
      {allowClear && !disabled && <Icon icon="close-circle" className={`${clsPrefixText}__clean`} onClick={onClear} />}
      {isError && <span className={`${clsPrefixText}__errorText`}>{errorText}</span>}
    </span>
  )
})
Textarea.defaultProps = {
  onClear: noop,
}
export default Textarea
