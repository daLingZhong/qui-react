import * as React from 'react'

import './index.scss'
import Alert, { AlertTypeEnum } from '../index'

const Demo: React.SFC<any> = React.memo(() => {
  const [isVisible, setVisible] = React.useState(true)
  const handleAfterClose = () => {
    setVisible(false)
  }

  return (
    <section className="demo-alert">
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=9937a2f3-0998-4b71-9cdd-7d64437f29eb&project_id=9937a2f3-0998-4b71-9cdd-7d64437f29eb&image_id=74da6242-c5a7-44ca-8446-f7a6436da835">
        UI Design
      </a>
      <br />
      <br />
      <br />
      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="提示的内容" />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.success} message="成功的内容" />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.warning} message="警告的内容" />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.error} message="错误的内容" />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="提示的内容" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.success} message="成功的内容" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.warning} message="警告的内容" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.error} message="错误的内容" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="提示的内容" title="带标题的" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.success} message="成功的内容" title="带标题的" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.warning} message="警告的内容" title="带标题的" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.error} message="错误的内容" title="带标题的" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="自定义 icon" hasIcon={true} icon="heart" />
      </div>

      {isVisible && (
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
      )}

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="提示的内容" title="提示的标题" hasIcon={true} />
      </div>

      <div className="demo-alert__item">
        <Alert type={AlertTypeEnum.info} message="提示的内容" title="提示的标题" hasIcon={true} isClosable={true} />
      </div>

      <div className="demo-alert__item">
        <h4 style={{ marginBottom: '16px' }}>连续的 Alert 之间会自带间隔</h4>
        <Alert type={AlertTypeEnum.info} message="提示的内容" isClosable={true} />
        <Alert type={AlertTypeEnum.success} message="成功的内容" isClosable={true} />
        <Alert type={AlertTypeEnum.warning} message="警告的内容" isClosable={true} />
        <Alert type={AlertTypeEnum.error} message="错误的内容" isClosable={true} />
      </div>
    </section>
  )
})

export default Demo
