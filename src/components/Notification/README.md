---
category: Components
type: General
title: Notification
subtitle: 通知提醒框
---

通知消息框

## API

- `notification.open(config)`
- `notification.error(config)`
- `notification.success(config)`
- `notification.warning(config)`
- `notification.info(config)`
- `notification.close(key: string)`
- `notification.update(config)`
- `notification.destory()`

config 参数如下：

| 属性       | 说明                                     | 类型                                      | 默认值          |
| ---------- | ---------------------------------------- | ----------------------------------------- | --------------- |
| title      | 标题                                     | `ReactNode`                               | -               |
| message    | 消息内容                                 | `ReactNode`                               | -               |
| uuid       | 选填，如果需要干扰提示框渲染，需要自定义 | `string`                                  | -               |
| duration   | 延时，如果不自动关闭传入`null`或`0`      | `number`                                  | 4.5             |
| placement  | 显示位置                                 | `topRight topLeft bottomRight bottomLeft` | `topRight`      |
| onClose    | 点击默认关闭按钮时触发的回调函数         | `() => void`                              | -               |
| isClosable | 是否显示默认关闭按钮                     | `boolean`                                 | `true`          |
| className  | 类名                                     | `string`                                  | -               |
| style      | style 属性                               | `React.CSSProperties`                     | -               |
| con_class  | 承载容器 class                           | `string`                                  | -               |
| container  | 挂载节点                                 | -                                         | `document.body` |
