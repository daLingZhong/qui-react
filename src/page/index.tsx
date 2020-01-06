import * as React from 'react'
import { Route, HashRouter as Router, Link } from 'react-router-dom'
import { HuePicker } from 'react-color'

import Switch from '@/components/Switch'

import InputExample from '../components/Input/example'
import IconDemo from '../components/Icon/demo'
import TableExample from '../components/Table/example'
import SwitchExample from '../components/Switch/example'
import TimelineExample from '../components/Timeline/example'
import AlertDemo from '../components/Alert/demo'
import PortalExample from '../components/Portal/example'
import DrawerDemo from '../components/Drawer/demo/demo'
import SelectExample from '../components/Select/example'
import CheckboxExample from '../components/Checkbox/example'
import RadioExample from '../components/Radio/example'
import ButtonExample from '../components/Button/example'
import PaginationExample from '../components/Pagination/example'
import MenuExample from '../components/Menu/example'
import ModalExample from '../components/Modal/example'
import NoticeExample from '../components/Notification/example'
import MessageExample from '../components/Message/example'
import CardExample from '../components/Card/example'
import TabsExample from '../components/Tabs/example'
import TooltipExample from '../components/Tooltip/example'
import BreadcrumbExample from '../components/Breadcrumb/example'
import StepsExample from '../components/Steps/Example'

import changeTheme from '../utils/changeTheme'
import switchMode from '../utils/changeMode'

import './index.scss'

const ExamplePage = () => {
  const [mode, setMode] = React.useState<'dark' | 'white'>('white')

  return (
    <Router>
      <main style={{ padding: '20px' }}>
        <HuePicker
          color="#1a91f9"
          onChangeComplete={(color) => {
            changeTheme(color.hex, mode === 'white')
          }}
        />
        <br />
        Dark Mode&nbsp;&nbsp;&nbsp;
        <Switch
          size="small"
          isChecked={mode === 'dark'}
          onChange={(nv) => {
            if (nv) {
              setMode('dark')
              switchMode('dark')
              document.documentElement.style.setProperty('--bg', '#17191d')
              document.documentElement.style.setProperty('--color', '#fff')
            } else {
              setMode('white')
              switchMode('white')
              document.documentElement.style.setProperty('--bg', '#f6f7f8')
              document.documentElement.style.setProperty('--color', '#000')
            }
          }}
        />
        <nav>
          <h3>通用</h3>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
          </ul>

          <h3>导航</h3>
          <ul>
            <li>
              <Link to="/breadcrumb">Breadcrumb</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
            <li>
              <Link to="/steps">Steps</Link>
            </li>
          </ul>

          <h3>数据输入</h3>
          <ul>
            <li>
              <Link to="/input">Input</Link>
            </li>
            <li>
              <Link to="/radio">Radio</Link>
            </li>
            <li>
              <Link to="/checkbox">Checkbox</Link>
            </li>
            <li>
              <Link to="/select">Select</Link>
            </li>
            <li>
              <Link to="/switch">Switch</Link>
            </li>
          </ul>

          <h3>数据展示</h3>
          <ul>
            <li>
              <Link to="/table">Table</Link>
            </li>
            <li>
              <Link to="/tabs">Tabs</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/tooltip">Tooltip</Link>
            </li>
            <li>
              <Link to="/card">Card</Link>
            </li>
          </ul>

          <h3>数据反馈</h3>
          <ul>
            <li>
              <Link to="/drawer">Drawer</Link>
            </li>
            <li>
              <Link to="/alert">Alert</Link>
            </li>
            <li>
              <Link to="/modal">Modal</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
            </li>
            <li>
              <Link to="/notice">Notification</Link>
            </li>
          </ul>

          <h3>其他</h3>

          <ul>
            <li>
              <Link to="/portal">Portal</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </nav>
        <Route path="/icon" component={IconDemo} />
        <Route path="/input" component={InputExample} />
        <Route path="/table" component={TableExample} />
        <Route path="/switch" component={SwitchExample} />
        <Route path="/timeline" component={TimelineExample} />
        <Route path="/alert" component={AlertDemo} />
        <Route path="/portal" component={PortalExample} />
        <Route path="/drawer" component={DrawerDemo} />
        <Route path="/select" component={SelectExample} />
        <Route path="/checkbox" component={CheckboxExample} />
        <Route path="/radio" component={RadioExample} />
        <Route path="/button" component={ButtonExample} />
        <Route path="/pagination" component={PaginationExample} />
        <Route path="/menu" component={MenuExample} />
        <Route path="/modal" component={ModalExample} />
        <Route path="/notice" component={NoticeExample} />
        <Route path="/message" component={MessageExample} />
        <Route path="/card" component={CardExample} />
        <Route path="/tabs" component={TabsExample} />
        <Route path="/tooltip" component={TooltipExample} />
        <Route path="/breadcrumb" component={BreadcrumbExample} />
        <Route path="/steps" component={StepsExample} />
      </main>
    </Router>
  )
}
export default ExamplePage
