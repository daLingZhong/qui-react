import * as React from 'react'
import { TabItemInter } from '../interface'

const TabItem: TabItemInter = (props) => {
  return <span>{props.children}</span>
}
TabItem.defaultProps = {
  isDisabled: false,
}
TabItem.tabItem = true

export default TabItem
