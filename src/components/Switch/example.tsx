import * as React from 'react'
import Switch from '.'

const ExamplePage = () => {
  const test = React.useRef(null)

  const focusSwitch = () => {
    test.current.focus()
  }

  return (
    <div>
      <h2>Switch Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355">UI Design</a>
      <br />
      <h3>Size</h3>
      <h4>small</h4>
      <button onClick={focusSwitch}>focus</button>
      <Switch size="small" isChecked={true} ref={test} />
      <br />
      <h4>middle</h4>
      <Switch />
      <br />
      <h4>large</h4>
      <Switch size="large" isChecked={true} />
      <h3>Change</h3>
      <Change />
      <h3>Disabled</h3>
      <Disabled />
      <h3>CheckContent</h3>
      <CheckContent />
      <h3>Loading</h3>
      <Loading />
      <h3>Customize Wave Color</h3>
      <Customize />
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
