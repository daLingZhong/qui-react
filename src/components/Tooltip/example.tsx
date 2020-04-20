import * as React from 'react'

import Tooltip from './components/Tooltip'
import Button from '../Button'
import DemoCard from '@/page/components/DemoCard'

const ExamplePage = () => {
  return (
    <div>
      <DemoCard title="基本" des="最基本的用法。" id="components-tooltip-demo-basic">
        <Tooltip message="prompt text">
          <span>Tooltip will show on mouse enter.</span>
        </Tooltip>
      </DemoCard>

      <DemoCard title="位置" des="位置有 12 个方向。" id="components-tooltip-demo-position">
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
      </DemoCard>
    </div>
  )
}
export default ExamplePage
