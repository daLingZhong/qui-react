import * as React from 'react'
import TreeSelect from './components/TreeSelect'
import DemoCard from '@/page/components/DemoCard'

const TreeSelectExample = () => {
  const [checked, setChecked] = React.useState<string[]>([])
  const [checked1, setChecked1] = React.useState<string[]>([])

  return (
    <div>
      <DemoCard title="基本" des="单独选中一项" id="components-treeselect-demo-basic">
        <TreeSelect
          value={checked}
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
      </DemoCard>

      <DemoCard title="复选框多选" des="使用checkbox达到树形多选" id="components-treeselect-demo-checkbox">
        <TreeSelect
          value={checked1}
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
            setChecked1(nv)
          }}
        />
      </DemoCard>
    </div>
  )
}
export default TreeSelectExample
