import * as React from 'react'
import * as classNames from 'classnames'

import { clsnamePrefix } from '@/var'

import './index.scss'
import './iconfont.js'
import { BaseIconProps, baseIconPropTypes, baseIconDefaultProps } from './interface'

const SymbolIcon: React.SFC<BaseIconProps> = React.memo(({ icon, isSpin, className, ...rest }) => (
  <svg
    className={classNames(`${clsnamePrefix}-icon`, `${clsnamePrefix}-icon-symbol`, className, {
      [`${clsnamePrefix}-icon--spinning`]: isSpin,
    })}
    aria-hidden="true"
    {...rest}
  >
    <use xlinkHref={`#icon-${icon}`} />
  </svg>
))

SymbolIcon.propTypes = baseIconPropTypes

SymbolIcon.defaultProps = baseIconDefaultProps

export default SymbolIcon
