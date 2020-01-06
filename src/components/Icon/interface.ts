import * as PropTypes from 'prop-types'

export interface BaseIconProps {
  [key: string]: any
  icon: string
  isSpin?: boolean
  className?: string
}

export const baseIconPropTypes = {
  icon: PropTypes.string.isRequired,
  isSpin: PropTypes.bool,
  className: PropTypes.string,
}

export const baseIconDefaultProps = {
  isSpin: false,
}
