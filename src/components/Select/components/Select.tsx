import * as React from 'react'
import classNames from 'classnames'

import Icon from '@/components/Icon'
import { CSSTransition, TransitionGroup } from '@/components/Animate'
import { Menu } from '@/components/Menu'
import { PortalWithState } from '@/components/Portal'
import { KEYCODE } from '@/constants/common'
import noop from '@/utils/noop'

import { ValueLabel, QSelectInter, QSelectRef } from '../interface'
import { clsPrefix, LINE_HEIGHT } from '../common'
import { Option, OptionGroup } from './Option'

import '../styles/select.scss'

const Select = React.forwardRef<QSelectRef, QSelectInter>((props, ref) => {
  const {
    className,
    placeholder,
    defaultValue,
    isReRenderDfVal,
    isDisabled,
    haveDropdownIcon,
    isError,
    isLabelInValue,
    isRenderSlide,
    isSearch,
    errorText,
    mode,
    size,
    onChange,
    onInputChange,
    children,
    isLoading,
    onBlur,
    onFocus,
    onScrollButtom,
    onDropDownVisible,
    container,
    ...resProps
  } = props
  const [selectedValue, setSelectedValue] = React.useState<ValueLabel>(
    (defaultValue ? buildDefaultValue(defaultValue) : defaultValue) as ValueLabel
  )
  const [selectFocus, setSelectFocus] = React.useState<boolean>(false)
  const [focusItem, setFocusItem] = React.useState<ValueLabel>(null)
  const [inputValue, setInputValue] = React.useState<string>('')
  const [tagList, setTagList] = React.useState<ValueLabel[]>(
    (defaultValue ? buildDefaultValue(defaultValue) : []) as ValueLabel[]
  )
  const selectRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const inputMirrorRef = React.useRef(null)
  const portalRef = React.useRef(null)

  const isNormalMode = mode === 'default'

  React.useEffect(() => {
    if (isReRenderDfVal) {
      if (defaultValue instanceof Array) {
        setTagList(buildDefaultValue(defaultValue) as ValueLabel[])
      } else {
        setSelectedValue(buildDefaultValue(defaultValue) as ValueLabel)
      }
    }
  }, [defaultValue])

  // 获取整体 Select 于浏览器视口的位置，以便做下拉框定位处理
  React.useLayoutEffect(() => {
    portalRef.current.rePosition()
  }, [inputValue, tagList])

  // 动态改变最后一个幽灵输入节点 li 中的 input 的长度来自试应输入内容
  React.useEffect(() => {
    const { width } = selectRef.current.getBoundingClientRect()

    if (inputValue && inputRef && inputMirrorRef) {
      if (inputMirrorRef.current.clientWidth < width - 20) {
        inputRef.current.style.width = inputMirrorRef.current.clientWidth + 'px'
      }
    }

    onInputChange(inputValue)
  }, [inputValue])

  // 当选择项改变时清空输入框
  React.useEffect(() => {
    setInputValue('')
  }, [selectedValue, tagList])
  React.useEffect(() => {
    if (!selectFocus) {
      setInputValue('')
    }
  }, [selectFocus])

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      selectRef.current.focus()
    },
    blur: () => {
      selectRef.current.blur()
    },
    cleanData: () => {
      setTagList([])
      setSelectedValue(null)
    },
  }))

  // 构建defaultValue
  function buildDefaultValue(val: typeof defaultValue) {
    if (val instanceof Array) {
      return getAllItemPropsValue().filter((item) => val.includes(item.value as string))
    } else {
      return val
    }
  }

  function renderPlaceholder() {
    return (
      <div unselectable="on" className={`${clsPrefix}__placeholder`}>
        {placeholder}
      </div>
    )
  }

  function renderInput() {
    return (
      <li
        className={`${clsPrefix}-selection__inputWrapper`}
        style={isSearch && mode !== 'multiple' ? { position: 'absolute' } : {}}
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
            const list = [...tagList]

            if (e.keyCode === KEYCODE.BACKSPACE && !inputValue) {
              list.pop()
              setTagList(list)
            } else if ((e.keyCode === KEYCODE.TAB || e.keyCode === KEYCODE.ENTER) && mode === 'tags' && inputValue) {
              e.preventDefault()

              list.push({ value: inputValue, label: inputValue })
              setTagList(list)
              onChange(list.map((item) => item.value as string))
              setInputValue('')
              inputRef.current.style.width = '0.75em'
            } else if (!inputValue && e.keyCode === KEYCODE.TAB) {
              setFocusItem(null)
            }
          }}
        />
        <span ref={inputMirrorRef} className={`${clsPrefix}-selection__inputField-mirror`}>
          &nbsp;{inputValue}&nbsp;
        </span>
      </li>
    )
  }

  function renderMenu(childDom: React.ReactNode, closeFun) {
    const sel: React.ReactNode[] = []

    childDom &&
      React.Children.forEach(childDom, (child, index) => {
        const type = (child as React.ReactElement<any>).type as any
        const props = (child as React.ReactElement<any>).props

        if (type.Option) {
          sel.push(buildOptionItem(index, closeFun, props))
        } else if (type.OptionGroup) {
          const groupSel = []

          React.Children.forEach(props.children, (item, itemIndex) => {
            const props = (item as React.ReactElement<any>).props

            groupSel.push(buildOptionItem(itemIndex, closeFun, props))
          })
          sel.push(
            <OptionGroup key={index} classNames={`${clsPrefix}Group`} {...props}>
              {groupSel}
            </OptionGroup>
          )
        } else {
          console.warn(
            'the children of `Select` should be `Select.Option` or `Select.OptionGroup`, ' +
              `instead of \`${type.name || type.displayName || type}\`.`
          )
        }
      })

    if (sel.length === 0) {
      sel.push(
        <Option key="none" isDisabled style={{ textAlign: 'center' }} isChecked={false}>
          暂无数据
        </Option>
      )
    }

    return sel
  }

  function buildOptionItem(index, closeFun, props) {
    let item: React.ReactNode = null

    item = (
      <Option
        key={index}
        onCheck={(value) => {
          const { isDisabled, onCustomizeFun, children } = props

          if (!isDisabled) {
            if (!onCustomizeFun) {
              onCheckFun(value, children, closeFun)
            } else {
              onCustomizeFun((nv: ValueLabel) => {
                setSelectedValue(nv)
                setFocusItem(null)
              }, closeFun)
            }
          }
        }}
        focusItem={focusItem ? focusItem.value : null}
        checkedItem={isNormalMode ? (selectedValue ? selectedValue.value : null) : tagList}
        {...props}
      />
    )

    return item
  }

  function onCheckFun(value, label, closeFun) {
    if (isNormalMode) {
      setSelectedValue({ value: value, label: label })
      closeFun()
      setFocusItem(null)
      if (isLabelInValue) {
        onChange({ value: value, label: label })
      } else {
        onChange(value)
      }
    } else {
      let list = [...tagList]

      if (list.find((item) => item.value === value)) {
        list = list.filter((item) => item.value !== value)
      } else {
        list.push({ value: value, label: label })
      }

      setTagList(list)
      onChange(list.map((item) => item.value as string))
    }
  }

  function getAllItemPropsValue() {
    const res: { value: string | number; label: React.ReactNode }[] = []

    React.Children.forEach(children, (child, index) => {
      const type = (child as React.ReactElement<any>).type as any
      const props = (child as React.ReactElement<any>).props

      if (type.Option && !props.isDisabled) {
        res.push({ value: props.value, label: props.children })
      } else if (type.OptionGroup) {
        React.Children.forEach(props.children, (itemChild, itemIndex) => {
          const itemProps = (itemChild as React.ReactElement<any>).props

          if (!itemProps.isDisabled) {
            res.push({ value: itemProps.value, label: itemProps.children })
          }
        })
      }
    })

    return res
  }

  return (
    <PortalWithState
      closeOnOutsideClick={true}
      onOpen={onDropDownVisible}
      container={container}
      position="bottom"
      ref={portalRef}
      style={{ zIndex: 1200 }}
    >
      {({ openPortal, closePortal, isOpen, portal }) => (
        <div
          className={classNames(
            `${clsPrefix}`,
            {
              [`${clsPrefix}-disabled`]: isDisabled,
              [`${clsPrefix}-input`]: mode === 'tags' || isSearch,
            },
            className
          )}
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
              if (mode === 'tags' || isSearch) {
                inputRef.current.focus()
              }
              onFocus(e)
            }}
            onBlur={(e) => {
              setSelectFocus(false)
              if (!inputRef.current) {
                closePortal()
                setFocusItem(null)
                onBlur(e)
              }
            }}
            onKeyDown={(e) => {
              if (
                e.keyCode === KEYCODE.DOWN &&
                !focusItem &&
                (document.activeElement === selectRef.current || document.activeElement === inputRef.current)
              ) {
                e.preventDefault()
                openPortal(e)
              }

              if ((e.keyCode === KEYCODE.DOWN || e.keyCode === KEYCODE.UP) && isOpen) {
                e.preventDefault()

                const list = getAllItemPropsValue()
                let idx = 0

                if (!focusItem && !selectedValue) {
                  setFocusItem({ value: list[idx].value, label: list[idx].label })
                } else {
                  // 判断是否已经有选中的选项
                  if (selectedValue && !focusItem) {
                    idx = list.findIndex((item) => item.value === selectedValue.value)
                  } else {
                    idx = list.findIndex((item) => item.value === focusItem.value)
                  }

                  // 定位
                  if (e.keyCode === KEYCODE.DOWN) {
                    if (idx + 1 === list.length) {
                      setFocusItem({ value: list[0].value, label: list[0].label })
                    } else {
                      setFocusItem({ value: list[idx + 1].value, label: list[idx + 1].label })
                    }
                  } else if (e.keyCode === KEYCODE.UP) {
                    if (idx === 0) {
                      setFocusItem({ value: list[list.length - 1].value, label: list[list.length - 1].label })
                    } else {
                      setFocusItem({ value: list[idx - 1].value, label: list[idx - 1].label })
                    }
                  }
                }
              }

              if (e.keyCode === KEYCODE.ENTER && isOpen && focusItem) {
                e.preventDefault()

                onCheckFun(focusItem.value, focusItem.label, closePortal)
              }
            }}
            tabIndex={isDisabled ? -1 : 0}
          >
            <div className={classNames(`${clsPrefix}-selection__render`, `${clsPrefix}-selection__render-${size}`)}>
              {isNormalMode ? (
                <React.Fragment>
                  {isSearch && renderInput()}
                  {!selectedValue ? (
                    renderPlaceholder()
                  ) : (
                    <div
                      title={selectedValue.label.toString()}
                      className={classNames(`${clsPrefix}-selection__render-value`)}
                    >
                      {!inputValue && selectedValue.label}
                    </div>
                  )}
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {tagList.length === 0 && inputValue === '' && renderPlaceholder()}

                  {/* 标签列表 */}
                  <TransitionGroup component="ul">
                    {tagList.map((item, index) => {
                      return (
                        <CSSTransition classNames={`${clsPrefix}-selection__tags`} timeout={300} key={index}>
                          <li title={item.label.toString()} className={`${clsPrefix}-selection__tags`}>
                            <div className={`${clsPrefix}-selection__tagsContent`}>{item.label}</div>
                            <Icon
                              icon="close"
                              className={`${clsPrefix}-selection__tagsIcon`}
                              onMouseDown={(e) => {
                                e.preventDefault()
                                let list = [...tagList]

                                list = list.filter((a) => a.value !== item.value)
                                setTagList(list)
                                onChange(list.map((item) => item.value as string))
                              }}
                            />
                          </li>
                        </CSSTransition>
                      )
                    })}

                    {/* 输入框 */}
                    {(mode === 'tags' || isSearch) && <CSSTransition timeout={0}>{renderInput()}</CSSTransition>}
                  </TransitionGroup>
                </React.Fragment>
              )}
            </div>

            {/* 下拉三角按钮及Loading图标*/}
            {haveDropdownIcon &&
              (isLoading ? (
                <div className={`${clsPrefix}-loading`} />
              ) : (
                <Icon
                  icon="down"
                  className={classNames(`${clsPrefix}-arrow`, {
                    [`${clsPrefix}-arrow-active`]: isOpen,
                  })}
                />
              ))}
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
                <Menu
                  className={`${clsPrefix}__slide`}
                  style={{
                    width: selectRef.current ? selectRef.current.getBoundingClientRect().width : '300px',
                    lineHeight: LINE_HEIGHT[size],
                  }}
                  tabIndex={-1}
                  onMouseDown={(e) => {
                    e.preventDefault()
                  }}
                  onScrollBottom={(nv) => onScrollButtom(nv)}
                >
                  {renderMenu(children, closePortal)}
                </Menu>
              </CSSTransition>
            )}
        </div>
      )}
    </PortalWithState>
  )
})

Select.defaultProps = {
  isDisabled: false,
  isRenderSlide: true,
  isReRenderDfVal: false,
  isLabelInValue: false,
  haveDropdownIcon: true,
  mode: 'default',
  size: 'default',
  isLoading: false,
  placeholder: '',
  onChange: noop,
  onInputChange: noop,
  onScrollButtom: noop,
  onFocus: noop,
  onBlur: noop,
  onDropDownVisible: noop,
}

export default Select
