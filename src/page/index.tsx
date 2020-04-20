import * as React from 'react'
import { HashRouter as Router, Route, Switch, Link, RouteComponentProps } from 'react-router-dom'
import cls from 'classnames'

import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import ButtonExample from '../components/Button/example'
import IconExample from '../components/Icon/demo'
import BreadcrumbExample from '../components/Breadcrumb/example'
import PaginationExample from '../components/Pagination/example'
import StepExample from '../components/Steps/Example'
import InputExample from '../components/Input/example'
import RadioExample from '../components/Radio/example'
import CheckboxExample from '../components/Checkbox/example'
import SelectExample from '../components/Select/example'
import TreeSelectExample from '../components/Select/treeExample'
import CascadeExample from '../components/Select/cascadeExample'
import SwitchExample from '../components/Switch/example'
import TableExample from '../components/Table/example'
import TimelineExample from '../components/Timeline/example'
import TooltipExample from '../components/Tooltip/example'
import DrawerExample from '../components/Drawer/demo/demo'
import AlertExample from '../components/Alert/demo'
import ModalExample from '../components/Modal/example'
import MessageExample from '../components/Message/example'
import NotificationExample from '../components/Notification/example'

import { FLATTEN_MENU } from './constant/Menu'

import './index.scss'

const Page = () => {
  return (
    <Router>
      <Switch>
        <Route exact={true} strict={true} path="/" render={(props) => <Design {...props} />} />
        <Route path="/design" render={(props) => <Design {...props} />} />
        <Route path="/components" render={(props) => <Components {...props} />} />
      </Switch>
    </Router>
  )
}
export default Page

const Components: React.FC<RouteComponentProps> = (props) => {
  const [rePos, setRepos] = React.useState(0)
  const ref = React.useRef<HTMLDivElement>(null)
  const path = props.location.pathname
  const route = path.split('/').pop()
  const checked = FLATTEN_MENU.find((item) => item.route === route)
  const nav_anchor = window.location.hash.split('#').pop()

  React.useEffect(() => {
    ref?.current?.addEventListener('scroll', onScroll)

    return () => {
      ref?.current?.removeEventListener('scroll', onScroll)
    }
  }, [])

  function onScroll(e) {
    if (e.target.scrollTop < 230) {
      setRepos(230 - e.target.scrollTop)
    } else {
      setRepos(20)
    }
  }

  return (
    <div className="wrapper">
      <div className="wrapper__sidebar">
        <Sidebar route={route} />
      </div>
      <div ref={ref} className="wrapper__main">
        <header className="wrapper__header">
          <Topbar type="components" />
        </header>
        {!!checked ? (
          <React.Fragment>
            <div className="wrapper__title">
              <div>
                {checked.name}&nbsp;&nbsp;&nbsp;{checked.alias_name}
              </div>
              <div>{checked.des}</div>
            </div>
            <div className="con">
              <div className="con__content">
                <Switch>
                  <Route path="/components/button" render={ButtonExample} />
                  <Route path="/components/icon" component={IconExample} />
                  <Route path="/components/breadcrumb" component={BreadcrumbExample} />
                  <Route path="/components/pagination" component={PaginationExample} />
                  <Route path="/components/steps" component={StepExample} />
                  <Route path="/components/input" component={InputExample} />
                  <Route path="/components/radio" component={RadioExample} />
                  <Route path="/components/checkbox" component={CheckboxExample} />
                  <Route path="/components/select" component={SelectExample} />
                  <Route path="/components/treeselect" component={TreeSelectExample} />
                  <Route path="/components/cascade" component={CascadeExample} />
                  <Route path="/components/switch" component={SwitchExample} />
                  <Route path="/components/table" component={TableExample} />
                  <Route path="/components/timeline" component={TimelineExample} />
                  <Route path="/components/tooltip" component={TooltipExample} />
                  <Route path="/components/drawer" component={DrawerExample} />
                  <Route path="/components/alert" component={AlertExample} />
                  <Route path="/components/modal" component={ModalExample} />
                  <Route path="/components/message" component={MessageExample} />
                  <Route path="/components/notification" component={NotificationExample} />
                </Switch>
              </div>
              <div className="con__nav" style={rePos ? { top: `${rePos}px` } : null}>
                <ul>
                  {checked.anchor.map((a, idx) => (
                    <li className={cls({ 'con__nav-active': nav_anchor === a.route })} key={idx}>
                      <Link
                        to={`${path}#${a.route}`}
                        onClick={() => {
                          let anchorElement = document.getElementById(a.route)
                          anchorElement?.scrollIntoView()
                        }}
                      >
                        {a.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className="wrapper__404">
            <div>404</div>
          </div>
        )}
        <Footer />
      </div>
    </div>
  )
}

const Design: React.FC<RouteComponentProps> = (props) => {
  const path = props.location.pathname
  const route = path.split('/').pop()

  return (
    <div className="wrapper">
      <div className="wrapper__sidebar">
        <Sidebar route={route} type="design" />
      </div>
      <div className="wrapper__main">
        <header className="wrapper__header">
          <Topbar type="design" />
        </header>
        <Footer />
      </div>
    </div>
  )
}

const Footer = () => (
  <footer>
    <section>
      <h3>相关资料</h3>
      <a href="javascript:;">Woqu Design interface</a>
      <a href="javascript:;">Woqu Motion - 设计动效</a>
    </section>
    <section>
      <h3>帮助</h3>
      <a href="javascript:;">常见问题</a>
      <a href="javascript:;">更新日志</a>
    </section>
  </footer>
)
