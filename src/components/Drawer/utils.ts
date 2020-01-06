import { useEffect, useRef } from 'react'

// 检查 DOM 环境支持
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

export const tuple = <T extends string[]>(...args: T) => args

export const usePrevious = (value) => {
  const ref = useRef()

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

// 判断是不是数字
export const isNumeric = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value)
}
