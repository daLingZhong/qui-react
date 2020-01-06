---
category: Components
type: Basic
title: Modal
subtitle: 传送门
---

弹出框

## API

### Modal

| 参数         | 说明                                                   | 类型                                                    | 默认值  |
| ------------ | ------------------------------------------------------ | ------------------------------------------------------- | ------- |
| isVisible    | 是否显示                                               | `boolean`                                               | false   |
| onClose      | 关闭回调函数                                           | `() => void`                                            | -       |
| onOk         | 确认按钮回调函数,参数为确认按钮 loading state dispatch | `(dispatch: Dispatch<SetStateAction<boolean>>) => void` | -       |
| onCancel     | 取消按钮回调函数                                       | `() => void`                                            | -       |
| width        | 宽度                                                   | `string`                                                | `500px` |
| title        | 标题,不传入则表示不渲染 title                          | `string | ReactNode`                                    | `信息`  |
| cancelText   | 取消按钮内容                                           | `string | ReactNode`                                    | `取消`  |
| okText       | 确认按钮内容                                           | `string | ReactNode`                                    | `确定`  |
| closeIcon    | 是否显示右上角关闭按钮                                 | `boolean`                                               | `true`  |
| loadingText  | 确认按钮加载时文案                                     | `string | ReactNode`                                    | -       |
| cancelButton | 是否显示取消按钮                                       | `boolean`                                               | `true`  |
| center       | 弹出框是否居中显示                                     | `boolean`                                               | `true`  |
| footer       | footer 渲染,不显示可以传入`null`                       | `ReactNode`                                             | -       |
| keyboard     | 是否使用`esc`关闭弹出框                                | `ReactNode`                                             | `false` |
| mask         | 是否显示遮罩                                           | `boolean`                                               | `true`  |
| maskClosable | 遮罩是否可关闭弹出框                                   | `boolean`                                               | `false` |
| className    | 弹出框 class                                           | `string`                                                | -       |
| style        | 弹出框 style                                           | -                                                       | -       |

### Modal.method()

包括:

- `Modal.info`
- `Modal.confirm`  
  以上均为一个函数，参数为 object，具体属性如下:

#### Modal.info

| 参数        | 说明                                                  | 类型                                                                                             | 默认值   |
| ----------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------ | -------- |
| content     | 弹出框内容                                            | `string | ReactNode`                                                                             | -        |
| title       | 标题                                                  | `string | ReactNode`                                                                             | -        |
| haveIcon    | 是否显示信息类型图标                                  | `boolean`                                                                                        | -        |
| infoType    | 提示框类型                                            | `'info' | 'success' | 'error' | 'warning'`                                                       | `'info'` |
| width       | 宽度                                                  | `string`                                                                                         | `500px`  |
| buttonText  | 确认按钮内容                                          | `string | ReactNode`                                                                             | `知道了` |
| loadingText | 确认按钮加载时文案                                    | `string | ReactNode`                                                                             | -        |
| buttonTheme | 按钮主题                                              | 详见`Button`组件                                                                                 | `info`   |
| center      | 弹出框是否居中显示                                    | `boolean`                                                                                        | `true`   |
| onOk        | 确认回调函数，参数为关闭弹出框方法及 loading dispatch | `(closeFun: () => void, loadingDispatch: React.Dispatch<React.SetStateAction<boolean>>) => void` | -        |
| className   | 弹出框 class                                          | `string`                                                                                         | -        |
| style       | 弹出框 style                                          | -                                                                                                | -        |

#### Modal.confirm

| 参数          | 说明                             | 类型                             | 默认值  |
| ------------- | -------------------------------- | -------------------------------- | ------- |
| content       | 弹出框内容                       | `string | ReactNode`             | -       |
| title         | 标题                             | `string | ReactNode`             | -       |
| width         | 宽度                             | `string`                         | `500px` |
| okText        | 确认按钮内容                     | `string | ReactNode`             | `确认`  |
| cancelText    | 取消按钮内容                     | `string | ReactNode`             | `取消`  |
| okButtonProps | 确认按钮参数                     | 详见`Button`组件                 | -       |
| center        | 弹出框是否居中显示               | `boolean`                        | `true`  |
| footer        | footer 渲染,不显示可以传入`null` | `ReactNode`                      | -       |
| onOk          | 确认回调函数，参数为关闭窗口方法 | `(closeFun: () => void) => void` | -       |
| className     | 弹出框 class                     | `string`                         | -       |
| style         | 弹出框 style                     | -                                | -       |

以上参数调用后，会返回一个引用，可以通过该引用更新或销毁弹窗

```
  const { update, destory } = Modal.confirm({
    title: '修改的标题',
    content: '修改的内容',
    onOk: () => update()
  })

  destory()
```
