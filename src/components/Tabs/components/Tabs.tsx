import * as React from 'react'
import cls from 'classnames'
import { noop, isBoolean } from 'lodash'

import Icon from '../../Icon'
import TabItem from './TabItem'
import { TabItemProps, TabItemInter, QTabInter } from '../interface'
import { clsPrefix } from '../common'

import '../styles/tabs.scss'

type ChildItem = React.ReactElement<TabItemProps, TabItemInter>

const Tabs: QTabInter = (props) => {
  const { children, onChange, defaultActive, havebg, type, isClosable, isAddable, onRemove, onAdd, ...res } = props
  const [active, setActive] = React.useState(defaultActive)
  const contentRef = React.useRef<HTMLDivElement>(null)
  const isActiveValid = !!active || active == 0
  const child_list = initContent()

  function initContent() {
    let map: ChildItem[] = []

    React.Children.forEach<ChildItem>(children as any, (child) => {
      if (child.type.tabItem) {
        map.push(child)
      } else {
        console.warn(
          'the children of `Tabs` should be `Tabs.Item`, ' +
            `instead of \`${child.type.name || child.type.displayName || child.type}\`.`
        )
      }
    })

    return map
  }

  return (
    <div {...res}>
      <div className={`${clsPrefix}__listContent`}>
        <ul
          className={cls(`${clsPrefix}__ul`, {
            [`${clsPrefix}__ul-bg`]: havebg && type !== 'card',
            [`${clsPrefix}__ul-card`]: type === 'card',
          })}
        >
          {child_list
            .filter((item) => !!item)
            .map(
              (
                {
                  key,
                  props: { title, isDisabled, className: item_class, style: item_style, icon, isCloseable: item_close },
                },
                index
              ) => {
                const isActive = isActiveValid ? active === key : index === 0

                return (
                  <li
                    key={key}
                    className={cls(
                      `${clsPrefix}__item-${type}`,
                      {
                        [`${clsPrefix}__item-${type}-active`]: isActive,
                        [`${clsPrefix}__item-${type}-disabled`]: isDisabled,
                      },
                      item_class
                    )}
                    style={item_style}
                    onClick={() => {
                      if (!isDisabled && active !== key) {
                        if (contentRef.current) {
                          contentRef.current.classList.toggle(`${clsPrefix}__content-fadeIn`)
                          setTimeout(() => {
                            contentRef.current.classList.toggle(`${clsPrefix}__content-fadeIn`)
                          }, 400)
                        }
                        setActive(key)
                        onChange(key)
                      }
                    }}
                  >
                    {icon && <Icon icon={icon} className={`${clsPrefix}__icon`} />}
                    {title}
                    {(isBoolean(item_close) ? item_close : isClosable) && (
                      <Icon
                        icon="close"
                        className={cls(`${clsPrefix}__close`, { [`${clsPrefix}__close-disabled`]: isDisabled })}
                        onClick={(e: MouseEvent) => {
                          e.stopPropagation()
                          onRemove(key)
                        }}
                      />
                    )}
                  </li>
                )
              }
            )}

          {isAddable && <Icon icon="plus" className={`${clsPrefix}__add`} onClick={onAdd} />}
        </ul>
      </div>

      {child_list.length > 0 && (
        <div ref={contentRef} className={`${clsPrefix}__content`}>
          {isActiveValid ? child_list.find((item) => item.key === active) : child_list[0]}
        </div>
      )}
    </div>
  )
}
Tabs.defaultProps = {
  havebg: true,
  isClosable: false,
  isAddable: false,
  type: 'line',
  onChange: noop,
  onRemove: noop,
  onAdd: noop,
  defaultActive: null,
}
Tabs.Item = TabItem

export default Tabs
