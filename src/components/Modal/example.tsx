import * as React from 'react'

import Modal from './components/Modal'
import Button from '../Button'
import { ButtonProps } from '../Button/interface'

const ModalExample = () => {
  const [state, setState] = React.useState(false)
  let buttonProp: ButtonProps = {
    theme: 'danger',
    isLoading: false,
    loadingText: '删除中',
  }

  return (
    <div>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=f4bcb26f-210e-442b-abd0-22cb29b7899d">
        Dark UI Design
      </a>
      <h2>Modal example</h2>
      <h3>Normal</h3>
      <Button theme="primary" onClick={() => setState(true)}>
        Open Modal
      </Button>
      <Modal isVisible={state} onClose={() => setState(false)}>
        This is a test content
      </Modal>
      <h3>Message</h3>
      <p>各种类型的信息提示，只提供一个按钮用于关闭。</p>
      <Button
        onClick={() => {
          Modal.info({
            title: 'info',
            content: 'this is info type',
          })
        }}
      >
        Info
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'error',
            content: 'this is error type',
            infoType: 'error',
          })
        }}
      >
        Error
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'success',
            content: 'this is success type',
            infoType: 'success',
          })
        }}
      >
        Success
      </Button>
      <Button
        style={{ marginLeft: '8px' }}
        onClick={() => {
          Modal.info({
            title: 'warning',
            content: 'this is warning type',
            infoType: 'warning',
          })
        }}
      >
        Warning
      </Button>
      <h3>Confirm</h3>
      <p>使用 confirm() 可以快捷地弹出确认框，提供返回方法可用于更新或销毁弹出框。</p>
      <Button
        theme="danger"
        onClick={() => {
          const { update, destory } = Modal.confirm({
            title: '删除节点',
            content: '是否删除当前节点?',
            okText: '确定',
            cancelText: '取消',
            okButtonProps: buttonProp,
            onOk: (closeFun) => {
              update({ okButtonProps: { ...buttonProp, isLoading: true } })
              setTimeout(() => {
                closeFun()
              }, 1000)
            },
          })
        }}
      >
        Confirm
      </Button>
    </div>
  )
}
export default ModalExample
