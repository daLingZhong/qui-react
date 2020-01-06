import Placement, { PlacementProps, NoticeRefAttributes } from './Placement'
import { NoticeProps } from '../interface'
import { NOTICE_PLACEMENT, NOTICE_DURATION, NOTICE_TYPES } from '../common'

type NoticeOpenFun = (arg: NoticeProps & PlacementProps) => NoticeRefAttributes
type NotificationApi = {
  open: NoticeOpenFun
  close: (uuid: string) => void
  destory: () => void
  info?: NoticeOpenFun
  success?: NoticeOpenFun
  warning?: NoticeOpenFun
  error?: NoticeOpenFun
}

const notificationPlacement: { [props: string]: NoticeRefAttributes } = {}
const defaultProps = {
  container: document.body,
  placement: NOTICE_PLACEMENT[0],
  duration: NOTICE_DURATION,
}

const api: NotificationApi = {
  open: (arg) => {
    const props = { ...defaultProps, ...arg }
    const { container, placement, duration, ...restProps } = props
    const cacheKey = `Notification-${placement}`
    const instance = notificationPlacement[cacheKey]

    if (!instance) {
      Placement.newPlacement(props, (ref) => {
        ref.addNotice({ ...props })
        notificationPlacement[cacheKey] = ref
      })
    } else {
      instance.addNotice({ ...restProps })
    }

    return notificationPlacement[cacheKey]
  },
  close: (uuid) => {
    for (const cacheKey of Object.keys(notificationPlacement)) {
      notificationPlacement[cacheKey].removeNotice(uuid)
    }
  },
  destory: () => {
    for (const cacheKey of Object.keys(notificationPlacement)) {
      notificationPlacement[cacheKey].destroy()
      delete notificationPlacement[cacheKey]
    }
  },
}

for (const type of NOTICE_TYPES) {
  api[type] = (args) => {
    return api.open({ ...args, type: type })
  }
}

export default api
