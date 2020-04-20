import * as React from 'react'
import Timeline from './components/Timeline'
import { QTimelineMode } from './interface'
import Icon from '@/components/Icon'
import Radio from '@/components/Radio'
import DemoCard from '@/page/components/DemoCard'

const ExamplePage = () => {
  return (
    <div>
      <DemoCard title="基本" des="基本用法。" id="components-timeline-demo-basic">
        <Timeline>
          <Timeline.Item title="状态内容详情A" />
          <Timeline.Item title="状态内容详情B" />
          <Timeline.Item title="状态内容详情C" />
        </Timeline>
      </DemoCard>

      <DemoCard title="节点颜色" des="可控制节点颜色。" id="components-timeline-demo-color">
        <Timeline>
          <Timeline.Item title="状态内容详情A" color="info" />
          <Timeline.Item title="状态内容详情B" color="success" />
          <Timeline.Item title="状态内容详情C" color="error" />
          <Timeline.Item title="状态内容详情D" color="warning" />
        </Timeline>
      </DemoCard>

      <DemoCard title="自定义节点类型" des="自定义渲染节点" id="components-timeline-demo-dot">
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
      </DemoCard>

      <DemoCard title="自定义内容" des="可定制时间轴内容显示" id="components-timeline-demo-content">
        <Timeline>
          <Timeline.Item title="状态内容详情A" />
          <Timeline.Item title="状态内容详情B">this is content</Timeline.Item>
          <Timeline.Item title="状态内容详情C" color="error" />
        </Timeline>
      </DemoCard>

      <DemoCard title="方向" des="可选择三种时间轴点展示方式" id="components-timeline-demo-position">
        <TimelinePosition />
      </DemoCard>

      <DemoCard title="加载中" des="可定制加载中效果并可以反转排序" id="components-timeline-demo-loading">
        <Timeline pending="loading..." isReverse={true}>
          <Timeline.Item title="状态内容详情A" />
          <Timeline.Item title="状态内容详情B">this is content</Timeline.Item>
          <Timeline.Item title="状态内容详情C" color="error" />
        </Timeline>
      </DemoCard>
    </div>
  )
}

export default ExamplePage

const TimelinePosition = () => {
  const [position, setPosition] = React.useState<QTimelineMode>('left')

  return (
    <div>
      <Radio.Group
        name="test"
        value={position}
        onChange={(nv) => {
          setPosition(nv)
        }}
      >
        <Radio value="left">left</Radio>
        <Radio value="right">right</Radio>
        <Radio value="alternate">alternate</Radio>
      </Radio.Group>
      <br />
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
