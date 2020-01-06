import * as React from 'react'
import { noop } from 'lodash'

import { QRadioGroupInter, QRadioOptionInter } from '../interface'

const RadioGroup = <T extends any>(props: QRadioGroupInter<T>) => {
  const { children: _children, name, onChange, value, isDisabled } = props

  return (
    <React.Fragment>
      {React.Children.map(_children, (v: React.ReactElement<QRadioOptionInter<T>>) => (
        <v.type
          {...v.props}
          groupName={name}
          isChecked={value === v.props.value}
          isDisabled={isDisabled}
          onClick={onChange}
        />
      ))}
    </React.Fragment>
  )
}
RadioGroup.defaultProps = {
  onChange: noop,
  value: null,
  isDisabled: false,
}
export default RadioGroup
