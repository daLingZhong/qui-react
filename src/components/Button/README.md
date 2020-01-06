---
category: Components
type: General
title: Button
subtitle: 按钮
---

按钮

## API

### Button

| 属性        | 说明                 | 类型                                                                    | 默认值   |
| ----------- | -------------------- | ----------------------------------------------------------------------- | -------- |
| theme       | 按钮主题             | `"primary", "success", "warning", "danger", "normal", "text", "dashed"` | `normal` |
| size        | 按钮尺寸             | `"large", "medium", "small", "mini"`                                    | `medium` |
| isDisabled  | 是否禁用             | boolean                                                                 | false    |
| isLoading   | 是否处于加载状态     | boolean                                                                 | false    |
| loadingText | 加载状态文案         | `string ReactNode`                                                      | '加载中' |
| icon        | 图标                 | string                                                                  | -        |
| waveColor   | 自定义波浪动画颜色   | string                                                                  | -        |
| 其它属性    | 所有 button 原生属性 | -                                                                       | -        |

### ButtonGroup

| 属性       | 说明                     | 类型                                                                    | 默认值 |
| ---------- | ------------------------ | ----------------------------------------------------------------------- | ------ |
| theme      | 统一设置所有按钮主题     | `"primary", "success", "warning", "danger", "normal", "text", "dashed"` | -      |
| size       | 统一设置所有按钮尺寸     | `"large", "medium", "small", "mini"`                                    | -      |
| isDisabled | 统一设置所有按钮是否禁用 | boolean                                                                 | -      |
