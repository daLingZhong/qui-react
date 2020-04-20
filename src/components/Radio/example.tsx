import * as React from 'react'

import Radio from './components/Radio'

import DemoCard from '@/page/components/DemoCard'

const RadioExample = () => {
  const [check, setCheck] = React.useState(1)

  return (
    <div>
      <DemoCard title="基本" des="最简单的用法。" id="components-radio-demo-basic">
        <Radio.Group
          name="test"
          value={check}
          onChange={(nv) => {
            setCheck(nv)
          }}
        >
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
        </Radio.Group>
      </DemoCard>

      <DemoCard title="禁用状态" des="Radio 不可用。" id="components-radio-demo-disabled">
        <Radio isDisabled>diabled</Radio>
        <Radio isDisabled isChecked>
          disabled checked
        </Radio>
      </DemoCard>
    </div>
  )
}
export default RadioExample
