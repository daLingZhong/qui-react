import Placement, { PlacementProps, NoticeRefAttributes } from './Placement'
import { MessageProps } from '../interface'
import { MESSAGE_ICON, NOTICE_DURATION } from '../common'

type MessageOpenFun = (arg: MessageProps & PlacementProps) => NoticeRefAttributes
type NotificationApi = {
  close: (uuid: string) => void
  destory: () => void
  info?: MessageOpenFun
  success?: MessageOpenFun
  warning?: MessageOpenFun
  error?: MessageOpenFun
}

let messagePlacement: NoticeRefAttributes = null
const defaultProps = {
  container: document.body,
  duration: NOTICE_DURATION,
}
const open: MessageOpenFun = (arg) => {
  const props = { ...defaultProps, ...arg }
  const { container, duration, ...restProps } = props
  if (!messagePlacement) {
    Placement.newPlacement(props, (ref) => {
      ref.addNotice({ ...props })
      messagePlacement = ref
    })
  } else {
    messagePlacement.addNotice({ ...restProps })
  }

  return messagePlacement
}
const api: NotificationApi = {
  close: (uuid) => messagePlacement.removeNotice(uuid),
  destory: () => {
    messagePlacement.destroy()
    messagePlacement = null
  },
}

for (const type of Object.keys(MESSAGE_ICON)) {
  api[type] = (args) => {
    return open({ ...args, type: type })
  }
}

export default api
