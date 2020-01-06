import * as React from 'react'
import classNames from 'classnames'

import { clsPrefix } from '../common'
import { QTimelineItemInter } from '../interface'

import '../styles/timeline.scss'

const TimelineItem: React.FunctionComponent<QTimelineItemInter> = ({
  title,
  color,
  dot,
  children,
  isPending,
  ...restProps
}) => {
  const dotStyle = dot ? { border: 'none' } : {}

  return (
    <li {...restProps}>
      <div
        style={dotStyle}
        className={classNames(`${clsPrefix}__dot`, `${clsPrefix}__dot-${color}`, {
          [`${clsPrefix}__dot-loading`]: !!isPending,
        })}
      >
        {dot}
      </div>
      <div className={`${clsPrefix}__line`} />
      <div className={`${clsPrefix}__title`}>{title}</div>
      <div className={`${clsPrefix}__content`}>{children}</div>
    </li>
  )
}

TimelineItem.defaultProps = {
  title: '',
  color: 'info',
  dot: null,
  isPending: null,
}

export default TimelineItem
