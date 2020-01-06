import * as React from 'react'
import * as classnames from 'classnames'
import { get } from 'lodash'

import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'

import { clsPrefix, initSortObj } from '../common'
import { QTableInter, SortObjState, FilterList, FilterItemList } from '../interface'

import '../styles/table.scss'

let resizeColPageX: number = null
let resizeColLastWith: number = null

const Table = <T extends any>(props: QTableInter<T>) => {
  const {
    col,
    dataSource,
    theme,
    fixCol,
    small,
    isLoading,
    loadingText,
    isError,
    errorText,
    noDataText,
    expandedRowRender,
    rowSelection,
    isResizable,
    isFixHeader,
    scroll,
    header,
    footer,
    className,
    style,
  } = props

  const [sortObj, setSortObj] = React.useState<SortObjState>(initSortObj) // 正在排序的列表方法
  const [filterList, setFilterList] = React.useState<FilterList<T>[]>([]) // 处于过滤中的列信息
  const [checkedFilterList, setCheckedFilterList] = React.useState<FilterItemList[]>([]) //当前正在编辑筛选项的checkbox
  const [focusFilter, setFocusFilter] = React.useState<string>(null) // 当前正在编辑条件的列
  const [hiddenList, setHiddenList] = React.useState<string[]>([]) // 针对于树状结构隐藏行的数组
  const [expandedRow, setExpandedRow] = React.useState<string[]>([]) // 针对于展开行的隐藏数组
  const [resize, setResize] = React.useState<{ item: string; width: number; moving: true }[]>([]) // 针对可伸缩行的缓存数组

  const colLength = col.length + (expandedRowRender ? 1 : 0) + (rowSelection ? 1 : 0)
  let _data: T[] = sortData() // 排序功能重置数据
  let unFilterData: T[] = sortData() // 需要设置一个未经过过滤的数据源，保证每次传递给自定义过滤方法的数据源都是未经过本身过滤项处理过

  // 过滤功能重置数据
  _data = filterData('', _data)

  React.useEffect(() => {
    setHiddenList([])
    setExpandedRow([])
  }, [JSON.stringify(dataSource)])

  // 过滤悬浮窗显示隐藏监听器设置
  React.useEffect(() => {
    closeFilterWrapper()

    return () => {
      document.removeEventListener('click', closeFilterWrapper)
    }
  }, [focusFilter])

  function sortData() {
    let result: T[] = [...dataSource]

    if (sortObj.key && sortObj.func !== null) {
      if (sortObj.order === 'asc') {
        result = [...result.sort(sortObj.func)]
      } else {
        result = [...result.sort(sortObj.func).reverse()]
      }
    } else {
      result = [...dataSource]
    }

    return result
  }

  function filterData(key: string, initData: T[]) {
    let result = [...initData]

    for (const item of filterList) {
      if (item.key !== key) {
        if (item.newData) {
          result = item.newData
        } else {
          result = result.filter((a) => item.itemList.find((b) => b.value === a[item.key]))
        }
      }
    }

    return result
  }

  function closeFilterWrapper() {
    document.addEventListener('click', (e: any) => {
      const target = e.target.closest(`.${clsPrefix}__filter`)

      if (!target) {
        setFocusFilter(null)
        setCheckedFilterList([])
      }
    })
  }

  // 渲染格式化标签
  function renderColgroup() {
    return (
      <colgroup>
        {col.map((item, index) => (
          <col key={index} style={item.width ? { width: item.width + 'px' } : {}} />
        ))}
      </colgroup>
    )
  }

  // 渲染表格头
  function renderThead() {
    return (
      <React.Fragment>
        {/* 表格第一列选择 */}
        {rowSelection &&
          (() => {
            const { selectKey, selectedRowKeys, onSelectedChange, disabled } = rowSelection
            const newData = [..._data]
            const couldSelectItemList = disabled ? newData.filter((item) => !disabled(item)) : newData

            return (
              <th className={`${clsPrefix}__select`}>
                <Checkbox
                  isChecked={selectedRowKeys.length === couldSelectItemList.length}
                  onChange={(e, nv) => {
                    const key = selectKey ? selectKey : 'key'
                    let checkedArray = []

                    if (nv) {
                      couldSelectItemList.map((item) => {
                        checkedArray.push(item[key])
                      })
                    }
                    onSelectedChange(checkedArray)
                  }}
                />
              </th>
            )
          })()}

        {/* 扩展行控制器，箭头 */}
        {expandedRowRender && <th className={`${clsPrefix}__expanded`} />}

        {/* 表格头主题渲染 */}
        {col.map((item, index) => {
          const movingWidth = resize.find((a) => a.item === item.dataIndex.toString())
          const newWidth = movingWidth ? movingWidth.width : 0
          const widthStyle = movingWidth ? { width: newWidth + 'px' } : item.width ? { width: item.width + 'px' } : {}
          const colSpan = item.colSpan ? item.colSpan : 1
          const { dataIndex, sort, sortOrder, key: ItemKey } = item
          const { key, order } = sortObj
          const oneKey = !(dataIndex instanceof Array) || dataIndex.length === 1 ? dataIndex : ItemKey
          const isServerSort = typeof sort === 'boolean'

          return (
            item.colSpan !== 0 &&
            !Boolean(item.isHidden) && (
              <th
                key={index}
                colSpan={colSpan}
                style={{ ...widthStyle, ...item.style }}
                className={classnames(
                  {
                    [`${clsPrefix}__sortItem`]: item.sort,
                    [`${clsPrefix}__sortItem-active`]: key === oneKey,
                    [`${clsPrefix}__centerAlign`]: item.colSpan,
                  },
                  item.className
                )}
                onClick={() => {
                  if (sort) {
                    if (key !== oneKey) {
                      setSortObj(
                        Object.assign({}, sortObj, { key: oneKey, func: isServerSort ? null : sort, order: 'asc' })
                      )
                      if (sortOrder) sortOrder('asc')
                    } else if (key === oneKey && order === 'asc') {
                      setSortObj(Object.assign({}, sortObj, { order: 'desc' }))
                      if (sortOrder) sortOrder('desc')
                    } else {
                      setSortObj(Object.assign({}, sortObj, { key: null, func: null, order: 'asc' }))
                      if (sortOrder) sortOrder(false)
                    }
                  }
                }}
              >
                {typeof item.title === 'function' ? (
                  item.title(dataSource)
                ) : (
                  <span>
                    {item.title}

                    {/* 排序 */}
                    {item.sort && (
                      <div className={`${clsPrefix}__sortArrow`}>
                        <div
                          className={classnames(`${clsPrefix}__topArrow`, `${clsPrefix}__topArrow-up`, {
                            [`${clsPrefix}__topArrow-topActive`]: key === oneKey && order === 'asc',
                          })}
                        />
                        <div
                          className={classnames(`${clsPrefix}__topArrow`, `${clsPrefix}__topArrow-down`, {
                            [`${clsPrefix}__topArrow-bottomActive`]: key === oneKey && order === 'desc',
                          })}
                        />
                      </div>
                    )}
                  </span>
                )}

                {/* 筛选 */}
                {(item.filterItemList || item.filterRender) && (
                  <div
                    className={classnames(`${clsPrefix}__filter`, {
                      [`${clsPrefix}__filter-small`]: small,
                      [`${clsPrefix}__filter-filtering`]: focusFilter === item.key,
                      [`${clsPrefix}__filter-active`]: filterList.find((a) => a.key === item.key),
                    })}
                    onClick={(e) => {
                      e.stopPropagation()

                      setFocusFilter(item.key)
                      const filterItem = filterList.find((a) => a.key === item.key)

                      if (filterItem && filterItem.itemList) {
                        setCheckedFilterList([...filterList.find((a) => a.key === item.key).itemList])
                      }
                    }}
                  >
                    <Icon icon="filter1" />
                    {focusFilter === item.key && (
                      <div
                        className={classnames(`${clsPrefix}__filterWrapper`, {
                          [`${clsPrefix}__filterWrapper-active`]: focusFilter === item.key,
                        })}
                        onClick={(e) => {
                          // 防止过滤弹出框中事件向上冒泡影响顶层选择器onClick事件
                          e.stopPropagation()
                        }}
                      >
                        {/* 自定义筛选渲染 */}
                        {(() => {
                          const idx = filterList.findIndex((a) => item.key === a.key)
                          const _filterList = [...filterList]

                          return item.filterRender ? (
                            item.filterRender(
                              filterData(item.key, unFilterData),
                              (newData) => {
                                if (idx === -1) {
                                  _filterList.push({ key: item.key, newData: newData })
                                } else {
                                  _filterList.splice(idx, 1, { key: item.key, newData: newData })
                                }
                                setFilterList(_filterList)
                                setFocusFilter(null)
                              },
                              () => {
                                const idx = filterList.findIndex((a) => item.key === a.key)
                                const _filterList = [...filterList]

                                _filterList.splice(idx, 1)

                                if (idx > -1) {
                                  setFilterList(_filterList)
                                }
                                setFocusFilter(null)
                              }
                            )
                          ) : (
                            // 固定模式筛选渲染
                            <React.Fragment>
                              <div className={`${clsPrefix}__filterContent`}>
                                {item.filterItemList &&
                                  item.filterItemList.map((item, index) => {
                                    const checkedIndex = checkedFilterList.findIndex((a) => a.value === item.value)
                                    const isChecked = checkedIndex > -1

                                    return (
                                      <Checkbox
                                        key={index}
                                        isChecked={isChecked}
                                        onChange={(e, nv) => {
                                          const _checkedFilterList = [...checkedFilterList]

                                          if (isChecked) {
                                            _checkedFilterList.splice(checkedIndex, 1)
                                          } else {
                                            _checkedFilterList.push({
                                              text: item.text,
                                              value: item.value,
                                            })
                                          }
                                          setCheckedFilterList(_checkedFilterList)
                                        }}
                                      >
                                        {item.text}
                                      </Checkbox>
                                    )
                                  })}
                              </div>
                              <div className={`${clsPrefix}__filterButtonGroup`}>
                                <span
                                  onClick={() => {
                                    if (idx === -1 && checkedFilterList.length > 0) {
                                      _filterList.push({
                                        key: item.key,
                                        itemList: [...checkedFilterList],
                                      })
                                    } else if (idx > -1 && checkedFilterList.length > 0) {
                                      _filterList.splice(idx, 1, {
                                        key: item.key,
                                        itemList: [...checkedFilterList],
                                      })
                                    } else if (idx > -1 && checkedFilterList.length === 0) {
                                      _filterList.splice(idx, 1)
                                    } else {
                                      setFocusFilter(null)
                                      return
                                    }

                                    setFocusFilter(null)
                                    setFilterList(_filterList)
                                  }}
                                >
                                  确认
                                </span>
                                <span
                                  onClick={() => {
                                    _filterList.splice(idx, 1)

                                    if (idx > -1) {
                                      setFilterList(_filterList)
                                    }
                                    setFocusFilter(null)
                                  }}
                                >
                                  重置
                                </span>
                              </div>
                            </React.Fragment>
                          )
                        })()}
                      </div>
                    )}
                  </div>
                )}

                {/* 拖拽功能 */}
                {col.length - 1 !== index && colSpan + index < col.length && isResizable && item.width && (
                  <span
                    draggable={true}
                    className={`${clsPrefix}__resizeLine`}
                    onMouseDown={(e) => {
                      const _resize = [...resize]

                      if (!movingWidth) {
                        _resize.push({ item: dataIndex.toString(), width: item.width, moving: true })
                        setResize(_resize)
                      }
                    }}
                    onDrag={(e) => {
                      if (resize && (movingWidth ? movingWidth.moving : false) && e.pageX !== 0 && resizeColPageX) {
                        const _resize = [...resize]
                        const newItem = Object.assign({}, movingWidth, {
                          width: e.pageX - resizeColPageX + resizeColLastWith,
                        })
                        const idx = resize.findIndex((a) => a.item === item.dataIndex.toString())

                        _resize.splice(idx, 1, newItem)
                        setResize(_resize)
                      }
                    }}
                    onDragStart={(e) => {
                      resizeColPageX = e.pageX

                      // 去除默认drag事件产生的元素虚影
                      const div = document.createElement('div')
                      e.dataTransfer.setDragImage(div, 0, 0)

                      if (!movingWidth) {
                        resizeColLastWith = item.width
                      } else {
                        resizeColLastWith = newWidth
                      }
                    }}
                    onDragEnd={() => {
                      resizeColPageX = null
                      resizeColLastWith = null
                    }}
                    onMouseUp={() => {
                      const _resize = [...resize]
                      const newItem = Object.assign({}, movingWidth, { moving: false })
                      const idx = resize.findIndex((a) => a.item === item.dataIndex.toString())

                      _resize.splice(idx, 1, newItem)
                      setResize(_resize)
                    }}
                  />
                )}
              </th>
            )
          )
        })}
      </React.Fragment>
    )
  }

  // 表格主体渲染
  function renderTbodyRow(initData: T[], level: number, fatherKey: string) {
    return initData.map((trItem, trIndex) => {
      const trKey = fatherKey !== '' ? fatherKey + `-${trIndex}` : `tr-${trIndex}`
      const isHidden = hiddenList.filter((item) => trKey.startsWith(item) && item !== trKey).length > 0
      const isExpanded = expandedRow.filter((item) => item === trKey).length > 0

      return (
        <React.Fragment key={`box-${trIndex}`}>
          <tr key={trKey} className={classnames({ [`${clsPrefix}-none`]: isHidden })}>
            {/* checkbox渲染 */}
            {rowSelection &&
              (() => {
                const { selectKey, selectedRowKeys, onSelectedChange, disabled } = rowSelection
                const key = selectKey ? selectKey : 'key'
                const itemKey = trItem[key]
                const isChecked = selectedRowKeys.includes(itemKey)

                return (
                  <td className={`${clsPrefix}__select`}>
                    <Checkbox
                      isChecked={isChecked}
                      isDisabled={disabled ? disabled(trItem) : false}
                      onChange={(e, nv) => {
                        let selected = [...selectedRowKeys]

                        if (!nv) {
                          selected.splice(selected.indexOf(itemKey), 1)
                        } else {
                          selected.push(itemKey)
                        }
                        onSelectedChange(selected)
                      }}
                    />
                  </td>
                )
              })()}

            {/* 展开行图标 */}
            {expandedRowRender && (
              <td className={`${clsPrefix}__expanded`}>
                <Icon
                  icon="right"
                  className={classnames(`${clsPrefix}__sideArrow`, { [`${clsPrefix}__sideArrow-active`]: !isExpanded })}
                  onClick={() => {
                    const list = [...expandedRow]

                    if (list.includes(trKey)) {
                      const idx = list.indexOf(trKey)

                      list.splice(idx, 1)
                    } else {
                      list.push(trKey)
                    }

                    setExpandedRow(list)
                  }}
                />
              </td>
            )}

            {/* 主体行渲染 */}
            {col.map((tdItem, tdIndex) => {
              const { key: sortKey } = sortObj
              const { key, dataIndex } = tdItem
              const paddingLeftStyle = tdIndex === fixCol && level > 0 ? 35 + 25 * (level - 1) + 'px' : ''
              let itemData = null
              let itemKey: string

              if (dataIndex instanceof Array) {
                itemKey = key
                for (const item of dataIndex) {
                  const data = get(trItem, item)

                  if (data) {
                    itemData = data
                    break
                  }
                }
              } else {
                itemKey = dataIndex
                itemData = get(trItem, dataIndex)
              }
              const rowspan = tdItem.rowSpan
                ? tdItem.rowSpan({ text: itemData, record: trItem, index: trIndex })
                : undefined

              return (
                !tdItem.isHidden &&
                rowspan !== 0 && (
                  <td
                    key={`${itemKey}${trIndex}`}
                    rowSpan={rowspan}
                    style={{ paddingLeft: paddingLeftStyle, ...tdItem.style }}
                    className={classnames(tdItem.className, {
                      [`${clsPrefix}__sortItem-td-active`]: itemKey === sortKey,
                    })}
                  >
                    {trItem.children && trItem.children.length > 0 && tdIndex === fixCol && (
                      <Icon
                        icon="right"
                        className={`${clsPrefix}__sideArrow`}
                        onClick={(e) => {
                          const list = [...hiddenList]
                          const activeClass = `${clsPrefix}__sideArrow-active`
                          let iconClassList = (e.target as HTMLElement).classList

                          if (list.includes(trKey)) {
                            const idx = list.indexOf(trKey)

                            list.splice(idx, 1)
                          } else {
                            list.push(trKey)
                          }

                          if (iconClassList.contains(activeClass)) {
                            iconClassList.remove(activeClass)
                          } else {
                            iconClassList.add(activeClass)
                          }

                          setHiddenList(list)
                        }}
                      />
                    )}

                    {tdItem.render ? (
                      tdItem.render(itemData, trItem, trIndex)
                    ) : itemData !== 'undefined' || itemData !== null ? (
                      itemData
                    ) : (
                      <span />
                    )}
                  </td>
                )
              )
            })}
          </tr>

          {/* 展开行主体渲染 */}
          {expandedRowRender && (
            <tr
              className={classnames(`${clsPrefix}__expandedWrapper`, {
                [`${clsPrefix}-none`]: !isExpanded || isHidden,
              })}
            >
              <td colSpan={colLength}>{expandedRowRender(trItem)}</td>
            </tr>
          )}

          {/* 当有子节点时树状渲染 */}
          {trItem.children && trItem.children.length > 0 && renderTbodyRow(trItem.children, level + 1, trKey)}
        </React.Fragment>
      )
    })
  }

  return (
    <div className={classnames(`${clsPrefix}__wrapper`, className)} style={style}>
      {header && (
        <div className={classnames(`${clsPrefix}__header`, { [`${clsPrefix}__header-small`]: small })}>{header}</div>
      )}

      <table
        className={classnames(clsPrefix, `${clsPrefix}--${isResizable ? 'bordered' : theme}`, {
          [`${clsPrefix}--small`]: small,
        })}
      >
        {isFixHeader && renderColgroup()}

        <thead>
          <tr>{renderThead()}</tr>
        </thead>
        <tbody>
          {isError ? (
            <tr className={`${clsPrefix}__abnormal`}>
              <td colSpan={colLength}>
                <Icon
                  icon="close-circle-o"
                  className={classnames(`${clsPrefix}__abnormalIcon`, `${clsPrefix}__abnormal-error`)}
                />
                {errorText ? errorText : '获取数据异常'}
              </td>
            </tr>
          ) : isLoading ? (
            <tr className={`${clsPrefix}__abnormal`}>
              <td colSpan={colLength}>
                <Icon
                  icon="loading"
                  isSpin={true}
                  className={classnames(`${clsPrefix}__abnormalIcon`, `${clsPrefix}__abnormal-loading`)}
                />
                {loadingText ? loadingText : '正在加载数据'}
                <span className={`${clsPrefix}__abnormal-dotting`} />
              </td>
            </tr>
          ) : _data.length === 0 ? (
            <tr className={`${clsPrefix}__abnormal`}>
              <td colSpan={colLength}>
                <Icon
                  icon="exclamation-circle-o"
                  className={classnames(`${clsPrefix}__abnormalIcon`, `${clsPrefix}__abnormal-nodata`)}
                />
                {noDataText ? noDataText : '未找到内容数据'}
              </td>
            </tr>
          ) : (
            !isFixHeader && renderTbodyRow(_data, 0, '')
          )}
        </tbody>
      </table>

      {isFixHeader && !isError && !isLoading && _data.length > 0 && (
        <div style={{ maxHeight: scroll.y ? scroll.y : 'auto', overflowY: 'scroll' }}>
          <table
            className={classnames(clsPrefix, `${clsPrefix}--${isResizable ? 'bordered' : theme}`, {
              [`${clsPrefix}--small`]: small,
            })}
          >
            {renderColgroup()}
            <tbody>{renderTbodyRow(_data, 0, '')}</tbody>
          </table>
        </div>
      )}

      {footer && (
        <div className={classnames(`${clsPrefix}__footer`, { [`${clsPrefix}__footer-small`]: small })}>{footer}</div>
      )}
    </div>
  )
}

Table.defaultProps = {
  isResizable: false,
  isFixHeader: false,
  theme: 'underline',
  fixCol: 0,
  small: false,
  scroll: { x: 'auto', y: 'auto' },
  isLoading: false,
  loadingText: '',
  isError: false,
  errorText: '',
  noDataText: '',
}

export default Table
