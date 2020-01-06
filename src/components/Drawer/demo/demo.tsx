import * as React from 'react'
import { useState } from 'react'
import { Drawer } from '../index'

const ExampleDrawer = () => {
  const [toggle, setToggle] = useState(false)
  const [childrenToggle, setChildrenToggle] = useState(false)
  const [placement, setPlacement] = useState()
  const [width, setWidth] = useState('70%')

  return (
    <div>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=980a3a8d-60ce-4901-80b8-c552a6d44be0">
        Dark UI Design
      </a>
      <h2>Drawer Example</h2>
      <div>
        <div>多层抽屉</div>
        <div>在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。</div>
        <br />
        <div>自定义位置</div>
        <div>自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭</div>

        <select
          id="pet-select"
          onChange={(e) => {
            setPlacement(e.target.value)
          }}
        >
          <option value="right">--Please choose an option--</option>
          <option value="top">Top</option>
          <option value="right">Right</option>
          <option value="bottom">Bottom</option>
          <option value="left">Left</option>
        </select>
        <div>
          <button
            onClick={() => {
              setToggle(true)
            }}
          >
            OPEN
          </button>
        </div>
        <Drawer
          visible={toggle}
          width={width}
          height={width}
          title="Basic Drawer"
          placement={placement}
          onClose={() => {
            setToggle(false)
          }}
          footer={[
            <button key="1" style={{ marginRight: 8 }}>
              取消
            </button>,
            <button key="2">保存</button>,
          ]}
        >
          {/* <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
          <button
            onClick={() => {
              setChildrenToggle(true)
            }}
          >
            Two-level drawer
          </button>
          <button
            onClick={() => {
              setWidth('100%')
            }}
          >
            100%
          </button>
          <button
            onClick={() => {
              setWidth('70%')
            }}
          >
            70%
          </button>
          <Drawer
            // title="Two-level Drawer"
            visible={childrenToggle}
            placement={placement}
            onClose={() => {
              setChildrenToggle(false)
            }}
          >
            This is two-level drawer
          </Drawer>
        </Drawer>
      </div>
    </div>
  )
}

export default ExampleDrawer
