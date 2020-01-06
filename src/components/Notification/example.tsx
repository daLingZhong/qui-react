import * as React from 'react'

import Button from '../Button'
import { Select, Option } from '../Select'
import Checkbox from '../Checkbox'
import notification from './index'
import { NoticePlacement } from './interface'
import { NOTICE_PLACEMENT } from './common'

const NoticeExample = () => {
  const [pos, setPos] = React.useState<NoticePlacement>('topRight')
  const [reserve, setReserve] = React.useState(false)

  return (
    <div>
      <h2>Notification Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=74da6242-c5a7-44ca-8446-f7a6436da835">
        Dark UI Design
      </a>
      <h3>Normal</h3>
      <p>最简单的方法，4.5秒后自动关闭</p>
      <Button
        onClick={() => {
          notification.open({
            title: 'test',
            message: 'This is a test message',
          })
        }}
      >
        Open the notification box
      </Button>
      <h3>Duration</h3>
      <p>自定义延时，如果设为 0或null 则取消自动关闭</p>
      <Button
        onClick={() => {
          notification.open({
            title: 'Notification Title',
            message:
              'I will never close automatically. I will be close automatically. I will never close automatically.',
            duration: null,
          })
        }}
      >
        Open the notification box
      </Button>
      <h3>Type</h3>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => {
          notification.success({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          })
        }}
      >
        Success
      </Button>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => {
          notification.info({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          })
        }}
      >
        Info
      </Button>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => {
          notification.warning({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          })
        }}
      >
        Warning
      </Button>
      <Button
        onClick={() => {
          notification.error({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          })
        }}
      >
        Error
      </Button>

      <h3>Position</h3>
      <Select
        defaultValue={{ value: NOTICE_PLACEMENT[0], label: NOTICE_PLACEMENT[0] }}
        onChange={(nv) => setPos(nv as any)}
      >
        {NOTICE_PLACEMENT.map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <Button
        theme="primary"
        style={{ marginLeft: '10px' }}
        onClick={() => {
          notification.info({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: pos,
          })
        }}
      >
        Open the notification box
      </Button>

      <h3>Reverse</h3>
      <p>在相反位置是否反转显示内容,默认开启</p>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => {
          notification.open({
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            placement: 'topLeft',
            isReverse: reserve,
          })
        }}
      >
        Open the notification box
      </Button>
      <Checkbox isChecked={reserve} onChange={(e, nv) => setReserve(nv)}>
        Reserve
      </Checkbox>

      <h3>Update</h3>
      <p>可通过自定义uuid来更新</p>
      <Button
        style={{ marginRight: '10px' }}
        onClick={() => {
          const id = 'update'
          const { updateNotice, destroy } = notification.open({
            uuid: id,
            title: 'Notification Title',
            message:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
          })

          setTimeout(() => {
            updateNotice({
              uuid: id,
              title: 'Update Title',
              message: 'This is updated message',
            })
          }, 2000)
        }}
      >
        Open the notification box
      </Button>
    </div>
  )
}

export default NoticeExample
