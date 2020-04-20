import * as React from 'react'
import DemoCard from '@/page/components/DemoCard'
import Checkbox from './components/Checkbox'

const ExampleCheckbox: React.SFC = () => {
  const [check, setCheck] = React.useState(true)

  return (
    <div>
      <DemoCard title="基本" des="简单的 checkbox。" id="omponents-checkbox-demo-basic">
        <Checkbox isChecked={check} onChange={(e, nv) => setCheck(nv)}>
          test
        </Checkbox>
      </DemoCard>

      <DemoCard title="中间状态" des="有子项选中但没有全选的中间状态。" id="omponents-checkbox-demo-indeterminate">
        <Checkbox isIndeterminate>Apple</Checkbox>
      </DemoCard>

      <DemoCard title="禁用" des="禁用状态。" id="omponents-checkbox-demo-disabled">
        <Checkbox isDisabled>Apple</Checkbox>
      </DemoCard>
    </div>
  )
}

export default ExampleCheckbox
