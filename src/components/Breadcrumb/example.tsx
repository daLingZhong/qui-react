import * as React from 'react'
import Breadcrumb from './index'

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
    <Breadcrumb separator="">
      <Breadcrumb.Item>主页</Breadcrumb.Item>
      <Breadcrumb.Separator />
      <>
        <Breadcrumb.Item overlay={MENU}>列表页</Breadcrumb.Item>
        <Breadcrumb.Separator> &gt; </Breadcrumb.Separator>
        <Breadcrumb.Item>详情页</Breadcrumb.Item>
      </>
    </Breadcrumb>
  )
}

export default Example
