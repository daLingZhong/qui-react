
步骤条组件，引导用户按照流程完成任务的导航条。

## 何时使用

引导用户按照流程完成任务。

## API

### Steps
属性说明如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 指定当前步骤，从0开始计数。在子组件中，可以通过status属性覆盖状态 | number | 0 |
| className | 步骤条类名 | string | - |
| style | 自定义样式对象 | object | - |
| direction | 指定步骤条方向，可选，支持 `horizontal` `vertical` | string | `horizontal` |
| status | 指定当前步骤状态，可选，支持 `wait` `process` `finish` `error` | string | `process` |
| size | 指定大小，可选，支持 `default` `sm` | string | `default` |
| onChange | 点击切换步骤时触发 | (current) => void | - |

### StepItem
属性说明如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| description | 步骤详情描述，可选 | string|ReactNode | - |
| icon | 步骤图标的类型，可选 | string | - |
| status | 指定当前步骤状态，可选，支持 `wait` `process` `finish` `error` | string | `process` |
| title | 标题 | string|ReactNode | - |
