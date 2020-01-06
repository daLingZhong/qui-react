---
category: Components
type: Basic
title: Menu
subtitle: 传送门
---

菜单列表

## API

### Menu

| 参数           | 说明                         | 类型                      | 默认值 |
| -------------- | ---------------------------- | ------------------------- | ------ |
| onScrollBottom | 滑动时回调，参数为至底部距离 | `(value: number) => void` | -      |

### Menu.Item

| 参数              | 说明             | 类型      | 默认值  |
| ----------------- | ---------------- | --------- | ------- |
| isDisabled        | 是否禁用         | `boolean` | `false` |
| isChecked         | 是否选中         | `boolean` | false   |
| isHaveCheckedIcon | 是否包含选中图标 | `boolean` | false   |
| isHidden          | 是否隐藏当前项   | `boolean` | false   |

### Menu.Group

| 参数  | 说明       | 类型     | 默认值 |
| ----- | ---------- | -------- | ------ |
| label | 分组显示值 | `string` | ‘’     |
