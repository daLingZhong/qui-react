import * as React from 'react'
import classNames from 'classnames'

import Icon from '@/components/Icon'
import Checkbox from '@/components/Checkbox'
import flatten from '@/utils/flatten'

import { clsPrefixTree } from '../common'
import { TreeSelectValueType, QTreeNodeInter } from '../interface'

const TreeNode = <T extends TreeSelectValueType>(props: QTreeNodeInter<T>) => {
  const {
    preState,
    node,
    checkable,
    selectedItem,
    onChange,
    flattenList,
    closeFun,
    showCheckedStrategy,
    searchValue,
    parentNode,
  } = props
  const [visible, setVisible] = React.useState<boolean>(false)
  const nodeStyle = visible ? { maxHeight: '10000px', opacity: 1 } : { maxHeight: '0', opacity: 0 }
  const shouldCheckedValue = checkable ? shouldChecked() : false
  const isInSearchRange = searchValue ? isInSearchRangeFunc() : true
  let isChecked = false

  if (selectedItem instanceof Array) {
    isChecked = !!selectedItem.includes(node.value)
  } else {
    isChecked = selectedItem === node.value
  }

  React.useEffect(() => {
    if (flatten([node], ['value']).find((a) => selectedItem.includes(a.value))) {
      setVisible(true)
    }
  }, [])

  React.useEffect(() => {
    if (searchValue && isInSearchRange) {
      setVisible(true)
    }
  }, [searchValue])

  function shouldChecked() {
    if (selectedItem.includes(node.value)) {
      return true
    }

    if (showCheckedStrategy === 'parent') {
      return selectedItem.includes(parentNode.value)
    } else if (showCheckedStrategy === 'child') {
      if (node.children) {
        for (const item of node.children) {
          if (!item.isDisabled && !selectedItem.includes(item.value)) {
            return false
          }
        }

        return true
      }
    }
  }

  function isInSearchRangeFunc(checkItem = node): boolean {
    let res = false

    if (checkItem.label.toString().indexOf(searchValue) > -1) {
      return true
    } else {
      if (checkItem.children) {
        for (const item of checkItem.children) {
          res = isInSearchRangeFunc(item)

          if (res) {
            break
          }
        }
      }
    }

    return res
  }

  function checkedFun() {
    // 当选择时会连同选择下属所有子节点
    if (showCheckedStrategy === 'all') {
      const flattenList = flatten([node], ['value', 'isDisable'])
      let _selectedItem = [...(selectedItem as string[])]

      if (shouldCheckedValue) {
        onChange(
          _selectedItem.filter((item) => !flattenList.find((a) => a.value === item)) as typeof selectedItem,
          'del'
        )
      } else {
        flattenList.map((item) => {
          if (!_selectedItem.includes(item.value) && !item.isDisabled) {
            _selectedItem.push(item.value)
          }
        })
        onChange(_selectedItem as typeof selectedItem, 'add')
      }
    } else if (showCheckedStrategy === 'parent') {
    }
  }

  return (
    <ul className={`${clsPrefixTree}__ul`} style={isInSearchRange ? {} : { display: 'none' }}>
      <li>
        {node.children && node.children.length > 0 && (
          <Icon
            icon="caret-down"
            className={classNames(`${clsPrefixTree}__sub`, {
              [`${clsPrefixTree}__sub-open`]: !preState ? false : visible,
            })}
            onClick={() => setVisible(!visible)}
          />
        )}
        <div
          className={classNames(`${clsPrefixTree}__content`, {
            [`${clsPrefixTree}__content-inSearch`]: searchValue && node.label.toString().indexOf(searchValue) > -1,
            [`${clsPrefixTree}__content-checkable`]: checkable,
            [`${clsPrefixTree}__content-checked`]: checkable ? shouldCheckedValue : isChecked,
            [`${clsPrefixTree}__content-hover`]: !isChecked,
          })}
          onClick={() => {
            if (typeof selectedItem === 'string') {
              onChange(node.value as typeof selectedItem)
              closeFun()
            } else {
              if (checkable) {
                checkedFun()
              } else {
                if (selectedItem.includes(node.value)) {
                  onChange((selectedItem as string[]).filter((item) => item !== node.value) as typeof selectedItem)
                } else {
                  let _selectedItem = [...(selectedItem as string[])]

                  _selectedItem.push(node.value)
                  onChange(_selectedItem as typeof selectedItem)
                }
              }
            }
          }}
        >
          {checkable && (
            // <input
            //   type="checkbox"
            //   checked={shouldChecked()}
            //   className={`${clsPrefixTree}__checkbox`}
            //   onChange={() => {}}
            // />
            <Checkbox isChecked={shouldChecked()} className={`${clsPrefixTree}__checkbox`} />
          )}
          {node.label}
        </div>
        <div style={nodeStyle} className={`${clsPrefixTree}__list`}>
          {node.children &&
            node.children.map((item, index) => (
              <TreeNode
                key={index}
                node={item}
                flattenList={flattenList}
                parentNode={node}
                preState={visible && preState}
                selectedItem={selectedItem}
                searchValue={searchValue}
                onChange={onChange}
                checkable={checkable}
                closeFun={closeFun}
              />
            ))}
        </div>
      </li>
    </ul>
  )
}
TreeNode.defaultProps = {
  preState: false,
  checkable: false,
  showCheckedStrategy: 'all',
}

export default TreeNode
