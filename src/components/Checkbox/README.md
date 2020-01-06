---
category: Components
type: General
title: Checkbox
subtitle: 多选框
---

多选框

## API

### Checkbox

属性说明如下：

| 属性            | 说明             | 类型                           | 默认值  |
| --------------- | ---------------- | ------------------------------ | ------- |
| isChecked       | 是否选中         | `boolean`                      | `false` |
| isDisabled      | 是否禁用         | `boolean`                      | `false` |
| isAutoFocus     | 是否自动聚焦     | `boolean`                      | `false` |
| isIndeterminate | 是否处于中间状态 | `boolean`                      | `false` |
| onChange        | 变化时回调       | `(event, nv: boolean) => void` | -       |

例子：

```HTML
<Checkbox isCheck>Test</Checkbox>
```
