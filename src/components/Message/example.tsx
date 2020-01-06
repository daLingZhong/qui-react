import * as React from 'react'

import { message } from '../index'
import Button from '../Button'

const MessageExample = () => {
  return (
    <div>
      <h2>Message example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=74da6242-c5a7-44ca-8446-f7a6436da835">
        Dark UI Design
      </a>
      <h3>Normal</h3>
      <Button
        onClick={() => {
          message.info({
            message: 'This is a normal message',
          })
        }}
      >
        Display normal message
      </Button>

      <h3>Type</h3>
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

      <h3>Loading</h3>
      <p>
        可以设置 <i>isLoadingAlive</i> 属性来决定是否在 <i>Loading</i> 期间自动关闭 <i>Message</i>
      </p>
      <Button
        onClick={() => {
          message.info({
            message: 'This is a loading message',
            // isLoadingAlive: false,
            isLoading: true,
          })
        }}
      >
        Display loading message
      </Button>
    </div>
  )
}
export default MessageExample
