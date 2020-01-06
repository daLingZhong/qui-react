import * as React from 'react'

// Timeline
export type QTimelineMode = 'left' | 'right' | 'alternate'
export interface QTimelineInter {
  mode?: QTimelineMode
  pending?: React.ReactNode
  isReverse?: boolean
}
export interface TimelineComponent extends React.FunctionComponent<QTimelineInter> {
  Item: React.FunctionComponent<QTimelineItemInter>
}

// TimelineItem
export interface QTimelineItemInter {
  title?: React.ReactNode
  color?: 'info' | 'success' | 'error' | 'warning'
  dot?: React.ReactNode
  isPending?: boolean
}
