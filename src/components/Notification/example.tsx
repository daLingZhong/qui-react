import * as React from 'react'

import Button from '../Button'
import { Select, Option } from '../Select'
import Checkbox from '../Checkbox'
import notification from './index'
import { NoticePlacement } from './interface'
import { NOTICE_PLACEMENT } from './common'
import DemoCard from '@/page/components/DemoCard'

const NoticeExample = () => {
  const [pos, setPos] = React.useState<NoticePlacement>('topRight')
  const [reserve, setReserve] = React.useState(false)

  return (
    <div>
      <DemoCard title="基本" des="最简单的用法，4.5 秒后自动关闭。" id="components-notification-demo-basic">
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
      </DemoCard>

      <DemoCard
        title="延迟"
        des="自定义延时，如果设为 0或null 则取消自动关闭"
        id="components-notification-demo-duration"
      >
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
      </DemoCard>

      <DemoCard title="类型" des="共有四种类型，成功、失败、警告和普通提示" id="components-notification-demo-type">
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
      </DemoCard>

      <DemoCard
        title="位置"
        des="通知从右上角、右下角、左下角、左上角弹出。"
        id="components-notification-demo-position"
      >
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
      </DemoCard>

      <DemoCard title="翻转" des="在左边弹出时是否镜像所有内容" id="components-notification-demo-reverse">
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
      </DemoCard>

      <DemoCard title="更新" des="可通过自定义uuid来更新" id="components-notification-demo-update">
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
      </DemoCard>
    </div>
  )
}

export default NoticeExample
