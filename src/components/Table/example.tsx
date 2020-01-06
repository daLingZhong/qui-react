import * as React from 'react'

import Table from '../Table/components/Table'
import { TableTheme, Col, ColArray, RowSelection } from './interface'
import EditTable from '../Table/components/EditTable'
import Input from '../Input'

const ExampleTablePage: React.SFC = () => {
  return (
    <div>
      <h2>Table Example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65">UI Design</a>
      <br />
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=92e61ded-6899-4459-9482-281c0c7a6a09">
        Dark UI Design
      </a>
      <h3>Normal</h3>
      <Normal />
      <h3>AbNormal</h3>
      <AbNormal />
      <h3>Header & Footer</h3>
      <HeaderFooter />
      <h3>ExpandedRow</h3>
      <ExpandedRow />
      <h3>Tree</h3>
      <Tree />
      <h3>Resizable</h3>
      <Resizable />
      <h3>SelectRow</h3>
      <SelectRow />
      <h3>Sort</h3>
      <Sort />
      <h3>Sever Sort</h3>
      <ServerSort />
      <h3>Filter</h3>
      <Filter />
      <h3>Filter: Customize</h3>
      <FilterCustomize />
      <h3>MergeCol</h3>
      <MergeCol />
      <h3>MergeRow</h3>
      <MergeRow />
      <h3>Fix Header</h3>
      <FixHeader />
      <h3>EditTable</h3>
      <EditTableNormal />
      <h3>EditTable: Customize</h3>
      <EditTableCustomize />
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
      <p>支持自定义渲染表格头或单元格，直接传入渲染函数即可</p>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={compact}
            onChange={() => {
              if (compact) {
                setCompact(false)
              } else {
                setCompact(true)
              }
            }}
          />
          compact 紧凑型表格
        </li>
        <li>
          <label>
            <input
              name="theme"
              type="radio"
              checked={theme === 'underline'}
              value="underline"
              onChange={() => {
                setTheme('underline')
              }}
            />
            underline
          </label>
          <label>
            <input
              name="theme"
              type="radio"
              checked={theme === 'bordered'}
              value="bordered"
              onChange={() => {
                setTheme('bordered')
              }}
            />
            bordered
          </label>
        </li>
      </ul>
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
      <p>可自定义异常状态下提示文案或者自行传入渲染函数，优先级: error > loading > nodata</p>
      <ul>
        <li>
          <input
            type="checkbox"
            checked={loading}
            onChange={() => {
              if (loading) {
                setLoading(false)
              } else {
                setLoading(true)
              }
            }}
          />
          loading
        </li>
        <li>
          <input
            type="checkbox"
            checked={error}
            onChange={() => {
              if (error) {
                setError(false)
              } else {
                setError(true)
              }
            }}
          />
          error
        </li>
        <li>
          <input
            type="checkbox"
            checked={noData}
            onChange={() => {
              if (noData) {
                setNodata(false)
              } else {
                setNodata(true)
              }
            }}
          />
          nodata
        </li>
      </ul>
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
      <p>
        遇到<b>children</b>字段将会自动渲染为子节点
      </p>
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
      <p>可伸缩列,需指定当前列的width属性才可获得伸缩功能</p>
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
      <p>
        可指定作为主键选择的key，如不指定则需要源数据中存在key字段。暂时无法做到父子节点的选中判断，每一行将都是独立的
      </p>
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
      <p>服务端排序, 可以给sort字段传入true表示开启，并且通过sortOrder字段传入回调函数控制总数据</p>
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
      <p>筛选表格, 每一列必须传入唯一的Col.key，可以传入固定的需要筛选的项</p>
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
      <p>自定义筛选表格</p>
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
      <p>可合并列，合并后的列标题将会自动居中</p>
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
      <p>可编辑表格，直接传入editable: true选项调用编辑功能</p>
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
      <p>支持自定义渲染编辑模式，可与自动编辑混合使用</p>
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
      <p>
        需要指定 column 的 width 属性，否则列头和内容可能不对齐。如果指定 width
        不生效，请尝试建议留一列不设宽度以适应弹性布局，或者检查是否有超长连续字段破坏布局。
      </p>
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
