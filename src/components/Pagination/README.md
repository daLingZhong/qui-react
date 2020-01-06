---
category: Components
type: General
title: Pagination
subtitle: 分页
---

分页

## API

### Pagination

| 属性               | 说明                                                          | 类型                                                                             | 默认值                 |
| ------------------ | ------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------------- |
| page               | 当前页                                                        | `number`                                                                         | 1                      |
| pageSize           | 每页数据条数                                                  | `number`                                                                         | 20                     |
| total              | 总条数                                                        | `number`                                                                         | -                      |
| isDisabled         | 是否禁用                                                      | boolean                                                                          | false                  |
| small              | 迷你模式                                                      | boolean                                                                          | false                  |
| showSizeChanger    | 显示条数控制器                                                | `boolean`                                                                        | false                  |
| sizeChangerOptions | 条数控制器选项                                                | `number[]`                                                                       | `[10, 20, 30, 40, 50]` |
| onSizeChange       | 每页条数变化回调函数,参数为当前页及选择后的条数               | `(page, pageSize) => void`                                                       | -                      |
| showQuickJumper    | 显示快速跳转输入框                                            | `(page, jumpTo) => void`                                                         | false                  |
| onJumperChange     | 输入框回调函数,参数为当前页及输入后的页值                     | `(page, jumpTo) => void`                                                         | -                      |
| onChange           | 页选择变化回调函数                                            | `(page) => void`                                                                 | -                      |
| totalRender        | 页总数渲染回调函数,参数为数据总数，数据总数范围               | `(total: number, range: Array<number>) => ReactNode`                             | -                      |
| itemRender         | 单项渲染回调函数,参数为当前页值，节点类型，原生节点及是否禁用 | `(page: number,type,originalElement: ReactNode,isDisabled: boolean => ReactNode` | -                      |
