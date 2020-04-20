import * as React from 'react'
import Switch from '.'
import DemoCard from '@/page/components/DemoCard'

const ExamplePage = () => {
  return (
    <div>
      <DemoCard title="基本" des="最简单的用法。" id="components-switch-demo-basic">
        <Change />
      </DemoCard>

      <DemoCard title="尺寸" des="三种大小。" id="components-switch-demo-size">
        <Switch size="large" isChecked={true} />
        <br />
        <br />
        <Switch />
        <br />
        <br />
        <Switch size="small" isChecked={true} />
      </DemoCard>

      <DemoCard title="禁用" des="禁用状态。" id="components-switch-demo-disabled">
        <Disabled />
      </DemoCard>

      <DemoCard title="内容自定义" des="可以自定义开关的背景内容。" id="components-switch-demo-content">
        <CheckContent />
      </DemoCard>

      <DemoCard title="加载中" des="加载中状态。" id="components-switch-demo-loading">
        <Loading />
      </DemoCard>

      <DemoCard title="自定义" des="自定义聚焦背景色。" id="components-switch-demo-wave">
        <Customize />
      </DemoCard>
    </div>
  )
}

export default ExamplePage

const Change = () => {
  const [status, setStatus] = React.useState(false)

  return (
    <Switch
      isChecked={status}
      onChange={(nv) => {
        setStatus(nv)
      }}
    />
  )
}

const Disabled = () => {
  return (
    <div>
      <Switch isChecked={false} isDisable={true} />
      <br />
      <br />
      <Switch isChecked={true} isDisable={true} />
    </div>
  )
}

const CheckContent = () => {
  const [status, setStatus] = React.useState(false)

  return (
    <Switch
      size="small"
      isChecked={status}
      onChange={(nv) => {
        setStatus(nv)
      }}
      checkedContent="开"
      unCheckedContent="关"
    />
  )
}

const Loading = () => {
  return (
    <div>
      <Switch isChecked={true} isLoading={true} size="large" />
      <br />
      <Switch isChecked={false} isLoading={true} />
    </div>
  )
}

const Customize = () => {
  const [test, setText] = React.useState(false)
  const color = test ? 'green' : 'red'

  return <Switch style={{ backgroundColor: color }} waveColor={color} isChecked={test} onChange={(n) => setText(n)} />
}
