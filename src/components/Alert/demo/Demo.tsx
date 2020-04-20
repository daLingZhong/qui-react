import * as React from 'react'

import './index.scss'
import Alert, { AlertTypeEnum } from '../index'
import DemoCard from '@/page/components/DemoCard'

const Demo: React.SFC<any> = React.memo(() => {
  const [isVisible, setVisible] = React.useState(true)
  const handleAfterClose = () => {
    setVisible(false)
  }

  return (
    <div>
      <DemoCard title="基本" des="最简单的用法，适用于简短的警告提示。" id="components-alert-demo-basic">
        <Alert type={AlertTypeEnum.info} message="提示的内容" />
      </DemoCard>

      <DemoCard title="四种样式" des="共有四种样式 success、info、warning、error。" id="components-alert-demo-type">
        <Alert type={AlertTypeEnum.info} message="提示的内容" />
        <Alert type={AlertTypeEnum.success} message="成功的内容" />
        <Alert type={AlertTypeEnum.warning} message="警告的内容" />
        <Alert type={AlertTypeEnum.error} message="错误的内容" />
      </DemoCard>

      <DemoCard title="可关闭的" des="显示关闭按钮，点击可关闭警告提示。" id="components-alert-demo-close">
        <Alert type={AlertTypeEnum.info} message="提示的内容" title="提示的标题" hasIcon={true} isClosable={true} />
      </DemoCard>

      <DemoCard title="图标" des="可口的图标让信息类型更加醒目。" id="components-alert-demo-icon">
        <Alert type={AlertTypeEnum.info} message="提示的内容" title="带标题的" hasIcon={true} />
        <Alert type={AlertTypeEnum.success} message="成功的内容" title="带标题的" hasIcon={true} />
        <Alert type={AlertTypeEnum.warning} message="警告的内容" title="带标题的" hasIcon={true} />
        <Alert type={AlertTypeEnum.error} message="错误的内容" title="带标题的" hasIcon={true} />
        <Alert type={AlertTypeEnum.info} message="自定义 icon" hasIcon={true} icon="heart" />
      </DemoCard>

      {/* {isVisible && (
        <div className="demo-alert__item">
          <h4 style={{ marginBottom: '16px' }}>支持关闭动画结束后触发回调函数</h4>
          <Alert
            type={AlertTypeEnum.info}
            message="提示的内容"
            hasIcon={true}
            isClosable={true}
            onAfterClose={handleAfterClose}
          />
        </div>
      )} */}
    </div>
  )
})

export default Demo
