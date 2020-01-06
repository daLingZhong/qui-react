import * as React from 'react'
import cls from 'classnames'

import { PAGER_TYPE, clsPrefixPager } from '../common'
import { PagerProps, PagerTypes } from '../interface'

const getTitle = (page: number, type: PagerTypes) => {
  let ret = ''

  switch (type) {
    case PAGER_TYPE.page:
      ret = `${page}`
      break
    case PAGER_TYPE.prev:
      ret = `上一页`
      break
    case PAGER_TYPE.next:
      ret = `下一页`
      break
    default:
      ret = ''
  }

  return ret
}

const Pager: React.SFC<PagerProps> = React.memo(({ page, type, isActive, isDisabled, onClick, itemRender, small }) => (
  <li
    tabIndex={0}
    title={getTitle(page, type)}
    className={cls(clsPrefixPager, {
      [`${clsPrefixPager}--active`]: isActive,
      [`${clsPrefixPager}--disabled`]: isDisabled,
      [`${clsPrefixPager}--small`]: small,
    })}
    onClick={() => {
      onClick(page)
    }}
  >
    {itemRender(page, type, <span>{page}</span>, isDisabled)}
  </li>
))

Pager.defaultProps = {
  type: 'page',
  isActive: false,
  isDisabled: false,
}

export default Pager
