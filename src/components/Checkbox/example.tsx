import * as React from 'react'

import Checkbox from './components/Checkbox'

const ExampleCheckbox: React.SFC = () => {
  const [check, setCheck] = React.useState(true)

  return (
    <div>
      <h2>Checkbox Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=4a16c0ab-5d1a-4d2e-ad2a-a232a9687e59">
        Dark UI Design
      </a>
      <h3>Noraml</h3>
      <Checkbox isChecked={check} onChange={(e, nv) => setCheck(nv)}>
        test
      </Checkbox>
      <h3>Disabled</h3>
      <Checkbox isDisabled isChecked={check}>
        Apple
      </Checkbox>
      <Checkbox isIndeterminate isDisabled style={{ marginLeft: '10px' }}>
        Apple
      </Checkbox>
    </div>
  )
}

export default ExampleCheckbox
