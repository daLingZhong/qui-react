import * as React from 'react'

import Select from './components/Select'
import { Option, OptionGroup } from './components/Option'

import DemoCard from '@/page/components/DemoCard'

const ExamplePage = () => {
  const [def, setDef] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setDef({ value: 'QData', label: 'QData' })
    }, 1000)
  }, [])

  return (
    <div>
      <DemoCard title="基本" des="基本使用，支持可重渲染的defaultValue，适配联动场景" id="components-select-demo-basic">
        <Select
          id=""
          onChange={(value) => console.log('you select item \n' + value)}
          defaultValue={def}
          isReRenderDfVal
          placeholder="Select product"
          onScrollButtom={(nv) => console.log(nv)}
        >
          <Option value="QData">QData</Option>
          <Option value="QFusion" isDisabled>
            QFusion
          </Option>
          <Option value="QBus">QBus</Option>
        </Select>
      </DemoCard>

      <DemoCard title="状态" des="错误状态，支持自定义错误文案" id="components-select-demo-error">
        <Select
          isError
          id=""
          errorText="必填项"
          onChange={(value) => console.log('you select item \n' + value)}
          placeholder="Select product"
        >
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
          <Option value="QFusion" isDisabled>
            QFusion
          </Option>
          <Option value="QBus">QBus</Option>
        </Select>
      </DemoCard>

      <DemoCard title="禁用" des="禁用状态" id="components-select-demo-disabled">
        <Select style={{ width: '220px' }} isDisabled defaultValue={{ value: 'QData', label: 'QData' }}>
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
          <Option value="QFusion">QFusion</Option>
          <Option value="QBus">QBus</Option>
        </Select>
      </DemoCard>

      <DemoCard title="加载中" des="加载中状态" id="components-select-demo-loading">
        <Select style={{ width: '220px' }} size="small" isLoading>
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
        </Select>
      </DemoCard>

      <DemoCard
        title="搜索"
        des="输入框内的值改变会由回调函数传出，可凭借此改变Option列表显示，达到搜索目的"
        id="components-select-demo-search"
      >
        <Select
          size="small"
          isSearch
          onInputChange={(nv) => {
            console.log(nv)
          }}
        >
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
        </Select>
      </DemoCard>

      <DemoCard title="尺寸" des="提供三种尺寸" id="components-select-demo-size">
        <Select style={{ width: '120px' }} size="large">
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
        </Select>
        <br />
        <br />
        <Select style={{ width: '120px' }}>
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
        </Select>
        <br />
        <br />
        <Select style={{ width: '120px' }} size="small">
          <Option value="QData">QData</Option>
          <Option value="QBackup">QBackup</Option>
        </Select>
      </DemoCard>

      <DemoCard title="分组" des="使用OptionGroup进行选项分组" id="components-select-demo-group">
        <Select style={{ width: '120px' }} size="small">
          <OptionGroup label="Team RNG">
            <Option value="uzi">Uzi</Option>
            <Option value="ming">Ming</Option>
            <Option value="xiaohu">xiaohu</Option>
            <Option value="letme">Letme</Option>
            <Option value="karsa">Karsa</Option>
          </OptionGroup>
          <OptionGroup label="Team IG">
            <Option value="theshy">The shy</Option>
            <Option value="rookie">Rookie</Option>
            <Option value="jackeylove">Jackeylove</Option>
            <Option value="ning">Ning</Option>
          </OptionGroup>
        </Select>
      </DemoCard>

      <DemoCard title="标签" des="支持自定义标签多选" id="components-select-demo-tags">
        <Select
          style={{ width: '520px' }}
          mode="tags"
          placeholder="enter"
          defaultValue={['QData']}
          onChange={(value) => {
            console.log('you got item list\n' + value)
          }}
        >
          <Option value="QData">QData111</Option>
          <Option value="QBackup">QBackup111</Option>
        </Select>
      </DemoCard>

      <DemoCard title="多选" des="支持多选" id="components-select-demo-multiple">
        <Select
          style={{ width: '520px' }}
          mode="multiple"
          placeholder="enter"
          defaultValue={['QData']}
          onChange={(value) => {
            console.log('you got item list\n' + value)
          }}
        >
          <Option value="QData">QData111</Option>
          <Option value="QBackup">QBackup111</Option>
        </Select>
      </DemoCard>
    </div>
  )
}

export default ExamplePage
