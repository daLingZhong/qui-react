import * as React from 'react'

import Tooltip from './components/Tooltip'
import Button from '../Button'

const ExamplePage = () => {
  return (
    <div>
      <h2>Tooltip Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65">UI Design</a>

      <h3>Normal</h3>
      <Tooltip message="prompt text">
        <span>Tooltip will show on mouse enter.</span>
      </Tooltip>

      <h3>Position</h3>
      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="topLeft">
          <Button>TL</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="top">
          <Button>Top</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="topRight">
          <Button>TR</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="rightTop">
          <Button>RT</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="right">
          <Button>Right</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="rightBottom">
          <Button>RB</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="bottomRight">
          <Button>BR</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="bottomLeft">
          <Button>BL</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="leftTop">
          <Button>LT</Button>
        </Tooltip>
      </div>

      <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}>
        <Tooltip message="prompt text" placement="left">
          <Button>Left</Button>
        </Tooltip>
      </div>

      {/* <div style={{ marginRight: '10px', float: 'left', marginBottom: '10px' }}> */}
      <Tooltip message="prompt text" placement="leftBottom">
        <Button>LB</Button>
      </Tooltip>
      {/* </div> */}
    </div>
  )
}
export default ExamplePage
