import * as React from 'react'
import * as classNames from 'classnames'

import Tabs from '@/components/Tabs'

import './index.scss'
import Icon, { IconTypeEnum } from '../index'
import iconList from './iconList'

const Demo: React.SFC<any> = React.memo(() => {
  const tabList = ['unicode', 'fontClass', 'symbol']
  const [tab, setTab] = React.useState('unicode')
  const handleTabNavClick = (event) => {
    setTab(event.currentTarget.dataset.tab)
  }

  return (
    <section className="demo">
      <Tabs
        onChange={(key) => {
          setTab(key as any)
        }}
      >
        {tabList.map((item) => (
          <Tabs.Item key={item} title={item}>
            <ul className="icons">
              {iconList.map((icon) => (
                <li key={icon[tab]} className="icons__item">
                  <div className="icons__icon">
                    <Icon
                      icon={icon[tab]}
                      type={
                        tab === 'unicode'
                          ? IconTypeEnum.unicode
                          : tab === 'fontClass'
                          ? IconTypeEnum.fontClass
                          : IconTypeEnum.symbol
                      }
                    />
                  </div>
                  <div className="icons__name">{icon.name}</div>
                  <div className="icons__code-name">{icon[tab]}</div>
                </li>
              ))}
            </ul>
          </Tabs.Item>
        ))}
      </Tabs>
    </section>
  )
})

export default Demo
