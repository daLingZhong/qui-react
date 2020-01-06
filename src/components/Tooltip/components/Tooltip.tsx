import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import { PortalWithState } from '../../Portal'
import { CSSTransition } from '../../Animate'
import { clsPrefix } from '../common'
import { ITooltip } from '../interface'

import '../styles/tooltip.scss'

const Tooltip: React.FC<ITooltip> = (props) => {
  const {
    children,
    message,
    tipClassname,
    tipStyle,
    placement,
    container,
    onClose,
    onVisible,
    trigger,
    mouseEnterDelay,
    mouseLeaveDelay,
    triggerStyle,
  } = props
  const isHover = trigger === 'hover'

  function enterDelayFun(e: any, openFun) {
    // https://reactjs.org/docs/events.html#event-pooling
    e.persist()
    if (mouseEnterDelay) {
      setTimeout(() => {
        openFun(e)
      }, mouseEnterDelay)
    } else {
      openFun(e)
    }
  }

  function leaveDelayFun(closeFun) {
    if (mouseLeaveDelay) {
      setTimeout(() => {
        closeFun()
      }, mouseLeaveDelay)
    } else {
      closeFun()
    }
  }

  return (
    <PortalWithState
      closeOnOutsideClick
      position={placement}
      trigger={isHover ? 'hover' : 'click'}
      container={container}
      onClose={onClose}
      onOpen={onVisible}
    >
      {({ portal, isOpen, openPortal, closePortal }) => {
        return (
          <div style={{ display: 'inline-block', ...triggerStyle }}>
            {React.cloneElement(children as any, {
              onMouseEnter: isHover ? (e) => enterDelayFun(e, openPortal) : noop,
              onMouseLeave: isHover ? () => leaveDelayFun(closePortal) : noop,
              onFocus: trigger === 'focus' ? (e) => enterDelayFun(e, openPortal) : noop,
              onBlur: trigger === 'focus' ? () => leaveDelayFun(closePortal) : noop,
              onClick: trigger === 'click' ? (e) => enterDelayFun(e, openPortal) : noop,
            })}

            {portal(
              <CSSTransition in={isOpen} timeout={280} classNames={`${clsPrefix}-animate`} unmountOnExit={true}>
                <div
                  onMouseEnter={openPortal}
                  onMouseLeave={() => {
                    if (mouseLeaveDelay && isHover) {
                      setTimeout(() => {
                        closePortal()
                      }, mouseLeaveDelay)
                    } else {
                      closePortal()
                    }
                  }}
                  className={cls(`${clsPrefix}__message`, `${clsPrefix}__message-${placement}`, tipClassname)}
                  style={tipStyle}
                >
                  <div className={cls(`${clsPrefix}__arrow`, `${clsPrefix}__arrow-${placement}`)} />
                  {message}
                </div>
              </CSSTransition>
            )}
          </div>
        )
      }}
    </PortalWithState>
  )
}
Tooltip.defaultProps = {
  placement: 'top',
  onVisible: noop,
  onClose: noop,
  trigger: 'hover',
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0,
  defaultVisible: false,
}
export default Tooltip
