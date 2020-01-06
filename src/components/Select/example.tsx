import * as React from 'react'

import Select from './components/Select'
import Cascade from './components/Cascade'
import TreeSelect from './components/TreeSelect'
import { Option, OptionGroup } from './components/Option'

const ExamplePage = () => {
  const options = [
    {
      value: 'framework',
      label: '框架',
      children: [
        {
          value: 'react',
          label: 'React',
          children: [
            {
              value: 'hooks',
              label: 'Hooks',
            },
          ],
        },
        {
          value: 'vue',
          label: 'Vue',
        },
        {
          value: 'angular',
          label: 'Angular',
        },
        {
          value: 'angular1',
          label: 'Angular1',
        },
        {
          value: 'angular2',
          label: 'Angular2',
        },
        {
          value: 'angular3',
          label: 'Angular3',
        },
        {
          value: 'angular4',
          label: 'Angular4',
        },
      ],
    },
    {
      value: 'base',
      label: '基础',
      children: [
        {
          value: 'js',
          label: 'JavaScript',
        },
        {
          value: 'html',
          label: 'HTML',
        },
        {
          value: 'css',
          label: 'CSS',
        },
      ],
    },
  ]
  const [checked, setChecked] = React.useState<string[]>([])
  const [def, setDef] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() => {
      setDef({ value: 'QData', label: 'QData' })
    }, 1000)
  }, [])

  return (
    <div style={{ marginBottom: '100px' }}>
      <h2>Select example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=acd3edec-e8ef-45ee-9c78-a75c6f5841ca">
        Dark UI Design
      </a>
      <h3>Normal</h3>
      <p>Select长度可通过改变style中的width自行调节，默认为200px</p>
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
      <h3>Error</h3>
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
      <h3>Disabled</h3>
      <Select style={{ width: '220px' }} isDisabled defaultValue={{ value: 'QData', label: 'QData' }}>
        <Option value="QData">QData</Option>
        <Option value="QBackup">QBackup</Option>
        <Option value="QFusion">QFusion</Option>
        <Option value="QBus">QBus</Option>
      </Select>
      <h3>Loading</h3>
      <Select style={{ width: '220px' }} size="small" isLoading>
        <Option value="QData">QData</Option>
        <Option value="QBackup">QBackup</Option>
      </Select>
      <h3>Search</h3>
      <p>输入框内的值改变会由回调函数传出，可凭借此改变Option列表显示，达到搜索目的</p>
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
      <h3>Size</h3>
      <h4>Large</h4>
      <Select style={{ width: '120px' }} size="large">
        <Option value="QData">QData</Option>
        <Option value="QBackup">QBackup</Option>
      </Select>
      <h4>Default</h4>
      <Select style={{ width: '120px' }}>
        <Option value="QData">QData</Option>
        <Option value="QBackup">QBackup</Option>
      </Select>
      <h4>Small</h4>
      <Select style={{ width: '120px' }} size="small">
        <Option value="QData">QData</Option>
        <Option value="QBackup">QBackup</Option>
      </Select>
      <h3>Group</h3>
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
      <h3>Tags</h3>
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
      <h3>Cascade</h3>
      <h4>Click</h4>
      <Cascade placeholder="请选择" options={options} value={['base', 'js']} />
      <h4>Hover</h4>
      <Cascade placeholder="请选择" options={options} trigger="hover" />
      <h3>Tree Select</h3>
      <TreeSelect
        isSearch
        value={checked}
        isCheckable
        options={[
          {
            value: 'sys-1',
            label: '国泰君安风控系统',
            children: [{ value: '3712451747553314', label: 'qdata-com1' }],
          },
          {
            value: 'sys-1-rac-1',
            label: 'RAC测试集群',
            children: [
              { value: '124joidajfpdja', label: 'qdata-com1' },
              { value: '899080ew', label: '数据库实例1' },
            ],
          },
          {
            value: 'iudoafoidja2cccdafdafefeu98',
            label: 'test db',
            children: [
              {
                value: '8daf9908dfccvcvcde3adafda0ew',
                label: '容器数据库实例1',
                children: [{ value: '9089034808520opkfdjlkjcljl', label: 'PDB TEST' }],
              },
            ],
          },
        ]}
        onChange={(nv) => {
          console.log(nv)
          setChecked(nv)
        }}
      />
    </div>
  )
}

export default ExamplePage
