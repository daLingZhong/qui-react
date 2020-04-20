import * as React from 'react'
import Input from './components/Input'
import Textarea from './components/Textarea'

import DemoCard from '@/page/components/DemoCard'

export default function ExamplePage(props) {
  return (
    <div>
      <DemoCard title="基本使用" des="基本使用。" id="components-input-demo-basic">
        <Input placeholder="base" />
      </DemoCard>

      <DemoCard
        title="三种大小"
        des="我们为 <Input /> 输入框定义了三种尺寸（大、默认、小），高度分别为 36px、32px 和 28px。"
        id="components-input-demo-size"
      >
        <Input size="large" placeholder="大尺寸输入框" />
        <br />
        <br />
        <Input size="middle" placeholder="默认尺寸输入框" />
        <br />
        <br />
        <Input size="small" placeholder="小尺寸输入框" />
      </DemoCard>

      <DemoCard title="前置/后置标签" des="用于配置一些固定组合。" id="components-input-demo-addon">
        <Input size="large" addonBefore="http://www." addonAfter="/#/" autoComplete="off" />
      </DemoCard>

      <DemoCard title="前缀和后缀" des="在输入框上添加前缀或后缀图标或直接成为密码框。" id="components-input-demo-fix">
        <Input type="password" autoComplete="off" />
      </DemoCard>

      <DemoCard title="禁用状态" des="输入框禁用状态。" id="components-input-demo-disabled">
        <Input value="test" type="password" isDisabled placeholder="默认尺寸输入框" />
      </DemoCard>

      <DemoCard title="文本域" des="可指定行数。" id="components-input-demo-textarea">
        <Textarea rows={3} />
      </DemoCard>

      <DemoCard title="状态" des="可指定输入框错误状态。" id="components-input-demo-error">
        <Input placeholder="test" isError errorText="必填项" />
      </DemoCard>
    </div>
  )
}
