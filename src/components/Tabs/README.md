---
category: Components
type: General
title: Tabs
subtitle: 标签页
---

标签页

## API

### Tabs

属性说明如下：

| 属性          | 说明                           | 类型            | 默认值  |
| ------------- | ------------------------------ | --------------- | ------- |
| havebg        | 是否有背景色                   | `boolean`       | `true`  |
| isClosable    | 是否可删除，仅在卡片模式下生效 | `boolean`       | `false` |
| isAddable     | 是否可增加，仅在卡片模式下生效 | `boolean`       | `false` |
| type          | 模式                           | `card line`     | `line`  |
| defaultActive | 默认选中标签                   | `ReactText`     | -       |
| onChange      | 标签切换回调                   | `(key) => void` | -       |
| onRemove      | 标签删除回调                   | `(key) => void` | -       |
| onAdd         | 标签增加回调                   | `() => void`    | -       |

### Tab.Item

Tabs 的子组件，各标签项

属性说明如下：

| 属性        | 说明       | 类型        | 默认值  |
| ----------- | ---------- | ----------- | ------- |
| title       | 标签页标题 | `ReactNode` | -       |
| icon        | 标签页图标 | `string`    | -       |
| isDisabled  | 是否禁用   | `boolean`   | `false` |
| isCloseable | 是否可删除 | `boolean`   | `false` |
| className   | css 类名   | `string`    | -       |
| style       | -          | -           | -       |
