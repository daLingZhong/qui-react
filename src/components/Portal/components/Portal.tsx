import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { canUseDOM, createNode, removeNode } from '../utils'
import { QPortalInter } from '../interface'

const Portal = React.forwardRef<any, QPortalInter>(({ children, container, style, className }, ref) => {
  const defNode = React.useRef(null)
  let node: Element

  React.useEffect(() => {
    return () => {
      if (defNode.current) {
        removeNode(defNode.current)
      }
      defNode.current = null
    }
  }, [])

  if (!canUseDOM) {
    return null
  }

  if (container) {
    node = container
  }

  if (!node && !defNode.current) {
    defNode.current = createNode(document.body)
  }

  return ReactDOM.createPortal(
    <div style={style} className={className} ref={ref}>
      {children}
    </div>,
    node || defNode.current
  )
})

export default Portal
