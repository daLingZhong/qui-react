import * as React from 'react'
import * as PropTypes from 'prop-types'
import * as classNames from 'classnames'

import noop from '@/utils/noop'
import { CSSTransition } from '@/components/Animate'

import './index.scss'
import { compClassName, AlertDumbProps, alertDumbPropTypes, alertDumbDefaultProps } from './common'
import AlertDumb from './AlertDumb'

export interface AlertProps extends AlertDumbProps {
  onAfterClose?: (node: HTMLElement) => void
}

const Alert: React.SFC<AlertProps> = React.memo(({ onClose, onAfterClose, ...rest }) => {
  const [isVisible, setVisible] = React.useState(true)
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(false)
    onClose(event)
  }

  return (
    <CSSTransition
      in={isVisible}
      timeout={300}
      onExited={onAfterClose}
      classNames={classNames(`${compClassName}--animate`)}
      unmountOnExit={true}
    >
      <AlertDumb {...rest} onClose={handleClose} />
    </CSSTransition>
  )
})

Alert.propTypes = Object.assign(
  {
    onAfterClose: PropTypes.func,
  },
  alertDumbPropTypes
)

Alert.defaultProps = Object.assign(
  {
    type: noop,
  },
  alertDumbDefaultProps
)

export default Alert
