import * as React from 'react'
import * as ReactDOM from 'react-dom'
import cls from 'classnames'
import { noop, drop } from 'lodash'

import { CSSTransition, TransitionGroup } from '../../Animate'
import Message from './Message'
import { MessageProps } from '../interface'
import { buildUuid, clsPrefix } from '../common'

export interface PlacementProps {
  con_class?: string
  container?: HTMLElement
}
export type NoticeFun = (notice: MessageProps) => void
export type NoticeRefAttributes = {
  addNotice: NoticeFun
  updateNotice: NoticeFun
  removeNotice: (id: string) => void
  removeAll: () => void
  destroy: () => void
}
type PlacementRefInter = React.ForwardRefExoticComponent<PlacementProps & React.RefAttributes<NoticeRefAttributes>>
interface PlacementInter extends PlacementRefInter {
  newPlacement?: (arg: MessageProps & PlacementProps, callback: (func: NoticeRefAttributes) => void) => void
}

let seed = 0
const Placement: PlacementInter = React.forwardRef(({ con_class, container }, ref) => {
  const [notices, setNotices] = React.useState<MessageProps[]>([])
  const _notices = React.useRef([])

  const addNotice: NoticeFun = (notice) => {
    const uuid = notice.uuid || buildUuid(seed++)
    const findIndex = notices.findIndex((item) => item.uuid === uuid)

    if (findIndex !== -1) {
      throw new Error(`The same uuid already exists, please change a uuid value : ${uuid}`)
    } else {
      // 当整体notice数量等于5时，默认需要移除第一个notice才可以加入新的项
      _notices.current = [...(notices.length === 5 ? drop(notices) : notices), { ...notice, uuid: uuid }]
      setNotices(_notices.current)
    }
  }

  const updateNotice: NoticeFun = (notice) => {
    const uuid = notice.uuid
    const findIndex = notices.findIndex((item) => item.uuid === uuid)

    if (findIndex === -1) {
      throw new Error(`The uuid does not exist, please check uuid value : ${uuid}`)
    } else {
      _notices.current = [...notices.slice(0, findIndex), notice, ...notices.slice(findIndex + 1)]
      setNotices(_notices.current)
    }
  }

  const removeNotice = (uuid: string) => {
    const findIndex = notices.findIndex((item) => item.uuid === uuid)

    if (findIndex > -1) {
      _notices.current = _notices.current.filter((item) => item.uuid !== uuid)
      setNotices(_notices.current)
    }
  }

  const removeAll = () => {
    _notices.current = []
    setNotices(_notices.current)
  }

  React.useImperativeHandle(
    ref,
    () => ({
      addNotice: (config) => {
        addNotice(config)
      },
      updateNotice: (config) => {
        updateNotice(config)
      },
      removeNotice: (key) => {
        removeNotice(key)
      },
      removeAll: removeAll,
      destroy: noop,
    }),
    [notices]
  )

  return (
    <TransitionGroup className={cls(`${clsPrefix}`, con_class)}>
      {notices.map((item) => (
        <CSSTransition key={item.uuid} classNames={`${clsPrefix}__notice--fade`} timeout={{ enter: 300, exit: 240 }}>
          <Message {...item} onRemove={removeNotice} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
})
Placement.newPlacement = (arg = {}, callback = noop) => {
  const { container, ...props } = arg
  const div = document.createElement('div')
  const root = container || document.body
  const ref = React.createRef<NoticeRefAttributes>()

  root.appendChild(div)
  ReactDOM.render(<Placement {...props} ref={ref} />, div, () => {
    callback({
      addNotice: (props) => ref.current.addNotice(props),
      updateNotice: (props) => ref.current.updateNotice(props),
      removeNotice: (id) => ref.current.removeNotice(id),
      removeAll: ref.current.removeAll,
      destroy: () => {
        ReactDOM.unmountComponentAtNode(div)
        div.parentNode.removeChild(div)
      },
    })
  })
}

export default Placement
