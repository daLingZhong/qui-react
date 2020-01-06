import * as React from 'react'

import Button from '@/components/Button'

const ExampleButton = () => {
  return (
    <div>
      <h2>Button example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=64b5281e-3c5b-4713-a532-dd8ecb26e201">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=224fcfb6-fb77-4015-9175-8f2b648efda8">
        Dark UI Design
      </a>
      <h3>Theme</h3>
      <Button style={{ marginRight: '10px' }}>默认</Button>
      <Button theme="primary" style={{ marginRight: '10px' }}>
        主要
      </Button>
      <Button theme="success" style={{ marginRight: '10px' }}>
        默认
      </Button>
      <Button theme="warning" style={{ marginRight: '10px' }}>
        警告
      </Button>
      <Button theme="danger" style={{ marginRight: '10px' }}>
        错误
      </Button>
      <Button theme="dashed" style={{ marginRight: '10px' }}>
        虚线
      </Button>
      <Button theme="text">文字</Button>

      <h3>Icon</h3>
      <Button icon="plus" style={{ marginRight: '10px' }}>
        默认
      </Button>
      <Button icon="plus" />

      <h3>Size</h3>
      <Button size="large" style={{ marginRight: '10px' }}>
        大尺寸
      </Button>
      <Button style={{ marginRight: '10px' }}>默认</Button>
      <Button size="small" style={{ marginRight: '10px' }}>
        小尺寸
      </Button>
      <Button size="mini" style={{ marginRight: '10px' }}>
        超小尺寸
      </Button>

      <h3>Disabled</h3>
      <Button theme="primary" style={{ marginRight: '10px' }} isDisabled>
        Disabled
      </Button>
      <Button style={{ marginRight: '10px' }} isDisabled>
        Disabled
      </Button>
      <Button icon="plus" isDisabled style={{ marginRight: '10px' }} />
      <Button theme="text" isDisabled>
        文字
      </Button>

      <h3>Loading</h3>
      <Button isLoading theme="primary" style={{ marginRight: '10px' }}>
        Test
      </Button>
      <Button isLoading />

      <h3>ButtonGroup</h3>
      <Button.Group>
        <Button theme="primary" isDisabled>
          abc
        </Button>
        <Button theme="primary">klda</Button>
        <Button theme="primary">123</Button>
      </Button.Group>

      <h3>Customize Wave Color</h3>
      <Button waveColor="black">Customize</Button>
    </div>
  )
}
export default ExampleButton
