---
category: Components
type: General
title: Timeline
subtitle: 时间轴
---

时间轴

## API

### Timeline

通过设置 Timeline 的属性来控制开关显示与行为

属性说明如下：

| 属性      | 说明                   | 类型                   | 默认值 |
| --------- | ---------------------- | ---------------------- | ------ |
| mode      | 时间轴展示位置         | `left right alternate` | `left` |
| pending   | 等待中的节点的标题文案 | ReactNode              | -      |
| isReverse | 是否倒序排序           | boolean                | false  |
| 其他属性  | 一律放在最外层         | any                    | -      |

### Timeline.Item

Timeline 的子组件，各节点项

属性说明如下：

| 属性      | 说明             | 类型                         | 默认值 |
| --------- | ---------------- | ---------------------------- | ------ |
| title     | 节点标题         | ReactNode                    | `null` |
| color     | 节点的颜色       | `info success error warning` | `info` |
| isPending | 是否处于加载状态 | boolean                      | false  |
| dot       | 自定义节点元素   | ReactNode                    | `null` |
| 其他属性  | 一律放在最外层   | any                          | -      |
