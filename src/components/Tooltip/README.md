---
category: Components
type: Basic
title: Tooltip
subtitle: 传送门
---

文字提示

## API

### Tooltip

| 参数            | 说明               | 类型                    | 默认值          |
| --------------- | ------------------ | ----------------------- | --------------- |
| message         | 内容               | `ReactNode`             | -               |
| placement       | 出现位置，详见接口 | `string`                | `top`           |
| tipClassname    | 提示 class         | `string`                | -               |
| tipStyle        | 提示 style         | `object`                | -               |
| onVisible       | 显示回调           | `() => void`            | -               |
| onClose         | 关闭回调           | `() => void`            | -               |
| mouseEnterDelay | 鼠标移入延迟       | `number`                | -               |
| mouseEnterDelay | 鼠标移出延迟       | `number`                | -               |
| defaultVisible  | 默认显示值         | `boolean`               | `false`         |
| container       | 渲染的位置         | `HTMLElement`           | `document.body` |
| trigger         | 触发动作           | `hover | click | focus` | `hover`         |
| triggerStyle    | 触发元素 style     | `object`                | -               |

注意：由于实现问题，会在被触发元素外包裹一个`display: inline-block`的 div 元素
