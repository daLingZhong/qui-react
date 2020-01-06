import * as React from 'react'
import cls from 'classnames'
import { noop } from 'lodash'

import Select, { Option } from '@/components/Select'
import Input from '@/components/Input'

import Pager from './Pager'
import { PAGER_TYPE, clsPrefix } from '../common'
import { PaginationProps, PageItemRenderType } from '../interface'

import '../styles/page.scss'

const defaultItemRender: PageItemRenderType = (_, type, originalElement, disabled) => {
  let element = originalElement

  switch (type) {
    case PAGER_TYPE.prev:
      element = <span>&lsaquo;</span>
      break
    case PAGER_TYPE.next:
      element = <span>&rsaquo;</span>
      break
    case PAGER_TYPE.jumpPrev:
      element = (
        <React.Fragment>
          <span
            className={cls(`${clsPrefix}__ellipsis__dot`, {
              [`${clsPrefix}__ellipsis__dot-hover`]: !disabled,
            })}
          >
            &bull;&bull;&bull;
          </span>
          {!disabled && <span className={cls(`${clsPrefix}__ellipsis__icon`)}>&laquo;</span>}
        </React.Fragment>
      )
      break
    case PAGER_TYPE.jumpNext:
      element = (
        <React.Fragment>
          <span
            className={cls(`${clsPrefix}__ellipsis__dot`, {
              [`${clsPrefix}__ellipsis__dot-hover`]: !disabled,
            })}
          >
            &bull;&bull;&bull;
          </span>
          {!disabled && <span className={cls(`${clsPrefix}__ellipsis__icon`)}>&raquo;</span>}
        </React.Fragment>
      )
      break
  }

  return element
}

const Pagination: React.SFC<PaginationProps> = React.memo(
  ({
    total,
    className,
    page,
    pageSize,
    onChange,
    isDisabled,
    small,
    itemRender,
    totalRender,
    showSizeChanger,
    sizeChangerOptions,
    onSizeChange,
    showQuickJumper,
    onJumperChange,
  }) => {
    const [jumperPage, setJumperPage] = React.useState('')
    const pageBaseSize = 5 // 页码基数
    const pageBufferSize = 2 // 当前页两侧显示的页码数量
    const pageMaxCount = pageBaseSize + pageBufferSize * 2 // 连续页码最大数量
    const pagerList = []

    const _sizeChangerOptions = sizeChangerOptions.includes(pageSize)
      ? sizeChangerOptions
      : [pageSize, ...sizeChangerOptions]
    const range = [page * (pageSize - 1) + 1, page * pageSize]
    const pageTotal = Math.ceil(total / pageSize)
    const isFirst = page === 1
    const isLast = page === pageTotal
    const prevPage = isFirst ? 1 : page - 1
    const nextPage = isLast ? pageTotal : page + 1

    const getJumpPrevPage = () => {
      return Math.max(1, page - pageBaseSize) // 往前跳转不能小于第一页
    }
    const getJumpNextPage = () => {
      return Math.min(pageTotal, page + pageBaseSize) // 往后跳转不能大于总页数
    }
    const handlePagerClick = (newPage: number) => {
      if (newPage !== page) {
        // console.log('newPage', newPage, 'pageSize', pageSize)
        onChange(newPage, pageSize)
      }
    }
    const handleJumpPrevClick = () => {
      handlePagerClick(getJumpPrevPage())
    }
    const handleJumpNextClick = () => {
      handlePagerClick(getJumpNextPage())
    }
    const pagerProps = {
      itemRender,
      onClick: handlePagerClick,
    }

    if (pageTotal <= pageMaxCount) {
      for (let i = 1; i <= pageTotal; i++) {
        pagerList.push(
          <Pager {...pagerProps} key={i} page={i} isActive={i === page} isDisabled={isDisabled} small={small} />
        )
      }
    } else {
      const firstPager = (
        <Pager {...pagerProps} key={1} page={1} isActive={1 === page} isDisabled={isDisabled} small={small} />
      )
      const lastPager = (
        <Pager
          {...pagerProps}
          key={pageTotal}
          page={pageTotal}
          isActive={pageTotal === page}
          isDisabled={isDisabled}
          small={small}
        />
      )
      const jumpPrevPager = (
        <li
          key="jumpPrev"
          className={cls(`${clsPrefix}__ellipsis`, { [`${clsPrefix}__ellipsis-disabled`]: isDisabled })}
          title={`向前 ${pageBaseSize} 页`}
          tabIndex={0}
          onClick={handleJumpPrevClick}
        >
          {itemRender(getJumpPrevPage(), 'jumpPrev', <span>...</span>, isDisabled)}
        </li>
      )
      const jumpNextPager = (
        <li
          key="jumpNext"
          className={cls(`${clsPrefix}__ellipsis`, { [`${clsPrefix}__ellipsis-disabled`]: isDisabled })}
          title={`向后 ${pageBaseSize} 页`}
          tabIndex={0}
          onClick={() => !isDisabled && handleJumpNextClick()}
        >
          {itemRender(getJumpNextPage(), 'jumpNext', <span>...</span>, isDisabled)}
        </li>
      )
      let left = Math.max(1, page - pageBufferSize)
      let right = Math.min(pageTotal, page + pageBufferSize)

      // TODO: don't get it
      if (page - 1 <= pageBufferSize) {
        right = 1 + pageBufferSize * 2
      }
      if (pageTotal - page <= pageBufferSize) {
        left = pageTotal - pageBufferSize * 2
      }

      for (let i = left; i <= right; i++) {
        pagerList.push(
          <Pager {...pagerProps} key={i} page={i} isActive={i === page} isDisabled={isDisabled} small={small} />
        )
      }

      // TODO: don't get it
      if (page - 1 >= pageBufferSize * 2 && page !== 1 + 2) {
        pagerList.unshift(jumpPrevPager)
      }
      if (pageTotal - page >= pageBufferSize * 2 && page !== pageTotal - 2) {
        pagerList.push(jumpNextPager)
      }

      if (left !== 1) {
        pagerList.unshift(firstPager)
      }
      if (right !== pageTotal) {
        pagerList.push(lastPager)
      }
    }

    return (
      <ul className={cls(clsPrefix, { [`${clsPrefix}-small`]: small }, className)}>
        {totalRender && <li className={cls(`${clsPrefix}__total`)}>{totalRender(page, range)}</li>}

        <Pager
          key={`prev`}
          page={prevPage}
          isDisabled={isFirst || isDisabled}
          small={small}
          type="prev"
          onClick={handlePagerClick}
          itemRender={itemRender}
        />

        {pagerList}

        <Pager
          key={`next`}
          page={nextPage}
          isDisabled={isLast || isDisabled}
          small={small}
          type="next"
          onClick={handlePagerClick}
          itemRender={itemRender}
        />

        {showSizeChanger && (
          <li className={cls(`${clsPrefix}__options`)}>
            <Select
              defaultValue={{ value: _sizeChangerOptions[0], label: `${_sizeChangerOptions[0]} 条/页` }}
              style={{ width: '100px', margin: 0 }}
              size={small ? 'small' : 'default'}
              isDisabled={isDisabled}
              onChange={(nv) => {
                onSizeChange(page, parseInt(nv as string))
              }}
            >
              {_sizeChangerOptions.map((item) => (
                <Option key={item} value={item}>{`${item} 条/页`}</Option>
              ))}
            </Select>
          </li>
        )}

        {showQuickJumper && (
          <li className={cls(`${clsPrefix}__options`)}>
            <div className={cls(`${clsPrefix}__jumper`)}>
              跳至
              <Input
                value={jumperPage}
                isDisabled={isDisabled}
                style={{ textAlign: 'center' }}
                onChange={(e) => {
                  const value = e.target.value
                  const value_int = parseInt(value)

                  if (value_int > 0) {
                    setJumperPage(value_int > pageTotal ? pageTotal.toString() : value)
                  }

                  if (value_int !== 0 && !value) {
                    setJumperPage('')
                  }
                }}
                onBlur={() => !!jumperPage && onJumperChange(page, parseInt(jumperPage))}
              />
              页
            </div>
          </li>
        )}
      </ul>
    )
  }
)

Pagination.defaultProps = {
  page: 1,
  pageSize: 20,
  onChange: noop,
  showSizeChanger: false,
  isDisabled: false,
  small: false,
  sizeChangerOptions: [10, 20, 30, 40, 50],
  onSizeChange: noop,
  onJumperChange: noop,
  itemRender: defaultItemRender,
}

export default Pagination
