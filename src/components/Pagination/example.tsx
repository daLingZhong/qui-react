import * as React from 'react'

import Pagination from '@/components/Pagination'
import DemoCard from '@/page/components/DemoCard'

const ExamplePagination = () => {
  const [page, setPage] = React.useState(4)
  const [jump, setJump] = React.useState(5)

  return (
    <div>
      <DemoCard title="基本" des="基础分页。" id="components-pagination-demo-basic">
        <Pagination page={1} pageSize={10} total={50} />
      </DemoCard>

      <DemoCard title="迷你" des="迷你版本。" id="components-pagination-demo-mini">
        <Pagination small page={1} pageSize={10} total={100} />
      </DemoCard>

      <DemoCard title="改变" des="可以切换到指定页。" id="components-pagination-demo-change">
        <Pagination
          page={page}
          pageSize={10}
          total={100}
          onChange={(n, s) => {
            setPage(n)
            console.log(`you select page ${n}`)
          }}
        />
      </DemoCard>

      <DemoCard title="禁用状态" des="可以禁用整个分页组件。" id="components-pagination-demo-disabled">
        <Pagination isDisabled page={1} pageSize={10} total={100} showSizeChanger showQuickJumper />
      </DemoCard>

      <DemoCard title="跳转" des="可以跳转到指定页" id="components-pagination-demo-jump">
        <Pagination
          page={jump}
          pageSize={10}
          total={100}
          showSizeChanger
          showQuickJumper
          onJumperChange={(p, j) => {
            setJump(j)
            console.log(`you jump to page ${j}`)
          }}
        />
      </DemoCard>
    </div>
  )
}
export default ExamplePagination
