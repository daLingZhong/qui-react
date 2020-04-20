import * as React from 'react'
import Cascade from './components/Cascade'
import DemoCard from '@/page/components/DemoCard'

const CascadeExample = () => {
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

  return (
    <div>
      <DemoCard title="基本" des="默认点击进入下一级" id="components-cascade-demo-basic">
        <Cascade placeholder="请选择" options={options} value={['base', 'js']} />
      </DemoCard>

      <DemoCard title="移入展开" des="通过移入展开下级菜单，点击完成选择。" id="components-cascade-demo-hover">
        <Cascade placeholder="请选择" options={options} trigger="hover" />
      </DemoCard>
    </div>
  )
}
export default CascadeExample
