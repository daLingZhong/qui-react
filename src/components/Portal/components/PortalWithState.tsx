import * as React from 'react'

import Portal from './Portal'
import { QPortalWithStateInter } from '../interface'

const PortalWithState = React.forwardRef<{ rePosition: () => void }, QPortalWithStateInter>((props, ref) => {
  const {
    defaultOpen,
    closeOnOutsideClick,
    closeOnEsc,
    container,
    onOpen,
    onClose,
    children,
    trigger,
    position,
    style,
    className,
  } = props
  const [isOpen, setOpen] = React.useState<boolean>(defaultOpen)
  const [portalStyle, setPortalStyle] = React.useState<React.CSSProperties>({})
  const portalRef = React.useRef<HTMLSpanElement>(null)
  const wrapRef = React.useRef<HTMLSpanElement>(null)
  let timer: NodeJS.Timeout

  React.useImperativeHandle(ref, () => ({
    rePosition: rePosition,
  }))

  React.useEffect(() => {
    if (closeOnOutsideClick) {
      document.addEventListener('click', handleOutsideMouseClick)
    }
    if (closeOnEsc) {
      document.addEventListener('keydown', handleKeydown)
    }

    return () => {
      if (closeOnOutsideClick) {
        document.removeEventListener('click', handleOutsideMouseClick)
      }
      if (closeOnEsc) {
        document.removeEventListener('keydown', handleKeydown)
      }
    }
  }, [isOpen])

  React.useLayoutEffect(() => {
    rePosition()
  }, [isOpen])

  React.useEffect(() => {
    if (isOpen) {
      onOpen()
    } else {
      onClose()
    }
  }, [isOpen])

  function wrapWithPortal(children: React.ReactNode) {
    const portalNode = (
      <Portal
        key="portal"
        style={!!position ? { display: isOpen ? 'inline-block' : 'block', ...portalStyle, ...style } : style}
        className={className}
        container={container}
        ref={portalRef}
      >
        {children}
      </Portal>
    )

    return portalNode
  }

  function rePosition() {
    if (!!position && isOpen) {
      const wrapRect = wrapRef.current ? wrapRef.current.getBoundingClientRect() : null
      const portalRect = portalRef.current ? portalRef.current.getBoundingClientRect() : null
      const style = wrapRect && portalRect ? setPosition(wrapRect, portalRect) : {}

      setPortalStyle(style)
    }
  }

  function setPosition(rect: ClientRect | DOMRect, _rect: ClientRect | DOMRect) {
    const { width, height } = rect
    const { width: _width, height: _height } = _rect

    let top = 0
    let left = 0
    let scroll = {
      x: 0,
      y: 0,
    }
    let style = {
      position: 'absolute',
      top: 0,
      left: 0,
    }

    if (container) {
      top = container.offsetTop
      left = container.offsetLeft
    } else {
      const { pageYOffset, pageXOffset } = window
      const { top: _top, left: _left } = rect

      top = _top
      left = _left
      scroll.x = pageXOffset
      scroll.y = pageYOffset
    }

    switch (position) {
      case 'topLeft':
        style.top = top - _height
        style.left = left
        break
      case 'topRight':
        style.top = top - _height
        style.left = left + width - _width
        break
      case 'top':
        style.top = top - _height
        style.left = left + width / 2 - _width / 2
        break
      case 'bottomLeft':
        style.top = top + height
        style.left = left
        break
      case 'bottomRight':
        style.top = top + height
        style.left = left + width - _width
        break
      case 'bottom':
        style.top = top + height
        style.left = left + width / 2 - _width / 2
        break
      case 'left':
        style.top = top + height / 2 - _height / 2
        style.left = left - _width
        break
      case 'leftTop':
        style.top = top
        style.left = left - _width
        break
      case 'leftBottom':
        style.top = top + height - _height
        style.left = left - _width
        break
      case 'right':
        style.top = top + height / 2 - _height / 2
        style.left = left + width
        break
      case 'rightTop':
        style.top = top
        style.left = left + width
        break
      case 'rightBottom':
        style.top = top + height - _height
        style.left = left + width
        break
    }

    return { ...style, top: style.top + scroll.y + 'px', left: style.left + scroll.x + 'px' }
  }

  function openPortal(event) {
    clearTimeout(timer)

    if (event) {
      event.stopPropagation()
    }

    if (isOpen) {
      return
    }
    setOpen(true)
  }

  function closePortal() {
    if (!isOpen) {
      return
    }

    if (trigger === 'click') {
      setOpen(false)
    } else {
      timer = global.setTimeout(() => {
        setOpen(false)
      }, 100)
    }
  }

  function handleOutsideMouseClick(event: MouseEvent) {
    if (!isOpen) {
      return
    }

    const { current } = portalRef
    const root = current ? current?.contains(event.target as any) : false

    if (root || (event.button && event.button !== 0)) {
      return
    }

    closePortal()
  }

  function handleKeydown(event: KeyboardEvent) {
    const ESCAPE_KEY_CODE = 27

    if (isOpen && event.keyCode === ESCAPE_KEY_CODE) {
      closePortal()
    }
  }

  return React.cloneElement(
    children({
      isOpen,
      openPortal: openPortal,
      closePortal: closePortal,
      portal: wrapWithPortal,
    }),
    { ref: wrapRef }
  )
})

PortalWithState.defaultProps = {
  onOpen: () => {},
  onClose: () => {},
  defaultOpen: false,
  closeOnOutsideClick: false,
  closeOnEsc: true,
  trigger: 'click',
}

export default PortalWithState
