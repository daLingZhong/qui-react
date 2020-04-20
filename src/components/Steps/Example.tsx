import * as React from 'react'
import { Steps, StepItem } from './index'

import Button from '@/components/Button'
import DemoCard from '@/page/components/DemoCard'

const ExamplePage = () => {
  const [step, setStep] = React.useState(0)
  const data = [
    { title: '第一步', description: '哈哈哈' },
    { title: '第二步', description: '嘿嘿嘿' },
    { title: '第三步', description: '耶耶耶' },
  ]

  return (
    <>
      <DemoCard title="基本用法" des="简单的步骤条。" id="components-steps-demo-basic">
        <Steps size="default" current={step}>
          {data.map((v, index) => (
            <StepItem title={v.title} description={v.description} key={index}>
              {index + 1}
            </StepItem>
          ))}
        </Steps>
        <Button style={{ margin: '10px 0' }} onClick={() => setStep(step + 1)}>
          Next
        </Button>
      </DemoCard>

      <DemoCard title="竖直方向的步骤条" des="简单的竖直方向的步骤条。" id="components-steps-demo-vertical">
        <Steps size="default" direction="vertical">
          {data.map((v, index) => (
            <StepItem title={v.title} description={v.description} key={index}>
              {index + 1}
            </StepItem>
          ))}
        </Steps>
      </DemoCard>
    </>
  )
}

export default ExamplePage
