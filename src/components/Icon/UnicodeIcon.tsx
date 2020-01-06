import * as React from 'react'
import * as classNames from 'classnames'

import { clsnamePrefix } from '@/var'

import './index.scss'
import { BaseIconProps, baseIconPropTypes, baseIconDefaultProps } from './interface'

const UnicodeIcon: React.SFC<BaseIconProps> = React.memo(({ icon, isSpin, className, ...rest }) => (
  <span
    className={classNames(`${clsnamePrefix}-icon`, className, { [`${clsnamePrefix}-icon--spinning`]: isSpin })}
    {...rest}
    dangerouslySetInnerHTML={{ __html: icon }}
  />
))

UnicodeIcon.propTypes = baseIconPropTypes

UnicodeIcon.defaultProps = baseIconDefaultProps

export default UnicodeIcon
