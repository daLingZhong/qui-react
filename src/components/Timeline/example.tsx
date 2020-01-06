import * as React from 'react'
import Timeline from './components/Timeline'
import { QTimelineMode } from './interface'
import Icon from '@/components/Icon'

const ExamplePage = () => {
  return (
    <div>
      <h2>Timeline Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65">UI Design</a>
      <h3>Normal</h3>
      <p>基本用法</p>
      <Timeline>
        <Timeline.Item title="状态内容详情A" />
        <Timeline.Item title="状态内容详情B" />
        <Timeline.Item title="状态内容详情C" />
      </Timeline>
      <h3>Dot Color</h3>
      <p>可控制节点颜色</p>
      <Timeline>
        <Timeline.Item title="状态内容详情A" color="info" />
        <Timeline.Item title="状态内容详情B" color="success" />
        <Timeline.Item title="状态内容详情C" color="error" />
        <Timeline.Item title="状态内容详情D" color="warning" />
      </Timeline>
      <h3>Dot Node</h3>
      <p>自定义节点类型</p>
      <Timeline>
        <Timeline.Item title="状态内容详情A" color="info" />
        <Timeline.Item
          title="状态内容详情B"
          color="success"
          dot={<Icon icon="clock-circle-o" style={{ color: 'red', marginTop: '-2px', fontSize: '15px' }} />}
        />
        <Timeline.Item title="状态内容详情C" color="error" />
        <Timeline.Item title="状态内容详情D" color="warning" />
      </Timeline>
      <h3>Content</h3>
      <p>可定制时间轴内容显示</p>
      <Timeline>
        <Timeline.Item title="状态内容详情A" />
        <Timeline.Item title="状态内容详情B">this is content</Timeline.Item>
        <Timeline.Item title="状态内容详情C" color="error" />
      </Timeline>
      <h3>Position</h3>
      <p>可选择三种时间轴点展示方式</p>
      <TimelinePosition />
      <h3>Loading & Reverse</h3>
      <p>等待效果及排序</p>
      <Timeline pending="loading..." isReverse={true}>
        <Timeline.Item title="状态内容详情A" />
        <Timeline.Item title="状态内容详情B">this is content</Timeline.Item>
        <Timeline.Item title="状态内容详情C" color="error" />
      </Timeline>
    </div>
  )
}

export default ExamplePage

const TimelinePosition = () => {
  const [position, setPosition] = React.useState<QTimelineMode>('left')

  return (
    <div>
      <label>
        <input
          name="theme"
          type="radio"
          checked={position === 'left'}
          value="left"
          onChange={() => {
            setPosition('left')
          }}
        />
        left
      </label>
      <label>
        <input
          name="theme"
          type="radio"
          checked={position === 'right'}
          value="right"
          onChange={() => {
            setPosition('right')
          }}
        />
        right
      </label>
      <label>
        <input
          name="theme"
          type="radio"
          checked={position === 'alternate'}
          value="alternate"
          onChange={() => {
            setPosition('alternate')
          }}
        />
        alternate
      </label>
      <Timeline mode={position}>
        <Timeline.Item title="状态内容详情A" color="info" />
        <Timeline.Item title="状态内容详情B">this is content</Timeline.Item>
        <Timeline.Item title="状态内容详情C" color="error">
          this is content
        </Timeline.Item>
        <Timeline.Item title="状态内容详情D" color="warning" />
      </Timeline>
    </div>
  )
}
