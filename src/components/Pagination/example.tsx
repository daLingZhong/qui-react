import * as React from 'react'

import Pagination from '@/components/Pagination'

const ExamplePagination = () => {
  const [page, setPage] = React.useState(4)
  const [jump, setJump] = React.useState(5)

  return (
    <div>
      <h2>Pagination example</h2>
      <a href="https://lanhuapp.com/web/#/item/project/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=1cc12cb6-bf74-4321-bbcd-1bd9eca0bb8c">
        UI Design
      </a>
      <h3>Normal</h3>
      <Pagination page={1} pageSize={10} total={50} />
      <h3>Small</h3>
      <Pagination small page={1} pageSize={10} total={100} />
      <h3>Change</h3>
      <Pagination
        page={page}
        pageSize={10}
        total={100}
        onChange={(n, s) => {
          setPage(n)
          console.log(`you select page ${n}`)
        }}
      />
      <h3>Disabled</h3>
      <Pagination isDisabled page={1} pageSize={10} total={100} showSizeChanger showQuickJumper />
      <h3>Jump</h3>
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
    </div>
  )
}
export default ExamplePagination
