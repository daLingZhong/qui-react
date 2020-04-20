import * as React from 'react'

import Card from '@/components/Card'
import Icon from '@/components/Icon'

import './index.scss'

const DemoCard: React.FC<{ title: string; des: string; id: string; code?: any }> = ({ children, title, des, id }) => {
  return (
    <Card className="democard" id={id} hasShadow={false}>
      <div className="democard__content">{children}</div>
      <div className="democard__line">
        <div className="democard__title">{title}</div>
      </div>
      <div className="democard__des">{des}</div>
      <div className="democard__code">
        <Icon icon="copy" />
      </div>
    </Card>
  )
}
export default DemoCard
