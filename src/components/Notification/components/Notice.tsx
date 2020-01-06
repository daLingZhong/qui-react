import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import Icon from '../../Icon'
import { NoticeProps } from '../interface'
import { clsPrefix, NOTICE_DURATION } from '../common'

const Notice: React.FC<NoticeProps> = (props) => {
  const {
    uuid,
    message,
    title,
    className,
    type,
    isClosable,
    duration,
    onRemove,
    style,
    placement,
    isReverse,
    onClose,
  } = props
  const closeTimerRef = React.useRef<NodeJS.Timeout>(null)
  const isLeft = (placement === 'bottomLeft' || placement === 'topLeft') && isReverse

  React.useEffect(() => {
    restartCloseTimer()

    return () => clearCloseTimer()
  }, [duration])

  function startCloseTimer() {
    if (duration) {
      closeTimerRef.current = global.setInterval(() => {
        onRemove(uuid)
      }, duration * 1000)
    }
  }

  function clearCloseTimer() {
    if (closeTimerRef.current) {
      clearInterval(closeTimerRef.current)
    }
  }

  function restartCloseTimer() {
    clearCloseTimer()
    startCloseTimer()
  }

  function handleClose(event: any) {
    const { uuid } = event.currentTarget.dataset
    const { onRemove } = props

    clearCloseTimer()
    onRemove(uuid)
    onClose()
  }

  return (
    <div
      className={cls(
        `${clsPrefix}__notice`,
        {
          [`${clsPrefix}__notice-left`]: isLeft,
        },
        className
      )}
      style={style}
      onMouseEnter={clearCloseTimer}
      onMouseLeave={startCloseTimer}
      data-notification-type={type}
    >
      <div
        className={cls(`${clsPrefix}__content`, {
          [`${clsPrefix}__content-left`]: isLeft,
        })}
      >
        <div
          className={cls(`${clsPrefix}__title`, {
            [`${clsPrefix}__title-left`]: isLeft,
          })}
        >
          {title}
        </div>
        <div className={`${clsPrefix}__message`} style={{ WebkitBoxOrient: 'vertical' }}>
          {message}
        </div>
      </div>

      {isClosable && (
        <Icon
          tabIndex={0}
          icon="close"
          className={cls(`${clsPrefix}__close`, {
            [`${clsPrefix}__close-left`]: isLeft,
          })}
          data-uuid={uuid}
          onClick={handleClose}
        />
      )}
    </div>
  )
}
Notice.defaultProps = {
  duration: NOTICE_DURATION,
  onRemove: noop,
  onClose: noop,
  isClosable: true,
  isReverse: true,
}
export default Notice
