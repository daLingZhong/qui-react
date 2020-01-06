import * as React from 'react'
import * as PropTypes from 'prop-types'

import './index.scss'
import { BaseIconProps, baseIconPropTypes, baseIconDefaultProps } from './interface'
import UnicodeIcon from './UnicodeIcon'
import FontClassIcon from './FontClassIcon'
import SymbolIcon from './SymbolIcon'
import iconList from './demo/iconList'

export enum IconTypeEnum {
  unicode = 'unicode',
  fontClass = 'fontClass',
  symbol = 'symbol',
}

export type IconTypes = IconTypeEnum.unicode | IconTypeEnum.fontClass | IconTypeEnum.symbol

export interface IconProps extends BaseIconProps {
  type?: IconTypes
}

const Icon: React.SFC<IconProps> = React.memo(({ type, icon, ...rest }) => {
  let RealIcon = null
  let key = ''

  switch (type) {
    case IconTypeEnum.unicode:
      RealIcon = UnicodeIcon
      key = 'unicode'
      break
    case IconTypeEnum.fontClass:
      RealIcon = FontClassIcon
      key = 'fontClass'
      break
    case IconTypeEnum.symbol:
      RealIcon = SymbolIcon
      key = 'symbol'
      break
    default:
      break
  }

  if (RealIcon === null) {
    return (
      <span>
        {`error: wrong icon type, please set one of ${IconTypeEnum.unicode}, ${IconTypeEnum.fontClass}, ${IconTypeEnum.symbol}`}
      </span>
    )
  }
  checkIcon(key)

  function checkIcon(key: string) {
    if (key && !iconList.find((item) => item[key] === icon)) {
      console.warn(`warning: ${icon} is not available in support list`)
    }
  }

  return <RealIcon icon={icon} {...rest} />
})

Icon.propTypes = Object.assign(
  {
    type: PropTypes.oneOf([IconTypeEnum.unicode, IconTypeEnum.fontClass, IconTypeEnum.symbol]),
  },
  baseIconPropTypes
)

Icon.defaultProps = Object.assign(
  {
    type: IconTypeEnum.fontClass,
  },
  baseIconDefaultProps
)

export default Icon
