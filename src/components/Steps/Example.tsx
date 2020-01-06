import * as React from 'react'
import { Steps, StepItem } from './index'

const ExamplePage = () => {
  const [change, setChange] = React.useState(true)
  const [step, setStep] = React.useState(0)
  console.log(step)
  const data = change
    ? [
        { title: '第一步', description: '哈哈哈' },
        { title: '第二步', description: '嘿嘿嘿' },
        { title: '第三步', description: '耶耶耶' },
      ]
    : [
        { title: 'one', description: '哈哈哈' },
        { title: 'two', description: '嘿嘿嘿' },
        { title: 'three', description: '耶耶耶' },
      ]

  const handleChange = () => {
    setChange(!change)
  }

  return (
    <>
      <h3>Horizontal</h3>
      <button onClick={() => setStep(step + 1)}>click</button>
      <Steps size="default" current={step}>
        {data.map((v, index) => (
          <StepItem title={v.title} description={v.description} key={index}>
            {index + 1}
          </StepItem>
        ))}
      </Steps>
      <h3>Vertical</h3>
      <Steps size="default" direction="vertical">
        {data.map((v, index) => (
          <StepItem title={v.title} description={v.description} key={index}>
            {index + 1}
          </StepItem>
        ))}
      </Steps>

      <button onClick={handleChange}>语言切换</button>
    </>
  )
}

export default ExamplePage
