---
category: Components
type: Basic
title: Select
subtitle: 传送门
---

下拉选择框。

## 何时使用

当选项大于三个时。

## API

### Select

选择框组件，子组件必须为 Option 或者 OptionGroup

| 参数              | 说明                                                                                                                  | 类型                                                          | 默认值    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------- |
| defaultValue      | 默认值，需要传入真实值 value 以及显示项 label，如果是标签模式，则传入一个数组                                         | `{value: string | number, label: ReactNode} | string[]`       | null      |
| placeholder       | 选择框提示                                                                                                            | string                                                        | ‘’        |
| style             | 下拉框 style 属性                                                                                                     | `CSSProperties`                                               | -         |
| className         | 下拉框 className                                                                                                      | string                                                        | -         |
| isDisabled        | 是否禁用                                                                                                              | boolean                                                       | false     |
| isLoading         | 是否加载                                                                                                              | boolean                                                       | false     |
| isLabelInValue    | 是否把每个选项的 label 包装到 value 中，会把 Select 的 value 类型从 `string` 变为 `{value: string, label: ReactNode}` | boolean                                                       | false     |
| mode              | 模式，支持单选，多选和自定义标签                                                                                      | `'multiple' | 'tags' | 'default'`                             | 'default' |
| size              | 尺寸，支持三种尺寸                                                                                                    | `'large' | 'default' | 'small'`                               | `default` |
| isRenderSlide     | 是否渲染下拉框                                                                                                        | boolean                                                       | true      |
| onChange          | 在选项改变后的回调函数                                                                                                | `onChange(newValue: string | number | string[] | {}) => void` | -         |
| onInputChange     | 在输入框中值改变后触发的回调函数                                                                                      | `(newValue: string | number) => void`                         | -         |
| onFocus           | 选择框获得焦点时的回调函数                                                                                            | (e) => void                                                   | -         |
| onBlur            | 选择框获得焦点时的回调函数                                                                                            | (e) => void                                                   | -         |
| onDropDownVisible | 下拉框展开时的回调函数                                                                                                | () => void                                                    | -         |

### Select Methods

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 取消焦点 |
| focus() | 获取焦点 |

### Option

| 参数       | 说明                                 | 类型              | 默认值 |
| ---------- | ------------------------------------ | ----------------- | ------ |
| value      | 真实值                               | `string | number` | -      |
| isDisabled | 是否禁用                             | boolean           | false  |
| children   | 需要传入 children 作为该选项的显示值 | `ReactNode`       | -      |

### OptionGroup

选项分组组件，需要传入组名

| 参数  | 说明 | 类型   | 默认值 |
| ----- | ---- | ------ | ------ |
| label | 组名 | string | -      |

### CasCade

级联选择，默认可选中该选项最后一个层级

| 参数              | 说明                            | 类型                            | 默认值     |
| ----------------- | ------------------------------- | ------------------------------- | ---------- |
| value             | 制定选中项                      | `string[] | number[]`           | -          |
| options           | 可选项数据源，类型详见`Options` | array                           | []         |
| trigger           | 选项展开触发方式                | `hover | click`                 | 'click'    |
| isCleaner         | 是否显示清除按钮                | boolean                         | true       |
| isDisabled        | 是否禁用                        | boolean                         | false      |
| isLoading         | 是否加载中                      | boolean                         | false      |
| placeholder       | 输入框提示文本                  | string                          | ''         |
| noResultContent   | 没有选项时展示内容              | `string | ReactNode`            | '暂无数据‘ |
| isRenderSlide     | 是否渲染下拉框                  | boolean                         | true       |
| className         | 类名                            | string                          | -          |
| style             | style 属性                      | `object`                        | -          |
| size              | 选择框尺寸                      | `'large' | 'default' | 'small'` | 'default'  |
| onFocus           | 聚焦回调                        | `(e) => {}`                     | -          |
| onBlur            | 失焦回调                        | `(e) => {}`                     | -          |
| onDropDownVisible | 下拉框展开回调                  | `() => {}`                      | -          |
| onChange          | 数据变更回调，返回 value 数组   | `string[] | number[]`           | -          |

### Options

级联选择器数据源数据结构

| 参数       | 说明                   | 类型                          | 默认值 |
| ---------- | ---------------------- | ----------------------------- | ------ |
| value      | 真实值                 | `string | number`             | -      |
| label      | 渲染值                 | `string | number | ReactNode` | -      |
| isDisabled | 是否禁用               | boolean                       | false  |
| children   | 为该项的子节点，类型同 | `Options`                     | -      |

### Cascade Methods

| 名称    | 说明     |
| ------- | -------- |
| blur()  | 取消焦点 |
| focus() | 获取焦点 |
