import * as React from 'react'
import * as classNames from 'classnames'

import { clsnamePrefix } from '@/var'

import './index.scss'
import { BaseIconProps, baseIconPropTypes, baseIconDefaultProps } from './interface'

const FontClassIcon: React.SFC<BaseIconProps> = React.memo(({ icon, isSpin, className, ...rest }) => (
  <span
    className={classNames(`${clsnamePrefix}-icon`, `${clsnamePrefix}-icon-${icon}`, className, {
      [`${clsnamePrefix}-icon--spinning`]: isSpin,
    })}
    {...rest}
  />
))

FontClassIcon.propTypes = baseIconPropTypes

FontClassIcon.defaultProps = baseIconDefaultProps

export default FontClassIcon
