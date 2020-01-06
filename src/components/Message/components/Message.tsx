import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import Icon from '../../Icon'
import { clsPrefix, MESSAGE_ICON, NOTICE_DURATION } from '../common'
import { MessageProps } from '../interface'

import '../styles/message.scss'

const Message: React.FC<MessageProps> = (props) => {
  const { message, type, isLoading, loadingText, uuid, onRemove, duration, className, style, isLoadingAlive } = props
  const closeTimerRef = React.useRef<NodeJS.Timeout>(null)
  const couldClose = isLoading ? !isLoadingAlive : true

  React.useEffect(() => {
    restartCloseTimer()

    return () => clearCloseTimer()
  }, [duration])

  function startCloseTimer() {
    if (duration && couldClose) {
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

  return (
    <div className={`${clsPrefix}__line`}>
      <div
        className={cls(`${clsPrefix}__notice`, className)}
        style={style}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={startCloseTimer}
      >
        {isLoading ? (
          <div className={cls(`${clsPrefix}__loading-icon`)} />
        ) : (
          <div className={cls(`${clsPrefix}__title`, `${clsPrefix}__title-${type}`)}>
            <Icon icon={MESSAGE_ICON[type]} />
          </div>
        )}

        <div className={`${clsPrefix}__content`}>
          <span>{isLoading ? loadingText : message}</span>
          {isLoading && <span className={`${clsPrefix}__loading-dotting`} />}
        </div>
      </div>
    </div>
  )
}
Message.defaultProps = {
  type: 'info',
  loadingText: '正在加载中',
  isLoading: false,
  isLoadingAlive: true,
  duration: NOTICE_DURATION,
  onRemove: noop,
}

export default Message
