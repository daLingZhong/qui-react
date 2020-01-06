import * as React from 'react'

import Tabs from './components/Tabs'

const TabsExample = () => {
  return (
    <div>
      <h2>Tabs example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=40fd1e32-b0b4-4db4-b827-b324b7a64fd0">
        Dark UI Design
      </a>

      <h3>Normal</h3>
      <Tabs defaultActive="3">
        <Tabs.Item title="1" key="1">
          123
        </Tabs.Item>
        <Tabs.Item title="2" key="2">
          455254
        </Tabs.Item>
        <Tabs.Item title="3" key="3">
          dafdaf
        </Tabs.Item>
      </Tabs>

      <h3>Disabled</h3>
      <Tabs>
        <Tabs.Item title="1" key="1">
          123
        </Tabs.Item>
        <Tabs.Item title="2" key="2" isDisabled>
          455254
        </Tabs.Item>
        <Tabs.Item title="3" key="3">
          dafdaf
        </Tabs.Item>
      </Tabs>

      <h3>Icon</h3>
      <Tabs>
        <Tabs.Item title="SQLserver" key="1" icon="SQLserver">
          123
        </Tabs.Item>
        <Tabs.Item title="MySQL" key="2" icon="MySQL">
          455254
        </Tabs.Item>
      </Tabs>

      <h3>Card</h3>
      <Tabs type="card">
        <Tabs.Item title="SQLserver" key="1" icon="SQLserver">
          123
        </Tabs.Item>
        <Tabs.Item title="MySQL" key="2" icon="MySQL">
          455254
        </Tabs.Item>
      </Tabs>

      <h3>Editable</h3>
      <Tabs type="card" isAddable isClosable>
        <Tabs.Item title="SQLserver" key="1" icon="SQLserver" isDisabled>
          123
        </Tabs.Item>
        <Tabs.Item title="MySQL" key="2" icon="MySQL">
          455254
        </Tabs.Item>
      </Tabs>
    </div>
  )
}

export default TabsExample
