import { ReactNode } from 'react'

export type StepsSize = 'default' | 'small'

export type StepsStatus = 'wait' | 'process' | 'finish' | 'error'

export interface StepsProps {
  current?: number
  onChange?: (current: number) => void
  status?: StepsStatus
  size?: StepsSize
  direction?: string
  className?: string
  style?: React.CSSProperties
}

export interface StepItemProps {
  description?: string | ReactNode
  icon?: string | ReactNode
  status?: StepsStatus
  title?: string
  className?: string
  stepNumber?: number
  handleChange?: (stepNumber: number) => void
}

export enum Status {
  Wait = 'wait',
  Process = 'process',
  Finish = 'finish',
  Error = 'error',
}
