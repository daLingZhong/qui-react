import * as React from 'react'
import cls from 'classnames'

import Input from '@/components/Input'
import Icon from '@/components/Icon'

import { findProperty, clsPrefixEd } from '../common'
import { QEditTableInter, ColArray } from '../interface'
import Table from './Table'

const EditTable = <T extends any>(props: QEditTableInter<T>) => {
  const { dataSource, col, isDeletable, onDel, onCheck, onEdit, onCancel, isCustomize, small, isSubmitting } = props
  const [changeItem, setChangeItem] = React.useState<T>(null)
  const iconClass = cls(`${clsPrefixEd}__icon`, { [`${clsPrefixEd}__icon-disabled`]: isSubmitting })
  let colArray: ColArray<T>[] = []

  function handleChangeItem(itemKey: string, newValue: any): void {
    setChangeItem(Object.assign({}, changeItem, { [itemKey]: newValue }))
  }

  function exitChecking() {
    setChangeItem(null)
  }

  col.map((item) => {
    const dataIndex = findProperty(dataSource, item.dataIndex)
    const colItem = {
      render: (text, record: T, index: number) => {
        const inputWidth = item.width ? (small ? item.width - 42 : item.width - 26) + 'px' : '150px'

        return (changeItem ? record.key === changeItem.key : false) && item.isEditable ? (
          <span className={`${clsPrefixEd}__inputWrapper`}>
            <Input
              id={dataIndex}
              size={small ? 'small' : 'middle'}
              width={inputWidth}
              value={changeItem[dataIndex]}
              isDisabled={isSubmitting}
              onChange={(e, n) => {
                handleChangeItem(dataIndex, n)
              }}
            />
          </span>
        ) : (
          <span>{text}</span>
        )
      },
      ...item,
    }

    if (item.renderItem) {
      Object.assign(colItem, {
        render: (text, record: T) =>
          item.renderItem(handleChangeItem, text, record, changeItem ? changeItem[dataIndex] : ''),
      })
    }

    colArray.push(colItem)
  })

  colArray.push({
    title: '',
    key: 'edit_action',
    dataIndex: 'edit_action',
    width: 80,
    render: (text, record: T, index: number) =>
      (changeItem ? (
        record.key === changeItem.key
      ) : (
        false
      )) ? (
        <div>
          <span>
            <Icon
              icon="check"
              className={iconClass}
              onClick={() => {
                if (!isSubmitting) {
                  onCheck(changeItem, index, exitChecking)
                }
              }}
            />
          </span>
          <span>
            <Icon
              icon="close"
              className={iconClass}
              onClick={() => {
                if (!isSubmitting) {
                  if (isCustomize) {
                    onCancel()
                  }

                  exitChecking()
                }
              }}
            />
          </span>
        </div>
      ) : (
        <div>
          <span>
            <Icon
              icon="edit"
              className={iconClass}
              onClick={() => {
                if (!isSubmitting) {
                  if (isCustomize) {
                    onEdit(record.key)
                  }

                  setChangeItem({ ...record })
                }
              }}
            />
          </span>
          {isDeletable && (
            <span>
              <Icon
                icon="delete"
                className={iconClass}
                onClick={() => {
                  if (!isSubmitting) {
                    onDel(record, index)
                  }
                }}
              />
            </span>
          )}
        </div>
      ),
  })

  return <Table {...props} dataSource={dataSource} col={colArray} />
}

EditTable.defaultProps = {
  deletable: false,
  isResizable: false,
  customize: false,
  isSubmitting: false,
  theme: 'underline',
  fixCol: 0,
  small: false,
  loading: false,
  loadingText: '',
  error: false,
  errorText: '',
  noDataText: '',
}

export default EditTable
