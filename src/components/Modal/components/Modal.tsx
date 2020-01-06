import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import { KEYCODE } from '@/constants/common'
import Icon from '@/components/Icon'
import Button from '@/components/Button'
import { CSSTransition } from '@/components/Animate'
import { Portal } from '@/components/Portal'

import { clsPrefix } from '../common'
import { QModalInter } from '../interface'
import { info, confirm } from './func'

import '../styles/modal.scss'

const Modal: QModalInter = (props) => {
  const {
    isVisible,
    mask,
    maskClosable,
    onClose,
    title,
    keyboard,
    footer,
    onOk,
    onCancel,
    children,
    width,
    style,
    className,
    closeIcon,
    cancelButton,
    okText,
    cancelText,
    okButtonProps,
    cancelButtonProps,
    center,
    container,
  } = props
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    setVisible(isVisible)
  }, [isVisible])

  React.useEffect(() => {
    const node_body = document.body

    setTimeout(() => {
      const list = document.querySelectorAll(`.${clsPrefix}__wrapper`)

      if (visible) {
        node_body.style.overflow = 'hidden'
      }

      if (!visible && list.length === 0) {
        ;(node_body as any).style = {}
      }
    }, 300)

    return () => {
      setTimeout(() => {
        const list = document.querySelectorAll(`.${clsPrefix}__wrapper`)

        if (list.length === 0) {
          ;(node_body as any).style = {}
        }
      }, 300)
    }
  }, [visible])

  React.useEffect(() => {
    if (keyboard) {
      document.addEventListener('keydown', handleKeyClose)
    }

    return () => document.removeEventListener('keydown', handleKeyClose)
  }, [visible, keyboard])

  function handleKeyClose(e: KeyboardEvent) {
    if (e.keyCode === KEYCODE.ESC && keyboard) {
      onClose()
    }
  }

  return (
    <Portal key="portal" container={container}>
      <div>
        {mask && (
          <CSSTransition in={visible} timeout={400} classNames={`${clsPrefix}--animate`} unmountOnExit={true}>
            <div className={cls(`${clsPrefix}__mask`)} onClick={() => maskClosable && onClose()}></div>
          </CSSTransition>
        )}

        <CSSTransition in={visible} timeout={200} classNames={`${clsPrefix}__wrapper--animate`} unmountOnExit={true}>
          <div className={cls(`${clsPrefix}__document`, { [`${clsPrefix}__document-center`]: center })}>
            <div
              style={{ width: width, ...style }}
              className={cls(`${clsPrefix}__wrapper`, { [`${clsPrefix}__wrapper-center`]: center }, className)}
            >
              {!!title && (
                <div className={`${clsPrefix}__header`}>
                  <div className={`${clsPrefix}__header-title`}>{title}</div>
                </div>
              )}

              {closeIcon && (
                <div className={`${clsPrefix}__header-close`}>
                  <Icon icon="close" className={`${clsPrefix}__header-closeIcon`} onClick={onClose} />
                </div>
              )}

              <div className={`${clsPrefix}__content`}>{!!isVisible ? children : null}</div>

              {footer !== null && (
                <div className={`${clsPrefix}__footer`}>
                  {footer ? (
                    footer
                  ) : (
                    <div style={{ textAlign: 'right' }}>
                      {cancelButton && (
                        <Button style={{ marginRight: '8px' }} onClick={onCancel} {...cancelButtonProps}>
                          {cancelText}
                        </Button>
                      )}
                      <Button theme="primary" onClick={onOk} {...okButtonProps}>
                        {okText}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </CSSTransition>
      </div>
    </Portal>
  )
}
Modal.defaultProps = {
  isVisible: false,
  mask: true,
  maskClosable: false,
  cancelButton: true,
  center: true,
  closeIcon: true,
  keyboard: false,
  onOk: noop,
  onCancel: noop,
  onClose: noop,
  title: '信息',
  width: '500px',
  okText: '确认',
  cancelText: '取消',
  container: document.body,
}
Modal.info = info
Modal.confirm = confirm

export default Modal
