import * as React from 'react'
import classNames from 'classnames'

import { clsPrefix } from '../common'
import { TimelineComponent } from '../interface'
import TimelineItem from './TimelineItem'

import '../styles/timeline.scss'

const Timeline: TimelineComponent = (props) => {
  const { mode, children, pending, isReverse, ...restProps } = props
  const pendingNode = typeof pending === 'boolean' ? null : pending
  const pendingItem = !!pending ? (
    <TimelineItem key="pending" isPending={!!pending} title={<div>{pendingNode}</div>} />
  ) : null
  const childArray = React.Children.toArray(children).map((item, index) =>
    React.cloneElement(item as any, { key: index })
  )
  const timelineItems = !!isReverse ? [pendingItem, ...childArray.reverse()] : [...childArray, pendingItem]

  return (
    <ul {...restProps} className={classNames(`${clsPrefix}`, `${clsPrefix}-${mode}`)}>
      {timelineItems}
    </ul>
  )
}

Timeline.defaultProps = {
  mode: 'left',
  pending: null,
  isReverse: null,
}
Timeline.Item = TimelineItem

export default Timeline
