import * as React from 'react'
import classNames from 'classnames'
import { maxBy } from 'lodash'

import Icon from '@/components/Icon'
import { CSSTransition } from '@/components/Animate'
import { Menu } from '@/components/Menu'
import { PortalWithState } from '@/components/Portal'
import { KEYCODE } from '@/constants/common'
import flatten from '@/utils/flatten'
import noop from '@/utils/noop'

import { Option } from './Option'
import { QCascadeInter, CascadeOptions, ValueLabel } from '../interface'
import { clsPrefix, clsPrefixCas, LINE_HEIGHT } from '../common'

const Cascade: React.FunctionComponent<QCascadeInter> = React.forwardRef((props, ref) => {
  const {
    value,
    isCleaner,
    isDisabled,
    isLoading,
    placeholder,
    isRenderSlide,
    onDropDownVisible,
    onChange,
    className,
    size,
    options,
    trigger,
    onFocus,
    onBlur,
    noResultContent,
    container,
    ...resProps
  } = props
  const [finalArray, setFinalArray] = React.useState<ValueLabel[]>([])
  const [selectArray, setSelectArray] = React.useState<ValueLabel[]>([])
  const [selectFocus, setSelectFocus] = React.useState<boolean>(false)
  const [showCleanAll, setShowCleanAll] = React.useState<boolean>(false)
  const selectRef = React.useRef(null)
  const portalRef = React.useRef(null)

  React.useEffect(() => {
    if (!!value) {
      let isDefaultValueNotFound = false
      const _options = flatten(options, ['value', 'label', 'isDisabled'])
      const df = value.map((item, index) => {
        const res = _options.find((a) => a.level === index && a.value === item)

        if (res) {
          return { value: res.value, label: res.label }
        } else {
          isDefaultValueNotFound = true
        }
      })

      if (!isDefaultValueNotFound) {
        setFinalArray([...df])
        setSelectArray([...df])
      }
    }
  }, [value])

  // 获取整体 Select 于浏览器视口的位置，以便做下拉框定位处理
  React.useLayoutEffect(() => {
    portalRef.current?.rePosition()
  }, [])

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      selectRef.current.focus()
    },
    blur: () => {
      selectRef.current.blur()
    },
  }))

  function renderSlideItem(data: CascadeOptions[], closeFun: () => void, index = 0) {
    const _options = flatten(options, ['value', 'label', 'isDisabled'])
    const maxLevel = maxBy(_options, 'level').level
    const nextMenuItem = selectArray[index] ? data.find((item) => item.value === selectArray[index].value) : false
    const isRenderNext =
      index <= selectArray.length - 1 && !!selectArray[index] && nextMenuItem && nextMenuItem.children

    return (
      <React.Fragment>
        <Menu
          className={classNames(`${clsPrefixCas}__menu`, {
            [`${clsPrefixCas}__menu-leftSide`]: index > 0 && index <= maxLevel,
          })}
        >
          {data.map((item, itemIndex) => {
            const haveChild = !!item.children

            return (
              <Option
                key={itemIndex}
                value={item.value}
                title={item.label.toString()}
                className={classNames(`${clsPrefixCas}__menu-item`, {
                  [`${clsPrefixCas}__menu-item-child`]: haveChild,
                })}
                isChecked={selectArray[index] ? item.value === selectArray[index].value : false}
                isDisabled={item.isDisabled}
                onClick={() => {
                  let _selectArray = [...selectArray]

                  function buildArray() {
                    _selectArray[index] = { value: item.value, label: item.label }
                    _selectArray = _selectArray.slice(0, index + 1)
                    setSelectArray(_selectArray)
                  }

                  function checked() {
                    setFinalArray(_selectArray)
                    closeFun()
                    onChange(_selectArray.map((item) => item.value))
                  }

                  if (trigger === 'click' && !item.isDisabled) {
                    buildArray()
                    if (!haveChild) {
                      checked()
                    }
                  }

                  if (trigger === 'hover' && !haveChild && !item.isDisabled) {
                    buildArray()
                    checked()
                  }
                }}
                onMouseOver={() => {
                  if (trigger === 'hover' && !item.isDisabled) {
                    let _selectArray = [...selectArray]

                    _selectArray[index] = { value: item.value, label: item.label }
                    _selectArray = _selectArray.slice(0, index + 1)
                    setSelectArray(_selectArray)
                  }
                }}
              >
                <React.Fragment>
                  <span
                    className={classNames({
                      [`${clsPrefixCas}__menu-itemFloat`]: haveChild,
                    })}
                  >
                    {item.label ? item.label : item.value}
                  </span>
                  {haveChild && <Icon icon="right" />}
                </React.Fragment>
              </Option>
            )
          })}
        </Menu>
        {isRenderNext &&
          renderSlideItem(data.find((item) => item.value === selectArray[index].value).children, closeFun, index + 1)}
      </React.Fragment>
    )
  }

  return (
    <PortalWithState
      closeOnOutsideClick={true}
      position="bottomLeft"
      onOpen={onDropDownVisible}
      onClose={() => setSelectArray([...finalArray])}
      container={container}
      ref={portalRef}
      style={{ zIndex: 1200 }}
    >
      {({ openPortal, closePortal, isOpen, portal }) => (
        <div
          className={classNames(
            `${clsPrefix}`,
            {
              [`${clsPrefix}-disabled`]: isDisabled,
            },
            className
          )}
          onClick={(e) => {
            if (!isOpen) {
              openPortal(e)
            }
          }}
          onFocus={(e) => {
            setSelectFocus(true)
            onFocus(e)
          }}
          onBlur={(e) => {
            setSelectFocus(false)
            closePortal()
            onBlur(e)
          }}
          onMouseOver={() => {
            setShowCleanAll(true)
          }}
          onMouseOut={() => {
            setShowCleanAll(false)
          }}
          {...resProps}
        >
          <div
            className={classNames(`${clsPrefix}-selection`, `${clsPrefix}-selection-${size}`, {
              [`${clsPrefix}-selection-disabled`]: isDisabled,
              [`${clsPrefix}-selection-hover`]: !isDisabled,
              [`${clsPrefix}-selection-focus`]: selectFocus,
            })}
            ref={selectRef}
            tabIndex={isDisabled ? -1 : 0}
          >
            <div className={classNames(`${clsPrefix}-selection__render`, `${clsPrefix}-selection__render-${size}`)}>
              {finalArray.length === 0 ? (
                <div unselectable="on" className={`${clsPrefix}__placeholder`}>
                  {placeholder}
                </div>
              ) : (
                <div className={classNames(`${clsPrefix}-selection__render-value`)}>
                  {trigger === 'click'
                    ? finalArray.map((item) => item.label).join(' / ')
                    : finalArray.length > 0
                    ? [...finalArray].pop().label
                    : null}
                </div>
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

                    setSelectArray([])
                    setFinalArray([])
                    onChange([])
                  }
                }}
              />
            )}
          </div>

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
                    style={{
                      width: selectRef.current ? selectRef.current.getBoundingClientRect().width : '300px',
                      lineHeight: LINE_HEIGHT[size],
                    }}
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
                    className={`${clsPrefixCas}__slide`}
                    style={{
                      lineHeight: LINE_HEIGHT[size],
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault()
                    }}
                  >
                    {renderSlideItem(options, closePortal)}
                  </div>
                )}
              </CSSTransition>
            )}
        </div>
      )}
    </PortalWithState>
  )
})
Cascade.defaultProps = {
  value: null,
  noResultContent: '暂无数据',
  options: [],
  trigger: 'click',
  isDisabled: false,
  isCleaner: true,
  isRenderSlide: true,
  size: 'default',
  isLoading: false,
  placeholder: '',
  onDropDownVisible: noop,
  onChange: noop,
  onFocus: noop,
  onBlur: noop,
}

export default Cascade
