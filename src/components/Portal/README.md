---
category: Components
type: Basic
title: Portal
subtitle: 传送门
---

组件化的传送门。

## 何时使用

自定义弹出内容时。

## API

### Portal

```html
<Portal>
  This text is portaled at the end of document.body!
</Portal>

<Portal container={document.querySelector('#container')}>
  This text is portaled into container dom!
</Portal>

{isOpen && <Portal>Sometimes portaled?</Portal>}
```

| 参数      | 说明                | 类型        | 默认值            |
| --------- | ------------------- | ----------- | ----------------- |
| children  | 主体内容            | any         | -                 |
| container | 插入的 dom 节点对象 | HTMLElement | () => HTMLElement | - |

### PortalWithState

```html
<PortalWithState closeOnOutsideClick="{false}">
  {({ openPortal, closePortal, isOpen, portal }) => (
  <Fragment>
    <button type="button" onClick="{openPortal}">Open Portal</button>

    {isOpen && portal(
    <p>
      This is more advanced Portal. It handles its own state.{' '}
      <button type="button" onClick="{closePortal}">Close me!</button>
    </p>
    )}
  </Fragment>
  )}
</PortalWithState>
```

| 参数                | 说明                              | 类型        | 默认值          |
| ------------------- | --------------------------------- | ----------- | --------------- |
| children            | 回调函数                          | function    | -               |
| container           | 插入的 dom 节点对象               | HTMLElement | `document.body` | - |
| onOpen              | 打开时的回调                      | function    | noop            |
| onClose             | 关闭时的回调                      | function    | noop            |
| defaultOpen         | 默认是否打开                      | boolean     | false           |
| closeOnOutsideClick | 是否可以通过点击外部元素关闭      | boolean     | true            |
| closeOnEsc          | 是否可以通过 `Esc` 键点击事件关闭 | boolean     | true            |

### 注意

请确保 `PortalWithState` 返回的根元素不是 `Fragment`
