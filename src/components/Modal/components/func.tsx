import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cls from 'classnames'

import Modal from './Modal'
import Button from '../../Button'
import Icon from '../../Icon'
import { ModalInfo, ModalInfoArg, ModalConfirm, ModalConfirmArg } from '../interface'
import { clsPrefixInfo, ICON_TYPE } from '../common'

import '../styles/modal.scss'

const InfoModal: React.FC<ModalInfoArg> = (props) => {
  const {
    title,
    content,
    buttonText,
    isVisible,
    close,
    onOk,
    loadingText,
    infoType,
    haveIcon,
    buttonTheme,
    ...res
  } = props
  const [loading, setLoading] = React.useState(false)
  const themeType = ICON_TYPE[infoType]

  return (
    <Modal {...res} isVisible={isVisible} title={null} footer={null} onClose={close}>
      <div className={`${clsPrefixInfo}__document`}>
        {!!title && (
          <React.Fragment>
            {haveIcon && (
              <Icon
                className={cls(`${clsPrefixInfo}__icon`, `${clsPrefixInfo}__icon-${infoType}`)}
                icon={themeType.icon}
              />
            )}
            <span className={`${clsPrefixInfo}__title`}>{title}</span>
          </React.Fragment>
        )}

        <div className={`${clsPrefixInfo}__content`} style={{ marginLeft: haveIcon ? '33px' : 0 }}>
          {content}
        </div>

        <div className={`${clsPrefixInfo}__footer`}>
          <Button
            theme={buttonTheme ? buttonTheme : (themeType.button as any)}
            isLoading={loading}
            loadingText={loadingText}
            onClick={() => (onOk ? onOk(close, setLoading) : close())}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
InfoModal.defaultProps = {
  buttonText: '知道了',
  infoType: 'info',
  haveIcon: true,
}

const ConfirmModal: React.FC<ModalConfirmArg> = (props) => {
  const { close, onOk, content, isVisible, ...res } = props

  return (
    <Modal
      isVisible={isVisible}
      onClose={close}
      onOk={() => {
        onOk ? onOk(close) : close()
      }}
      onCancel={close}
      {...res}
    >
      {content}
    </Modal>
  )
}

const createContainer = () => {
  const divNode: HTMLElement = document.createElement('div')

  document.body.appendChild(divNode)
  return divNode
}

const renderFun = (config: ModalInfoArg | ModalConfirmArg, type: 'info' | 'confirm') => {
  const div = createContainer()
  let currentConfig = { ...config, close, container: div, isVisible: true }

  function close() {
    currentConfig = {
      ...currentConfig,
      isVisible: false,
    }
    render(currentConfig)
    setTimeout(() => {
      div.parentNode.removeChild(div)
    }, 500)
  }

  function update(newConfig: ModalInfoArg | ModalConfirmArg = {}) {
    currentConfig = {
      ...currentConfig,
      ...newConfig,
    }
    render(currentConfig)
  }

  function render(props: ModalInfoArg | ModalConfirmArg) {
    ReactDOM.render(
      type === 'info' ? <InfoModal {...(props as ModalInfoArg)} /> : <ConfirmModal {...(props as ModalConfirmArg)} />,
      div
    )
  }

  render(currentConfig)

  return {
    destory: close,
    update,
  }
}

export const info: ModalInfo = (config = {}) => renderFun(config, 'info')
export const confirm: ModalConfirm = (config = {}) => renderFun(config, 'confirm')
