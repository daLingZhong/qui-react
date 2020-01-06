import * as React from 'react'
import * as classNames from 'classnames'

import Icon from '@/components/Icon'

import './index.scss'
import { compClassName, AlertTypeEnum, AlertDumbProps, alertDumbPropTypes, alertDumbDefaultProps } from './common'

const ALERT_TYPE_ICON = {
  [AlertTypeEnum.info]: 'info-circle-o',
  [AlertTypeEnum.success]: 'check-circle-o',
  [AlertTypeEnum.warning]: 'exclamation-circle-o',
  [AlertTypeEnum.error]: 'close-circle-o',
}
const ALERT_TYPE_ICON_WITHOUT_TITLE = {
  [AlertTypeEnum.info]: 'info-circle',
  [AlertTypeEnum.success]: 'check-circle',
  [AlertTypeEnum.warning]: 'exclamation-circle',
  [AlertTypeEnum.error]: 'close-circle',
}

const AlertDumb: React.SFC<AlertDumbProps> = React.memo(
  ({ message, title, type, hasIcon, icon, isClosable, className, onClose, ...rest }) => {
    const hasTitle = Boolean(title)
    const typeIconMap = hasTitle ? ALERT_TYPE_ICON : ALERT_TYPE_ICON_WITHOUT_TITLE

    return (
      <section
        data-alert-type={type}
        className={classNames(compClassName, className, {
          [`${compClassName}--has-title`]: Boolean(title),
          [`${compClassName}--closable`]: isClosable,
        })}
        {...rest}
      >
        {hasIcon && (
          <div className={classNames(`${compClassName}__icon`)}>
            <Icon icon={icon ? icon : typeIconMap[type]} />
          </div>
        )}

        <div className={classNames(`${compClassName}__main`)}>
          {hasTitle && <header className={classNames(`${compClassName}__title`)}>{title}</header>}

          <div className={classNames(`${compClassName}__message`)}>{message}</div>
        </div>

        {isClosable && (
          <Icon
            icon="close"
            className={classNames(`${compClassName}__close`)}
            role="button"
            tabIndex={-1}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              onClose(event)
            }}
          />
        )}
      </section>
    )
  }
)

AlertDumb.propTypes = alertDumbPropTypes

AlertDumb.defaultProps = alertDumbDefaultProps

export default AlertDumb
