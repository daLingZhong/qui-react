---
category: Components
type: General
title: Switch
subtitle: 开关
---

输入框

## API

### Switch

通过设置 Switch 的属性来控制开关显示与行为

属性说明如下：

| 属性             | 说明                                                   | 类型                                   | 默认值     |
| ---------------- | ------------------------------------------------------ | -------------------------------------- | ---------- |
| ref              | 可调用组件中 focus 及 blur 方法，详见 example 中的写法 | any                                    | -          |
| className        | 为组件增加 css 类名                                    | string                                 | ''         |
| isChecked        | 指定当前是否选中                                       | boolean                                | false      |
| checkedContent   | 选中时展示的内容                                       | string ReactNode                       | -          |
| isDisable        | 是否禁用                                               | boolean                                | false      |
| isLoading        | 是否加载中                                             | boolean                                | false      |
| size             | 开关大小，可选值：`large` `middle` `small`             | string                                 | middle     |
| unCheckedContent | 非选中时的内容                                         | string ReactNode                       | -          |
| onChange         | 变化时的回调函数                                       | function(check: boolean, event: Event) | () => void |
| isAutoFocus      | 是否自动选中                                           | boolean                                | false      |
| waveColor        | 自定义波浪动画颜色                                     | string                                 | -          |
