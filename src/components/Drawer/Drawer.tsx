import * as React from 'react'
import { useEffect, useState, createContext, useReducer } from 'react'
import classNames from 'classnames'

import { CSSTransition } from '@/components/Animate'
import { Portal } from '@/components/Portal'
import { drawerProps, drawerPropTypes, drawerDefaultProps, placementType, EventType, clsPrefix } from './interface'
import { usePrevious, isNumeric } from './utils'

function nestedDrawerReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { push: state.push + 1 }
    case 'decrement':
      return { push: state.push - 1 }
    default:
      throw new Error()
  }
}

const DrawerContext = createContext(null)

const Drawer: React.FC<drawerProps> = React.memo((props) => {
  const {
    visible,
    onClose,
    title,
    children,
    footer,
    mask,
    maskClosable,
    closable,
    className,
    maskStyle,
    placement,
    zIndex,
    style,
    bodyStyle,
    width,
    height,
    destroyOnClose,
    transformWidth,
  } = props

  // 在多层抽屉嵌套的情况下，push 用于判断父抽屉是否需要因为子抽屉而发生位移
  const initialState = { push: 0 }
  const [state, dispatch] = useReducer(nestedDrawerReducer, initialState)
  const { push } = state
  const [container, setContainer] = useState(null)
  // 获得上一次属性
  const prevProp: drawerProps | undefined = usePrevious(props)

  // 存放父抽屉的移动位置的dispatch方法
  let parentDrawer = null

  // 创建挂载在<body>上的div
  useEffect(() => {
    const container = document.createElement('div')
    document.body.appendChild(container)
    setContainer(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  // 多重抽屉的监控逻辑
  useEffect(() => {
    if (!prevProp) {
      return
    }
    const { visible: preVisible } = prevProp
    if (preVisible !== visible && parentDrawer) {
      if (visible) {
        parentDrawer({ type: 'increment' })
      } else {
        parentDrawer({ type: 'decrement' })
      }
    }
  }, [visible])

  const close = (e: EventType) => {
    if (visible !== undefined) {
      if (onClose) {
        onClose(e)
      }
      return
    }
  }

  const handleMaskClick = (e) => {
    if (maskClosable) {
      close(e)
    }
  }

  const handleTypeOfLength = (value) => {
    return isNumeric(value) ? `${value}px` : value
  }

  const handleTransformWidth = () => {
    if (placement === 'left' || placement === 'top') {
      return handleTypeOfLength(transformWidth)
    }

    if (placement === 'right' || placement === 'bottom') {
      return `-${handleTypeOfLength(transformWidth)}`
    }
  }

  // get drawer push width or height
  const getPushTransform = () => {
    const transform = handleTransformWidth()
    if (placement === 'left' || placement === 'right') {
      return `translateX(${transform})`
    }

    if (placement === 'top' || placement === 'bottom') {
      return `translateY(${transform})`
    }
  }

  const getDrawerStyle = () => {
    return {
      zIndex,
      transform: push ? getPushTransform() : undefined,
      ...style,
    }
  }

  const renderTitle = () => {
    return (
      <div className={`${clsPrefix}__title`}>
        {typeof title === 'string' ? <span className={`${clsPrefix}__title`}>{title}</span> : title}
      </div>
    )
  }

  const renderCloseIcon = () => {
    return (
      <span className={`${clsPrefix}__close`} onClick={handleMaskClick}>
        x
      </span>
    )
  }

  const renderHeader = () => {
    if (!title && !closable) {
      return null
    }

    const headerClassName = title ? `${clsPrefix}__header` : `${clsPrefix}__header-no-title`

    return (
      <div className={headerClassName}>
        {title && renderTitle()}
        {closable && renderCloseIcon()}
      </div>
    )
  }

  const renderFooter = () => {
    if (!footer) {
      return null
    }

    return <div className={`${clsPrefix}__footer`}>{footer}</div>
  }

  const renderBody = () => {
    const offsetStyle: React.CSSProperties = {}
    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = handleTypeOfLength(width)
    } else {
      offsetStyle.height = handleTypeOfLength(height)
    }

    return (
      <CSSTransition in={visible} classNames={`${clsPrefix}--fade`} timeout={300} unmountOnExit={destroyOnClose}>
        <div className={classNames(`${clsPrefix}`, className)} style={getDrawerStyle()}>
          {mask && <div className={`${clsPrefix}__mask`} style={maskStyle} onClick={handleMaskClick} />}
          <div className={`${clsPrefix}__wrapper`} style={{ ...offsetStyle }} data-drawer-placement={placement}>
            <div className={`${clsPrefix}__content`}>
              {renderHeader()}
              <div className={`${clsPrefix}__body`} style={bodyStyle}>
                {children}
              </div>
              {renderFooter()}
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }

  const renderProvider = (value) => {
    parentDrawer = value
    return <DrawerContext.Provider value={dispatch}>{renderBody()}</DrawerContext.Provider>
  }

  return (
    <Portal container={container}>
      <DrawerContext.Consumer>{renderProvider}</DrawerContext.Consumer>
    </Portal>
  )
})

Drawer.propTypes = drawerPropTypes
Drawer.defaultProps = drawerDefaultProps
export default Drawer
