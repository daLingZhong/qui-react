import * as React from 'react'
import Input from './components/Input'
import Textarea from './components/Textarea'

export default function ExamplePage(props) {
  return (
    <div>
      <h2>Input Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=acd3edec-e8ef-45ee-9c78-a75c6f5841ca">
        Dark UI Design
      </a>
      <h3>Size</h3>
      <h4>large</h4>
      <Input size="large" placeholder="大尺寸输入框" />
      <h4>middle</h4>
      <Input size="middle" placeholder="默认尺寸输入框" />
      <h4>small</h4>
      <Input size="small" placeholder="小尺寸输入框" />

      <h3>Addon</h3>
      <Input size="large" addonBefore="http://www." addonAfter="/#/" autoComplete="off" />

      <h3>Prefix / Suffix / Type</h3>
      <Input type="password" autoComplete="off" />

      <h3>Disabled</h3>
      <Input value="test" type="password" isDisabled placeholder="默认尺寸输入框" />

      <h3>Textarea</h3>
      <Textarea rows={3} />

      <h3>Error</h3>
      <Input placeholder="test" isError errorText="必填项" />
    </div>
  )
}
