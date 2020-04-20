import * as React from 'react'

import Button from '@/components/Button'
import DemoCard from '@/page/components/DemoCard'

const ExampleButton = () => {
  return (
    <div>
      <DemoCard
        title="按钮主题"
        des="按钮有七种主题：默认、主要、成功、警告、错误、虚线和文字。主按钮在同一个操作区域最多出现一次。"
        id="components-button-demo-basic"
      >
        <Button style={{ marginRight: '10px' }}>默认</Button>
        <Button theme="primary" style={{ marginRight: '10px' }}>
          主要
        </Button>
        <Button theme="success" style={{ marginRight: '10px' }}>
          默认
        </Button>
        <Button theme="warning" style={{ marginRight: '10px' }}>
          警告
        </Button>
        <Button theme="danger" style={{ marginRight: '10px' }}>
          错误
        </Button>
        <Button theme="dashed" style={{ marginRight: '10px' }}>
          虚线
        </Button>
        <Button theme="text">文字</Button>
      </DemoCard>

      <DemoCard
        title="图标按钮"
        des="当需要在 Button 内嵌入 Icon 时，可以设置 icon 属性，或者直接在 Button 内使用 Icon 组件。"
        id="components-button-demo-icon"
      >
        <Button icon="plus" style={{ marginRight: '10px' }}>
          默认
        </Button>
        <Button icon="plus" />
      </DemoCard>

      <DemoCard
        title="按钮尺寸"
        des="按钮有大、中、小、超小四种尺寸。通过设置 size 为 large small mini 分别把按钮设为大、小、超小尺寸。若不设置 size，则尺寸为中。"
        id="components-button-demo-size"
      >
        <Button size="large" style={{ marginRight: '10px' }}>
          大尺寸
        </Button>
        <Button style={{ marginRight: '10px' }}>默认</Button>
        <Button size="small" style={{ marginRight: '10px' }}>
          小尺寸
        </Button>
        <Button size="mini" style={{ marginRight: '10px' }}>
          超小尺寸
        </Button>
      </DemoCard>

      <DemoCard
        title="禁用状态"
        des="添加 isDisabled 属性即可让按钮处于不可用状态，同时按钮样式也会改变。"
        id="components-button-demo-disabled"
      >
        <Button theme="primary" style={{ marginRight: '10px' }} isDisabled>
          Disabled
        </Button>
        <Button style={{ marginRight: '10px' }} isDisabled>
          Disabled
        </Button>
        <Button icon="plus" isDisabled style={{ marginRight: '10px' }} />
        <Button theme="text" isDisabled>
          文字
        </Button>
      </DemoCard>

      <DemoCard
        title="加载中状态"
        des="添加 isLoading 属性即可让按钮处于加载状态，可以通过 loadingText 属性定制加载中的文本。"
        id="components-button-demo-loading"
      >
        <Button isLoading theme="primary" style={{ marginRight: '10px' }}>
          Test
        </Button>
        <Button isLoading />
      </DemoCard>

      <DemoCard title="按钮组合" des="可以将多个 Button 放入 Button.Group 的容器中。" id="components-button-demo-group">
        <Button.Group>
          <Button theme="primary" isDisabled>
            abc
          </Button>
          <Button theme="primary">klda</Button>
          <Button theme="primary">123</Button>
        </Button.Group>
      </DemoCard>

      <DemoCard title="按钮自定义" des="可以自定义按钮点击时高亮颜色。" id="components-button-demo-wave">
        <Button waveColor="black">Customize</Button>
      </DemoCard>
    </div>
  )
}
export default ExampleButton
