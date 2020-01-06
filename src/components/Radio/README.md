---
category: Components
type: General
title: Radio
subtitle: 单选框
---

单选框

## API

### Radio

| 属性       | 说明                      | 类型                | 默认值  |
| ---------- | ------------------------- | ------------------- | ------- |
| groupName  | 选项名称                  | `string`            | -       |
| value      | 选项值                    | `any`               | -       |
| isDisabled | 是否禁用                  | `boolean`           | `false` |
| isChecked  | 是否选中                  | `boolean`           | `false` |
| onClick    | 点击回调函数， 返回该项值 | `(nv: any) => void` | -       |

### RadioGroup

单选框组合，用于包裹一组 `Radio`

| 属性       | 说明             | 类型                | 默认值  |
| ---------- | ---------------- | ------------------- | ------- |
| name       | 统一设置选项名称 | `string`            | -       |
| value      | 选中值           | `any`               | -       |
| isDisabled | 禁用所有选项     | `boolean`           | `false` |
| onChange   | 值改变时回调函数 | `(nv: any) => void` | -       |
