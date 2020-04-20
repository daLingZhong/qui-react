import * as React from 'react'

import Modal from './components/Modal'
import Button from '../Button'
import { ButtonProps } from '../Button/interface'
import DemoCard from '@/page/components/DemoCard'

const ModalExample = () => {
  const [state, setState] = React.useState(false)
  let buttonProp: ButtonProps = {
    theme: 'danger',
    isLoading: false,
    loadingText: '删除中',
  }

  return (
    <div>
      <DemoCard title="基本用法" des="第一个对话框。" id="components-modal-demo-basic">
        <Button theme="primary" onClick={() => setState(true)}>
          Open Modal
        </Button>
        <Modal isVisible={state} onClose={() => setState(false)}>
          This is a test content
        </Modal>
      </DemoCard>

      <DemoCard title="信息提示" des="各种类型的信息提示，只提供一个按钮用于关闭。" id="components-modal-demo-info">
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
      </DemoCard>

      <DemoCard
        title="确认对话框"
        des="命令式调用一个确认对话框，可传入回调参数并通过update函数控制其组件更新"
        id="components-modal-demo-confirm"
      >
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
      </DemoCard>
    </div>
  )
}
export default ModalExample
