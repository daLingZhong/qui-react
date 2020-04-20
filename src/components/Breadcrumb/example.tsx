import * as React from 'react'
import Breadcrumb from './index'

import DemoCard from '@/page/components/DemoCard'

const MENU = [
  {
    children: 'menu A',
    isDisabled: true,
    isChecked: true,
  },
  {
    children: <div>menu B</div>,
  },
]

const Example = () => {
  return (
    <React.Fragment>
      <DemoCard title="基本" des="最简单的用法。" id="components-breadcrumb-demo-basic">
        <Breadcrumb>
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Item>列表页</Breadcrumb.Item>
          <Breadcrumb.Item>详情页</Breadcrumb.Item>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="分隔符" des="自定义分隔符" id="components-breadcrumb-demo-separator">
        <Breadcrumb separator="">
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <>
            <Breadcrumb.Item>列表页</Breadcrumb.Item>
            <Breadcrumb.Separator> &gt; </Breadcrumb.Separator>
            <Breadcrumb.Item>详情页</Breadcrumb.Item>
          </>
        </Breadcrumb>
      </DemoCard>

      <DemoCard title="带下拉菜单" des="面包屑支持下拉菜单。" id="components-breadcrumb-demo-dropdown">
        <Breadcrumb separator="">
          <Breadcrumb.Item>主页</Breadcrumb.Item>
          <Breadcrumb.Separator />
          <>
            <Breadcrumb.Item overlay={MENU}>列表页</Breadcrumb.Item>
            <Breadcrumb.Separator> &gt; </Breadcrumb.Separator>
            <Breadcrumb.Item>详情页</Breadcrumb.Item>
          </>
        </Breadcrumb>
      </DemoCard>
    </React.Fragment>
  )
}

export default Example
