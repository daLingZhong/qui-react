import * as React from 'react'

import Card from './components/Card'

const CardExample = () => {
  return (
    <div>
      <h2>Card example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=40fd1e32-b0b4-4db4-b827-b324b7a64fd0">
        Dark UI Design
      </a>
      <h3>Normal</h3>
      <Card title="test">123</Card>
      <h3>Border</h3>
      <Card title="test" hasBorder hasColorBar={false}>
        123
      </Card>
      <h3>Hoverable</h3>
      <p>仅在Bordered模式下生效</p>
      <Card title="test" hasBorder hasColorBar={false} hoverable>
        123
      </Card>
    </div>
  )
}

export default CardExample
