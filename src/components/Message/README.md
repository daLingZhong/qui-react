---
category: Components
type: General
title: Message
subtitle: 全局提示
---

全局提示

## API

- `message.error(config)`
- `message.success(config)`
- `message.warning(config)`
- `message.info(config)`
- `message.close(key: string)`
- `message.update(config)`
- `message.destory()`

config 参数如下：

| 属性           | 说明                                     | 类型                  | 默认值          |
| -------------- | ---------------------------------------- | --------------------- | --------------- |
| message        | 消息内容                                 | `ReactNode`           | -               |
| uuid           | 选填，如果需要干扰提示框渲染，需要自定义 | `string`              | -               |
| duration       | 延时，如果不自动关闭传入`null`或`0`      | `number`              | 3               |
| isLoading      | 是否 Loading                             | `boolean`             | `false`         |
| loadingText    | Loading 内容                             | `ReactNode`           | `正在加载中`    |
| isLoadingAlive | 是否在 Loading 时取消自动关闭            | `boolean`             | `true`          |
| style          | style 属性                               | `React.CSSProperties` | -               |
| con_class      | 承载容器 class                           | `string`              | -               |
| container      | 挂载节点                                 | -                     | `document.body` |
