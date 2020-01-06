import * as PropTypes from 'prop-types'

import { clsnamePrefix } from '@/var'
import { tuple } from './utils'

export const clsPrefix = `${clsnamePrefix}-drawer`
export type EventType = React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>
export const PlacementTypes = tuple('top', 'right', 'bottom', 'left')
export type placementType = (typeof PlacementTypes)[number]
type getContainerFunc = () => HTMLElement

export interface drawerProps {
  title?: React.ReactNode
  footer?: React.ReactNode
  onClose?: (e: EventType) => void
  visible?: boolean
  closable?: boolean
  maskClosable?: boolean
  mask?: boolean
  className?: string
  maskStyle?: React.CSSProperties
  zIndex?: number
  style?: React.CSSProperties
  bodyStyle?: React.CSSProperties
  // 不知道怎么解决元祖的定义问题
  placement?: placementType
  destroyOnClose?: boolean
  transformWidth?: number | string
  width?: number | string
  height?: number | string
  // TODO: 待实现的属性
  // afterVisibleChange?: (visible: boolean) => void
  //测试不完善
  // getContainer?: string | HTMLElement | getContainerFunc
}

export const drawerPropTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  footer: PropTypes.array,
  closable: PropTypes.bool,
  mask: PropTypes.bool,
  maskClosable: PropTypes.bool,
  className: PropTypes.string,
  maskStyle: PropTypes.object,
  style: PropTypes.object,
  zIndex: PropTypes.number,
  placement: PropTypes.oneOf(PlacementTypes),
  transformWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  destroyOnClose: PropTypes.bool,
  // afterVisibleChange: PropTypes.func,
  // getContainer: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.object as PropTypes.Requireable<HTMLElement>,
  //   PropTypes.func,
  //   PropTypes.bool,
  // ]),
}

export const drawerDefaultProps = {
  visible: false,
  onClose: () => {},
  closable: true,
  mask: true,
  maskClosable: true,
  className: '',
  maskStyle: {},
  style: {},
  placement: 'right' as placementType,
  width: 256,
  height: 256,
  transformWidth: 180,
  // destroyOnClose: true,
  // getContainer: 'body',
  // afterVisibleChange: () => {},
}
