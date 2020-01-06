import * as PropTypes from 'prop-types'

import { clsnamePrefix } from '@/var'
import noop from '@/utils/noop'

export const compClassName = `${clsnamePrefix}-alert`

export enum AlertTypeEnum {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export type AlertTypes = AlertTypeEnum.info | AlertTypeEnum.success | AlertTypeEnum.warning | AlertTypeEnum.error

export interface AlertDumbProps {
  [key: string]: any
  message: string | React.ReactNode
  title?: string | React.ReactNode
  type?: AlertTypes
  hasIcon?: boolean
  icon?: string
  isClosable?: boolean
  className?: string
  onClose?: (event: React.MouseEvent<HTMLElement>) => void
}

export const alertDumbPropTypes = {
  message: PropTypes.node.isRequired,
  title: PropTypes.node,
  type: PropTypes.oneOf([AlertTypeEnum.info, AlertTypeEnum.success, AlertTypeEnum.warning, AlertTypeEnum.error]),
  hasIcon: PropTypes.bool,
  icon: PropTypes.string,
  isClosable: PropTypes.bool,
  className: PropTypes.string,
  onClose: PropTypes.func,
}

export const alertDumbDefaultProps = {
  type: AlertTypeEnum.info,
  hasIcon: false,
  isClosable: false,
  onClose: noop,
}
