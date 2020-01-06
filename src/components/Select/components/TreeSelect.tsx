import * as React from 'react'
import classNames from 'classnames'

import Icon from '@/components/Icon'
import { PortalWithState } from '@/components/Portal'
import { Menu } from '@/components/Menu'
import { CSSTransition, TransitionGroup } from '@/components/Animate'
import { KEYCODE } from '@/constants/common'
import noop from '@/utils/noop'
import flatten from '@/utils/flatten'

import TreeNode from './TreeNode'
import { clsPrefix, clsPrefixTree, LINE_HEIGHT } from '../common'
import { QTreeSelectInter, TreeSelectOptions, TreeSelectValueType } from '../interface'

const TreeSelect = <T extends TreeSelectValueType>(props: QTreeSelectInter<T>) => {
  const {
    value,
    options,
    className,
    noResultContent,
    isCheckable,
    isCleaner,
    isDisabled,
    isError,
    isLoading,
    isSearch,
    errorText,
    isRenderSlide,
    placeholder,
    size,
    onBlur,
    onFocus,
    onChange,
    showCheckedStrategy,
    container,
    ...resProps
  } = props
  const [selectFocus, setSelectFocus] = React.useState<boolean>(false)
  const [showCleanAll, setShowCleanAll] = React.useState<boolean>(false)
  const [inputValue, setInputValue] = React.useState<string>('')
  const selectRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const inputMirrorRef = React.useRef(null)
  const portalRef = React.useRef(null)
  const _options = flatten(options, ['value', 'label', 'isDisabled'])
  const menuStyle = {
    width: selectRef.current ? selectRef.current.getBoundingClientRect().width : '300px',
    lineHeight: LINE_HEIGHT[size],
  }

  // React.useImperativeHandle(ref, () => ({
  //   focus: () => {
  //     selectRef.current.focus()
  //   },
  //   blur: () => {
  //     selectRef.current.blur()
  //   },
  // }))

  // 获取整体 Select 于浏览器视口的位置，以便做下拉框定位处理
  React.useLayoutEffect(() => {
    portalRef.current.rePosition()
  }, [inputValue, value])

  // 动态改变最后一个幽灵输入节点 li 中的 input 的长度来自试应输入内容
  React.useEffect(() => {
    const { width } = selectRef.current.getBoundingClientRect()

    if (inputValue && inputRef && inputMirrorRef) {
      if (inputMirrorRef.current.clientWidth < width - 20) {
        inputRef.current.style.width = inputMirrorRef.current.clientWidth + 'px'
      }
    }
  }, [inputValue])

  function renderInput() {
    return (
      <li
        className={`${clsPrefix}-selection__inputWrapper`}
        style={isSearch && typeof value === 'string' ? { position: 'absolute' } : {}}
      >
        <input
          type="text"
          style={{ backgroundColor: 'transparent' }}
          value={inputValue}
          ref={inputRef}
          onFocus={() => {
            setSelectFocus(true)
          }}
          onChange={(e) => {
            const value = e.target.value

            setInputValue(value)
          }}
          onBlur={() => {
            setSelectFocus(false)
          }}
          onKeyDown={(e) => {
            if (e.keyCode === KEYCODE.BACKSPACE && !inputValue && typeof value !== 'string') {
              const res = (value as string[]).pop()

              delNode(res)
            }
          }}
        />
        <span ref={inputMirrorRef} className={`${clsPrefix}-selection__inputField-mirror`}>
          &nbsp;{inputValue}&nbsp;
        </span>
      </li>
    )
  }

  function findItem(
    itemValue: string,
    data: TreeSelectOptions[],
    fatherNode = null
  ): { own: TreeSelectOptions; fatherNode: TreeSelectOptions } {
    let res = null

    for (const item of data) {
      if (item.value === itemValue) {
        res = { own: item, fatherNode: fatherNode }
      } else {
        if (item.children && item.children.length > 0) {
          res = findItem(itemValue, item.children, item)
        }
      }

      if (!!res) {
        break
      }
    }

    return res
  }

  function delNode(item: string) {
    const itemFlattenTree = flatten([findItem(item, options).own], ['value'])
    let list = [...(value as string[])]

    onChangeList(list.filter((a) => !itemFlattenTree.find((b) => b.value === a)) as typeof value, 'del')
  }

  function renderPlaceholder() {
    return (
      <div unselectable="on" className={`${clsPrefix}__placeholder`}>
        {placeholder}
      </div>
    )
  }

  function onChangeList(data: T, action?: 'add' | 'del') {
    if (!data) {
      return
    }

    if (typeof data === 'string' || !isCheckable) {
      onChange(data)
    } else {
      let _data = [...(data as string[])]

      if (showCheckedStrategy === 'all') {
        if (action === 'add') {
          _data.map((item) => {
            function addItem(itemData: string) {
              const node = findItem(itemData, options)
              const fnode = node ? node.fatherNode : null

              if (
                fnode &&
                fnode.children &&
                !_data.includes(fnode.value) &&
                fnode.children.filter((a) => !a.isDisabled && _data.includes(a.value)).length ===
                  fnode.children.filter((a) => !a.isDisabled).length
              ) {
                _data.push(fnode.value)
                addItem(fnode.value)
              }
            }

            addItem(item)
          })
        } else {
          _data.map((item) => {
            const node = findItem(item, options)
            const onode = node ? node.own : null

            if (onode && onode.children) {
              const flattenNode = flatten(onode.children, ['value'])

              for (const a of flattenNode) {
                if (!_data.find((b) => !a.isDisabled && b === a.value)) {
                  _data = _data.filter((b) => b !== item)
                  break
                }
              }
            }
          })
        }
      }

      onChange(_data as typeof value)
    }

    setInputValue('')
  }

  function renderTree(closeFun) {
    return options.length > 0 ? (
      options.map((item, index) => (
        <TreeNode
          key={index}
          preState={true}
          node={item}
          flattenList={options}
          parentNode={null}
          selectedItem={value}
          onChange={onChangeList}
          showCheckedStrategy={showCheckedStrategy}
          closeFun={closeFun}
          checkable={isCheckable}
          searchValue={inputValue}
        />
      ))
    ) : (
      <div style={{ textAlign: 'center' }}>暂无数据</div>
    )
  }

  return (
    <PortalWithState
      closeOnOutsideClick={true}
      position="bottom"
      container={container}
      ref={portalRef}
      style={{ zIndex: 1200 }}
    >
      {({ openPortal, closePortal, isOpen, portal }) => (
        <div
          className={classNames(`${clsPrefix}`, `${clsPrefixTree}`, {
            [`${clsPrefix}-disabled`]: isDisabled,
            [`${clsPrefix}-input`]: isSearch,
            className,
          })}
          {...resProps}
        >
          <div
            className={classNames(`${clsPrefix}-selection`, `${clsPrefix}-selection-${size}`, {
              [`${clsPrefix}-selection-disabled`]: isDisabled,
              [`${clsPrefix}-selection-hover`]: !isError,
              [`${clsPrefix}-selection-focus`]: selectFocus && !isError,
              [`${clsPrefix}-selection-focusError`]: selectFocus && isError,
              [`${clsPrefix}-selection-error`]: isError && !isDisabled,
            })}
            ref={selectRef}
            onClick={(e) => {
              if (!isOpen) {
                openPortal(e)
              }
            }}
            onFocus={(e) => {
              setSelectFocus(true)
              if (isSearch) {
                inputRef.current.focus()
              }
              onFocus(e)
            }}
            onBlur={(e) => {
              setSelectFocus(false)
              if (!inputRef.current) {
                closePortal()
                onBlur(e)
              }
            }}
            onMouseOver={() => {
              setShowCleanAll(true)
            }}
            onMouseOut={() => {
              setShowCleanAll(false)
            }}
            tabIndex={isDisabled ? -1 : 0}
          >
            <div className={classNames(`${clsPrefix}-selection__render`, `${clsPrefix}-selection__render-${size}`)}>
              {!(value instanceof Array) ? (
                <React.Fragment>
                  {isSearch && renderInput()}
                  {!value ? (
                    renderPlaceholder()
                  ) : (
                    <div
                      title={_options.find((item) => item.value === value).label.toString()}
                      className={classNames(`${clsPrefix}-selection__render-value`)}
                    >
                      {!inputValue && _options.find((item) => item.value === value).label}
                    </div>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {value.length === 0 && inputValue === '' && renderPlaceholder()}

                  {/* 标签列表 */}
                  <TransitionGroup component="ul">
                    {value.map((item, index) => {
                      const selectItem = _options.find((a) => a.value === item)

                      return (
                        <CSSTransition
                          classNames={`${clsPrefix}-selection__tags`}
                          timeout={300}
                          key={index}
                          onEnter={() => {
                            portalRef.current?.rePosition()
                          }}
                        >
                          <li
                            title={selectItem.label.toString()}
                            className={`${clsPrefix}-selection__tags`}
                            onMouseDown={(e) => {
                              e.preventDefault()
                            }}
                          >
                            <div className={`${clsPrefix}-selection__tagsContent`}>{selectItem.label}</div>
                            <Icon
                              icon="close"
                              className={`${clsPrefix}-selection__tagsIcon`}
                              onMouseDown={(e) => {
                                e.preventDefault()
                                delNode(item)
                              }}
                            />
                          </li>
                        </CSSTransition>
                      )
                    })}

                    {/* 输入框 */}
                    {isSearch && <CSSTransition timeout={0}>{renderInput()}</CSSTransition>}
                  </TransitionGroup>
                </React.Fragment>
              )}
            </div>

            {/* 下拉三角按钮及Loading图标*/}
            {isLoading ? (
              <div className={`${clsPrefix}-loading`} />
            ) : (
              <Icon
                icon={showCleanAll && isCleaner ? 'close-circle' : 'down'}
                className={classNames(showCleanAll && isCleaner ? `${clsPrefix}-clean` : `${clsPrefix}-arrow`, {
                  [`${clsPrefix}-arrow-active`]: isOpen && !showCleanAll && !isCleaner,
                })}
                onClick={(e: MouseEvent) => {
                  if (showCleanAll && isCleaner) {
                    e.stopPropagation()

                    onChange((typeof value === 'string' ? '' : []) as typeof value)
                  }
                }}
              />
            )}
          </div>

          {isError && errorText && <span className={`${clsPrefix}__errorText`}>{errorText}</span>}

          {isRenderSlide &&
            portal(
              <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={classNames(`${clsPrefix}__slide`)}
                unmountOnExit={true}
              >
                {options.length === 0 ? (
                  <Menu
                    className={`${clsPrefix}__slide`}
                    style={menuStyle}
                    tabIndex={-1}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <Menu.Item isDisabled className={`${clsPrefix}__slide-noData`}>
                      {noResultContent}
                    </Menu.Item>
                  </Menu>
                ) : (
                  <div
                    style={menuStyle}
                    className={classNames(`${clsPrefix}__slide`, `${clsPrefixTree}__menu`)}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                  >
                    <div style={{ marginTop: '-4px' }}>{renderTree(closePortal)}</div>
                  </div>
                )}
              </CSSTransition>
            )}
        </div>
      )}
    </PortalWithState>
  )
}

TreeSelect.defaultProps = {
  options: [],
  value: '',
  noResultContent: '暂无数据',
  isDisabled: false,
  isCheckable: false,
  isCleaner: true,
  isRenderSlide: true,
  size: 'default',
  isLoading: false,
  showCheckedStrategy: 'all',
  placeholder: '',
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
}

export default TreeSelect
