---
category: Components
type: General
title: Table
subtitle: 表格
---

表格

## API

### Table

通过设置 Table 的属性来控制表格显示与行为

属性说明如下：

| 属性              | 说明                                                                          | 类型                          | 默认值                   |
| ----------------- | ----------------------------------------------------------------------------- | ----------------------------- | ------------------------ |
| col               | 列渲染数组, 详见 Col                                                          | array                         | -                        |
| dataSource        | 数据源                                                                        | array                         | -                        |
| theme             | 主题                                                                          | `underline | bordered`        | 'underline'              |
| fixCol            | 固定列数量，使开头指定列不受组件内逻辑影响                                    | number                        | 0                        |
| small             | 紧凑型表格                                                                    | boolean                       | false                    |
| isFixHeader       | 是否固定表头                                                                  | boolean                       | false                    |
| scroll            | 固定表头或列时传入的参数，可传入固定方向的高度或宽度，暂不支持 x 轴方向的滚动 | `{ x: string, y: string }`    | `{x: 'auto', y: 'auto'}` |
| isLoading         | 加载动画                                                                      | boolean                       | false                    |
| loadingText       | 加载背景，当为`ReactNode`类型则不会加载组件内置效果                           | string `ReactNode`            | -                        |
| isError           | 数据获取异常背景                                                              | boolean                       | false                    |
| errorText         | 数据异常文案，当为`ReactNode`类型则不会加载组件内置效果                       | string `ReactNode`            | -                        |
| noDataText        | 数据为空文案，当为`ReactNode`类型则不会加载组件内置效果                       | string `ReactNode`            | -                        |
| rowSelection      | 多选,详见 RowSelection                                                        | object                        | -                        |
| expandedRowRender | 额外的展开行                                                                  | `function(record) :ReactNode` | -                        |
| 其他属性          | 一律放在最外层                                                                | any                           | 无                       |

### Col

| 属性           | 说明                                                                                        | 类型                                                         | 默认值 |
| -------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ | ------ |
| title          | 表头                                                                                        | string `ReactNode`                                           | -      |
| colSpan        | 合并表头，传入 0 为不渲染，传入 2 为占用两列                                                | number                                                       | 1      |
| rowSpan        | 合并行，传入 0 为不渲染，为一个回调函数，参数为当前单元格值，行数据及当前行索引             | `(value: { text: any; record: T; index: number }) => number` | -      |
| key            | 该列数据对应的唯一值，当 dataIndex 为唯一时可以不设置                                       | string                                                       | -      |
| dataIndex      | 列数据在数据项中对应的 key，可以传入数组表示该列可能会涉及到多种 key                        | string `Array<string>`                                       | -      |
| width          | 列宽度                                                                                      | string                                                       | -      |
| isHidden       | 是否隐藏列                                                                                  | boolean                                                      | false  |
| sort           | 本地提供一个排序函数                                                                        | function boolean                                             | -      |
| sortOrder      | 排序回调函数，参数为当前排序的状态                                                          | `function(order: 'asc' | 'desc' | false)`                    | -      |
| filterItemList | 提供一个需要筛选的列表项                                                                    | `Array<{ text: string, value: string }>`                     | -      |
| filterRender   | 自定义筛选框及条件,参数分别为当前渲染的总数据，确认筛选回调，参数为过滤后的总数据，重置方法 | `function(record, checkFun(newData), resetFun): ReactNode`   | -      |
| render         | 生成自定义单元格的渲染函数，参数分别为当前行的值，当前行数据，行索引                        | `function(text, record, index) {}`                           | -      |

### RowSelection

| 属性            | 说明                                                                | 类型                                     | 默认值 |
| --------------- | ------------------------------------------------------------------- | ---------------------------------------- | ------ |
| selectKey       | 作为选择主键的 key 字段，若不填写则默认使用源数据中的`key`字段      | string                                   | -      |
| selectedRowKeys | 选中行的 key 数组                                                   | string[]                                 | []     |
| disabled        | 禁止选中的 checkbox，需要传入一个返回布尔值的函数，参数为改行的数据 | `function(record):boolean`               | -      |
| onChange        | 当选中 key 改变时，传入的参数为选择之前 key 的列表以及当前行数据    | `function(slecctedRowKeys, record):void` | -      |

### EditTable

调用`EditTable`组件来实现可编辑表格功能，可以完全沿用`Table`组件所有 api，但部分 api 有所变动

注意：源数据中必须添加一个唯一`key`字段作为索引

属性说明如下：
| 属性 | 说明 | 类型 | 默认值 |
| ----------------- | ------------------------------------------------------- | ----------------------------- | ----------- |
| col | 列渲染数组, 详见 ColArray | array | - |
| dataSource | 数据源，详见 EditDataSource | array | - |
| isDeletable | 可删除行 | boolean | false |
| isCustomize | 是否自定义 | boolean | false |
| onEdit | 编辑中状态回调，参数为`key` | function(key) => void | - |
| onCheck | 确认修改时回调，参数为`item`当前行, `index`当前行索引, `exit`退出编辑状态回调方法 | function(item, index, exit() => void) => void | - |
| onDelete | 删除行回调，参数为`item`当前行, `index`当前行索引, | function(item, index) => void | - |
| onCancel | 取消编辑状态回调 | function() => void | - |
| 其他属性 | `Table`组件所有 api | any | 无 |

### ColArray

| 属性       | 说明                                                                                                                                                            | 类型                                                                   | 默认值 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- | ------ |
| isEditable | 是否可编辑                                                                                                                                                      | boolean                                                                | false  |
| renderItem | 编辑表格专用渲染回调，参数为`changeItem(key, newValue) => void`编辑选中行，参数有 key 和编辑中的新值,`text`当前行显示值，`record`为当前行，`item`该编辑项当前值 | function(changeItem(key, nv) => void, text, record, item) => ReactNode | -      |
| 其他属性   | `Table`组件`Col`所有类型                                                                                                                                        | any                                                                    | 无     |

例子：

```HTML
<Table data={[]} col={[]} />
```
