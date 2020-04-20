import * as React from 'react'
import { useState } from 'react'
import { Drawer } from '../index'
import DemoCard from '@/page/components/DemoCard'
import Select, { Option } from '@/components/Select'
import Button from '@/components/Button'

const ExampleDrawer = () => {
  const [toggle, setToggle] = useState(false)
  const [childrenToggle, setChildrenToggle] = useState(false)
  const [placement, setPlacement] = useState()
  const [width, setWidth] = useState('70%')

  return (
    <div>
      <DemoCard
        title="基本"
        des="自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭"
        id="components-drawer-demo-basic"
      >
        <div>
          <Select placeholder="Please choose an option" onChange={(nv) => setPlacement(nv)}>
            <Option value="top">Top</Option>
            <Option value="right">Right</Option>
            <Option value="bottom">Bottom</Option>
            <Option value="left">Left</Option>
          </Select>
          <Button
            style={{ marginLeft: '10px' }}
            onClick={() => {
              setToggle(true)
            }}
          >
            OPEN
          </Button>
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
      </DemoCard>
    </div>
  )
}

export default ExampleDrawer
