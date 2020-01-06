import * as React from 'react'
import cls from 'classnames'
import { clsnamePrefix } from '@/var/index'

import { StepsProps, Status } from './interface'

import './style/index.scss'

const Steps: React.FC<StepsProps> = React.memo((props) => {
  const { children, className, status, current: _current, size, direction, onChange, ...res } = props

  const [current, setCurrent] = React.useState(_current)

  let items: React.ReactNode = null

  const handleStepNumberChange = (stepNumber: number) => {
    setCurrent(stepNumber)
    onChange && onChange(stepNumber)
  }

  React.useEffect(() => {
    setCurrent(_current)
  }, [_current])

  if (children) {
    items = React.Children.map(children, (child: any, index) => {
      const props = (child as React.ReactElement<any>).props
      const type = (child as React.ReactElement<any>).type as any
      const handleChange = onChange ? handleStepNumberChange : () => {}

      const childrenProps = { ...props, key: index, handleChange }

      if (!child) {
        return child
      } else if (type && !type.Item) {
        console.log("Step only accepts StepItem as it's children")
      } else {
        if (!child.props.status) {
          if (current === index) {
            childrenProps.status = Status.Process
          } else if (current >= index) {
            childrenProps.status = Status.Finish
          } else {
            childrenProps.status = Status.Wait
          }
        }

        return React.cloneElement(child, { ...childrenProps, stepNumber: index + 1 })
      }
    })
  }
  return (
    <div
      className={cls(`${clsnamePrefix}_step`, className)}
      data-steps-size={size}
      data-steps-direction={direction}
      {...res}
    >
      {items}
    </div>
  )
})

Steps.defaultProps = {
  current: 0,
  size: 'default',
}

export default Steps
