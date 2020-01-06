import * as React from 'react'

import Radio from './components/Radio'

const RadioExample = () => {
  const [check, setCheck] = React.useState(1)

  return (
    <div style={{ marginBottom: '100px' }}>
      <h2>Radio example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=4a16c0ab-5d1a-4d2e-ad2a-a232a9687e59">
        Dark UI Design
      </a>
      <h3>Normal</h3>
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
      <h3>Disabled</h3>
      <Radio isDisabled>diabled</Radio>
      <Radio isDisabled isChecked>
        disabled checked
      </Radio>
    </div>
  )
}
export default RadioExample
