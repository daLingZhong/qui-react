import * as React from 'react'

import DemoCard from '@/page/components/DemoCard'
import Checkbox from '@/components/Checkbox'
import Radio from '@/components/Radio'

import Table from '../Table/components/Table'
import { TableTheme, Col, ColArray, RowSelection } from './interface'
import EditTable from '../Table/components/EditTable'
import Input from '../Input'

const ExampleTablePage: React.SFC = () => {
  return (
    <div>
      <DemoCard
        title="基本"
        des="支持自定义渲染表格头或单元格，直接传入渲染函数即可。"
        id="components-table-demo-basic"
      >
        <Normal />
      </DemoCard>

      <DemoCard
        title="异常状态"
        des="可自定义异常状态下提示文案或者自行传入渲染函数，优先级: error > loading > nodata"
        id="components-table-demo-abnormal"
      >
        <AbNormal />
      </DemoCard>

      <DemoCard title="表格头尾" des="可自定义表格头部和尾部" id="components-table-demo-header">
        <HeaderFooter />
      </DemoCard>

      <DemoCard title="可展开行" des="某个行可以展开显示详细内容" id="components-table-demo-expanded">
        <ExpandedRow />
      </DemoCard>

      <DemoCard
        title="树状表格"
        des="可以展示树状类型数据，遇到children字段将会自动渲染为子节点"
        id="components-table-demo-tree"
      >
        <Tree />
      </DemoCard>

      <DemoCard
        title="可伸缩列"
        des="可以控制拖拽指定列宽度，需指定当前列的width属性才可获得伸缩功能"
        id="components-table-demo-resize"
      >
        <Resizable />
      </DemoCard>

      <DemoCard
        title="多选行"
        des="可以根据内部接口选中行，可指定作为主键选择的key，如不指定则需要源数据中存在key字段。暂时无法做到父子节点的选中判断，每一行将都是独立的"
        id="components-table-demo-checkbox"
      >
        <SelectRow />
      </DemoCard>

      <DemoCard title="排序" des="可以对指定列排序" id="components-table-demo-sort">
        <Sort />
      </DemoCard>

      <DemoCard
        title="服务端排序"
        des="根据提供特定列名以及排序条件传递服务端排序，可以给sort字段传入true表示开启，并且通过sortOrder字段传入回调函数控制总数据"
        id="components-table-demo-serversort"
      >
        <ServerSort />
      </DemoCard>

      <DemoCard
        title="筛选"
        des="特定列筛选，每一列必须传入唯一的Col.key，可以传入固定的需要筛选的项"
        id="components-table-demo-filter"
      >
        <Filter />
      </DemoCard>

      <DemoCard title="自定义筛选" des="可以自定义更多筛选条件" id="components-table-demo-filtercus">
        <FilterCustomize />
      </DemoCard>

      <DemoCard title="合并列" des="可合并列，合并后的列标题将会自动居中" id="components-table-demo-mergecol">
        <MergeCol />
      </DemoCard>

      <DemoCard title="合并行" des="对特定行合并" id="components-table-demo-mergerow">
        <MergeRow />
      </DemoCard>

      <DemoCard
        title="冻结表头"
        des="需要指定 column 的 width 属性，否则列头和内容可能不对齐。如果指定 width
        不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。"
        id="components-table-demo-fixheader"
      >
        <FixHeader />
      </DemoCard>

      <DemoCard title="普通编辑表格" des="提供基础的表格编辑功能" id="components-table-demo-edit">
        <EditTableNormal />
      </DemoCard>

      <DemoCard
        title="自定义编辑表格"
        des="自定义表格编辑功能，并可以与原生编辑功能混合使用"
        id="components-table-demo-editcus"
      >
        <EditTableCustomize />
      </DemoCard>
    </div>
  )
}

export default ExampleTablePage

const Normal = () => {
  const [compact, setCompact] = React.useState<boolean>(false)
  const [theme, setTheme] = React.useState<TableTheme>('underline')
  const col: Col<{ name: string; age: number; test: { name: 1 } }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: (record) => <span style={{ color: 'red' }}>age</span>,
      dataIndex: 'age',
    },
    {
      title: 'object path',
      dataIndex: 'test[name]',
    },
  ]

  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      test: {
        name: 1,
      },
    },
    {
      name: 'Zhong ling',
      age: 18,
    },
    {
      name: 'Ma dong mei',
      age: 27,
    },
  ]

  return (
    <div>
      <Checkbox isChecked={compact} onChange={() => setCompact(!compact)}>
        compact 紧凑型表格
      </Checkbox>
      <br />
      <br />
      <Radio.Group
        name="test"
        value={theme}
        onChange={(nv) => {
          setTheme(nv)
        }}
      >
        <Radio value="underline">underline</Radio>
        <Radio value="bordered">bordered</Radio>
      </Radio.Group>
      <br />
      <br />

      <Table col={col} dataSource={data} small={compact} theme={theme} />
    </div>
  )
}

const AbNormal = () => {
  const [error, setError] = React.useState<boolean>(false)
  const [loading, setLoading] = React.useState<boolean>(false)
  const [noData, setNodata] = React.useState<boolean>(false)
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ]
  let data = []

  if (!noData) {
    data = [
      {
        name: 'Han mei mei',
        age: 28,
      },
      {
        name: 'Zhong ling',
        age: 18,
      },
      {
        name: 'Ma dong mei',
        age: 27,
      },
    ]
  } else {
    data = []
  }

  return (
    <div>
      <Checkbox style={{ marginRight: '10px' }} isChecked={loading} onChange={() => setLoading(!loading)}>
        loading
      </Checkbox>
      <Checkbox style={{ marginRight: '10px' }} isChecked={error} onChange={() => setError(!error)}>
        error
      </Checkbox>
      <Checkbox isChecked={noData} onChange={() => setNodata(!noData)}>
        nodata
      </Checkbox>
      <br />
      <br />
      <Table col={col} dataSource={data} isLoading={loading} isError={error} />
    </div>
  )
}

const ExpandedRow = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <Table
      col={col}
      dataSource={data}
      expandedRowRender={(record) => {
        return <span>{record.weight}</span>
      }}
    />
  )
}

const Tree = () => {
  const col = [
    {
      title: 'name',
      dataIndex: ['name', 'name1'],
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
  ]

  const data = [
    {
      name: 'John',
      age: 27,
      children: [
        { name: 'TheShy', age: 0, children: [{ name: 'son', age: 1 }] },
        { name1: 'Black', age: 34 },
      ],
    },
    {
      name: 'X',
      age: null,
      children: [{ name: 'Y', age: 3 }],
    },
    {
      name: 'Z',
      age: 13,
    },
  ]

  return (
    <div>
      <Table col={col} dataSource={data} />
    </div>
  )
}

const Resizable = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 200,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <Table dataSource={data} col={col} isResizable={true} />
    </div>
  )
}

const SelectRow = () => {
  const [select, setSelect] = React.useState<string[]>([])

  const rowSelect: RowSelection<{ name: string; age: number; weight: string }> = {
    selectKey: 'name',
    selectedRowKeys: select,
    disabled: (record) => record.age < 20,
    onSelectedChange: (nv) => {
      setSelect(nv)
      console.log('select row changed', nv)
    },
  }
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <i>已选中 {select.length} 项</i>
      <Table col={col} dataSource={data} rowSelection={rowSelect} />
    </div>
  )
}

const Sort = () => {
  const col: Col<{ name: string; age: number; weight: string }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      sort: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'age',
      dataIndex: 'age',
      sort: (a, b) => a.age - b.age,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <p>可传入自定义的sort函数</p>
      <Table col={col} dataSource={data} />
    </div>
  )
}

const ServerSort = () => {
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]
  const [tableData, setTableData] = React.useState(data)
  const col: Col<{ name: string; age: number; weight: string }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      sort: true,
      sortOrder: (order) => {
        if (order === 'asc') {
          console.log('you sort by asc')
        } else if (order === 'desc') {
          console.log('you sort by desc')
        } else {
          console.log('you cancel the sort col')
        }
      },
    },
    {
      title: 'age',
      dataIndex: 'age',
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]

  return (
    <div>
      <Table col={col} dataSource={tableData} />
    </div>
  )
}

const Filter = () => {
  const col: Col<{ name: string; age: number; weight: string }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      filterItemList: [
        { text: 'Han mei mei', value: 'Han mei mei' },
        { text: 'Ma dong mei', value: 'Ma dong mei' },
      ],
      sort: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      sort: (a, b) => a.age - b.age,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
      key: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <Table col={col} dataSource={data} />
    </div>
  )
}

const FilterCustomize = () => {
  const [rangeAge, setRangeAge] = React.useState<number>(0)
  const col: Col<{ name: string; age: number; weight: string }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
      filterItemList: [
        { text: 'Han mei mei', value: 'Han mei mei' },
        { text: 'Ma dong mei', value: 'Ma dong mei' },
      ],
      sort: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'age',
      dataIndex: 'age',
      key: 'age',
      sort: (a, b) => a.age - b.age,
      filterRender: (record, checkFun, resetFun) => (
        <div style={{ color: '#000' }}>
          age > {rangeAge}
          <input
            min={10}
            max={30}
            step={1}
            type="range"
            value={rangeAge}
            onChange={(e) => {
              setRangeAge(parseInt(e.target.value))
            }}
          />
          <button
            onClick={() => {
              console.log(record)
              checkFun(record.filter((item) => item.age > rangeAge))
            }}
          >
            确定
          </button>
          <button
            onClick={() => {
              setRangeAge(0)
              resetFun()
            }}
          >
            重置
          </button>
        </div>
      ),
    },
    {
      title: 'weight',
      dataIndex: 'weight',
      key: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <Table col={col} dataSource={data} />
    </div>
  )
}

const MergeCol = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age And weight',
      dataIndex: 'age',
      colSpan: 2,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
      colSpan: 0,
    },
  ]
  const data = [
    {
      name: 'Han mei mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Ma dong mei',
      age: 27,
      weight: '200kg',
    },
  ]

  return (
    <div>
      <Table col={col} dataSource={data} theme="bordered" />
    </div>
  )
}

const MergeRow = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
      rowSpan: ({ index }) => {
        if (index === 2) {
          return 2
        }

        if (index === 3) {
          return 0
        }

        return 1
      },
    },
    {
      title: 'age And weight',
      dataIndex: 'age',
      colSpan: 2,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
      colSpan: 0,
    },
  ]
  const data = [
    {
      name: 'Ma dong mei',
      age: 28,
      weight: '60kg',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
    },
    {
      name: 'Han mei mei',
      age: 27,
      weight: '200kg',
    },
    {
      name: 'Han meimei Father',
      age: 100,
      weight: '2000kg',
    },
  ]

  return (
    <div>
      <p>可合并行，当rowspan参数设置为0时则不渲染</p>
      <Table col={col} dataSource={data} theme="bordered" />
    </div>
  )
}

export const EditTableNormal = () => {
  const DATA = [
    {
      name: 'Han meimei',
      age: 28,
      weight: '60kg',
      key: '1',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
      key: '2',
    },
    {
      name: 'Ma dongmei',
      age: null,
      weight: '200kg',
      key: '3',
    },
  ]

  const [data, setData] = React.useState(DATA)
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      isEditable: true,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]

  return (
    <div>
      <EditTable
        dataSource={data}
        col={col}
        onCheck={(item, index, exit) => {
          const newData = [...data]

          newData.splice(index, 1, item)
          setData([...newData])
          exit()
        }}
      />
    </div>
  )
}

const EditTableCustomize = () => {
  const DATA = [
    {
      name: 'Han meimei',
      age: 28,
      password: '60kg',
      key: '1',
    },
    {
      name: 'Zhong ling',
      age: 18,
      password: '60kg',
      key: '2',
    },
    {
      name: 'Ma dongmei',
      age: null,
      password: '200kg',
      key: '3',
    },
  ]

  const [data, setData] = React.useState(DATA)
  const [editKey, setEditKey] = React.useState<string>('')
  const col: ColArray<{ name: string; age: number; password: string; key: string }>[] = [
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'age',
      dataIndex: 'age',
      isEditable: true,
    },
    {
      title: 'password',
      dataIndex: 'password',
      isEditable: true,
      width: 220,
      renderItem: (changeFun, text, record, item) =>
        editKey === record.key ? (
          <Input
            id={record.key}
            style={{ width: '140px' }}
            type="password"
            value={item}
            onChange={(n) => {
              changeFun('password', n)
            }}
          />
        ) : (
          <span>{text ? text.toString().replace(/./g, '*') : ''}</span>
        ),
    },
  ]

  return (
    <div>
      <EditTable
        isCustomize={true}
        dataSource={data}
        col={col}
        onCheck={(item, index, exit) => {
          const newData = [...data]

          newData.splice(index, 1, item)
          setData([...newData])
          setEditKey('')
          exit()
        }}
        onEdit={(key) => {
          setEditKey(key)
        }}
        onCancel={() => {
          setEditKey('')
        }}
      />
    </div>
  )
}

const FixHeader = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 300,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]
  const data = [
    {
      name: 'Han meimei',
      age: 28,
      weight: '60kg',
      key: '1',
    },
    {
      name: 'Zhong ling',
      age: 18,
      weight: '60kg',
      key: '2',
    },
    {
      name: 'Ma dongmei',
      age: null,
      weight: '200kg',
      key: '3',
    },
  ]

  return (
    <div>
      <Table isFixHeader col={col} dataSource={data} scroll={{ y: '100px' }} />
    </div>
  )
}

const HeaderFooter = () => {
  const col = [
    {
      title: 'name',
      dataIndex: 'name',
      width: 200,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: 300,
    },
    {
      title: 'weight',
      dataIndex: 'weight',
    },
  ]

  return <Table dataSource={[]} col={col} header="Header" footer="Footer" />
}
