---
category: Components
type: General
title: Input
subtitle: 输入框
---

输入框

## API

### Input

| 属性           | 说明               | 类型                        | 默认值  |
| -------------- | ------------------ | --------------------------- | ------- |
| isDisabled     | 是否禁用           | boolean                     | false   |
| prefix         | 组件内部左侧小图标 | `ReactNode`                 | -       |
| suffix         | 组件内部右侧小图标 | `ReactNode`                 | -       |
| addonBefore    | 输入框左侧前缀     | `ReactNode`                 | -       |
| addonAfter     | 输入框右侧前缀     | `ReactNode`                 | -       |
| inputStyle     | 输入框 style       | `React.CSSProperties`       | -       |
| inputClassName | 输入框 class       | `string`                    | -       |
| isError        | 是否错误           | `boolean`                   | `false` |
| errorText      | 错误提示           | `ReactNode`                 | -       |
| onChange       | 输入回调           | `(event, newValue) => void` | -       |
| 其他属性       | input 原生属性     | any                         | 无      |

### Textarea

| 属性       | 说明              | 类型         | 默认值  |
| ---------- | ----------------- | ------------ | ------- |
| allowClear | 是否显示清除按钮  | `boolean`    | `false` |
| isError    | 是否错误          | `boolean`    | `false` |
| errorText  | 错误提示          | `ReactNode`  | -       |
| onClear    | 清除回调          | `() => void` | -       |
| 其他属性   | textarea 原生属性 | any          | 无      |

组件实例暴露方法说明如下：<br>
当作为 ref 被父组件保留引用时，可以使用这些方法
| 方法名 | 说明 |
| --- | --- |
| focus | 获得焦点 |
| blur | 失去焦点 |
| select | 选中 |
