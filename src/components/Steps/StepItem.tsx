import * as React from 'react'
import * as classNames from 'classnames'

import Icon from '@/components/Icon'
import { Status } from './interface'

import { clsnamePrefix } from '@/var'
import { StepItemProps } from './interface'

import './style/index.scss'

export interface StepItemComponent extends React.FC<StepItemProps> {
  Item?: boolean
}

const StepItem: StepItemComponent = React.memo((props) => {
  const { className, title, description, status, icon, stepNumber, handleChange } = props

  const renderIcon = () => {
    const { icon, stepNumber } = props

    if (!icon) {
      if (status === Status.Finish) {
        return (
          <span>
            <Icon icon="check" />
          </span>
        )
      } else if (status === Status.Error) {
        return (
          <span>
            <Icon icon="close" />
          </span>
        )
      } else {
        return <span>{stepNumber}</span>
      }
    } else {
      return (
        <span>
          <Icon icon={icon as string} style={{ fontSize: 24 }} />
        </span>
      )
    }
  }
  const iconClassName = classNames({
    [`${clsnamePrefix}_step_item_icon`]: true,
    [`${clsnamePrefix}_step_item_icon_${status}`]: true,
    [`${clsnamePrefix}_step_item_icon_custom`]: icon ? true : false,
  })

  return (
    <div
      className={`${clsnamePrefix}_step_item ${className}`}
      data-step-status={status}
      onClick={() => handleChange(stepNumber)}
    >
      <div className={iconClassName}>{renderIcon()}</div>
      <div className={`${clsnamePrefix}_step_item_content`}>
        <div className={`${clsnamePrefix}_step_item_header`}>
          <div className={`${clsnamePrefix}_step_item_title`}>{title}</div>
          <div className={`${clsnamePrefix}_step_item_tail`} />
        </div>
        {description && <div className={`${clsnamePrefix}_step_item_description`}>{description}</div>}
      </div>
    </div>
  )
})

StepItem.Item = true

export default StepItem
