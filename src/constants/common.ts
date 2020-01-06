import * as React from 'react'

export const KEYCODE = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  DOWN: 40,
  UP: 38,
  ESC: 27,
}
export const POSITION = [
  'bottomLeft',
  'bottomRight',
  'bottom',
  'topLeft',
  'topRight',
  'top',
  'left',
  'leftTop',
  'leftBottom',
  'right',
  'rightTop',
  'rightBottom',
] as const

export type RenderNode = string | React.ReactNode
export type Position = typeof POSITION[number]
