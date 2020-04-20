import * as React from 'react'

import { message } from '../index'
import DemoCard from '@/page/components/DemoCard'
import Button from '../Button'

const MessageExample = () => {
  return (
    <div>
      <DemoCard title="普通提示" des="信息提醒反馈。" id="components-message-demo-basic">
        <Button
          onClick={() => {
            message.info({
              message: 'This is a normal message',
            })
          }}
        >
          Display normal message
        </Button>
      </DemoCard>

      <DemoCard title="其他提示类型" des="包括成功、失败、警告。" id="components-message-demo-type">
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => {
            message.success({
              message: 'This is a success message',
            })
          }}
        >
          Success
        </Button>
        <Button
          style={{ marginRight: '10px' }}
          onClick={() => {
            message.error({
              message: 'This is a error message',
            })
          }}
        >
          Error
        </Button>
        <Button
          onClick={() => {
            message.warning({
              message: 'This is a warning message',
            })
          }}
        >
          Warning
        </Button>
      </DemoCard>

      <DemoCard
        title="加载中"
        des="可以设置 isLoadingAlive 属性来决定是否在 Loading 期间自动关闭Message"
        id="components-message-demo-loading"
      >
        <Button
          onClick={() => {
            message.info({
              message: 'This is a loading message',
              isLoadingAlive: false,
              isLoading: true,
            })
          }}
        >
          Display loading message
        </Button>
      </DemoCard>
    </div>
  )
}
export default MessageExample
