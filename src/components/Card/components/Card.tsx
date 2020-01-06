import * as React from 'react'
import cls from 'classnames'

import { CardInter } from '../interface'
import { clsPrefix } from '../common'

import '../styles/card.scss'

const Card: React.FC<CardInter> = (props) => {
  const {
    title,
    hasBorder,
    hasColorBar,
    hasShadow,
    hoverable,
    children,
    className,
    footer,
    footerClass,
    footerStyle,
    ...res
  } = props
  return (
    <div
      className={cls(
        clsPrefix,
        {
          [`${clsPrefix}-bordered`]: hasBorder,
          [`${clsPrefix}-shadow`]: hasShadow,
          [`${clsPrefix}-bordered-hover`]: hoverable && hasShadow,
        },
        className
      )}
      {...res}
    >
      {!!title && (
        <div className={cls(`${clsPrefix}__header`, { [`${clsPrefix}__header-colorBar`]: hasColorBar })}>
          <div className={`${clsPrefix}__title`}>{title}</div>
        </div>
      )}

      <div className={cls(`${clsPrefix}__content`, { [`${clsPrefix}__content-padding`]: !!title })}>{children}</div>

      {!!footer && (
        <div style={footerStyle} className={cls(`${clsPrefix}__footer`, footerClass)}>
          {footer}
        </div>
      )}
    </div>
  )
}
Card.defaultProps = {
  hasColorBar: true,
  hasBorder: false,
  hoverable: false,
  hasShadow: true,
}

export default Card
