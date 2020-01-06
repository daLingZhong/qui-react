
警告提示组件，显示一些需要被关注的信息。

## 何时使用

显示需要被用户关注到的信息。

## API

属性说明如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| message | 警告内容，必选 | string &#124; ReactNode | - |
| title | 警告标题，可选 | string &#124; ReactNode | - |
| type | 引用方式，可选，值范围 `info` `success` `warning` `error` | string | `info` |
| hasIcon | 是否显示图标，可选 | boolean | false |
| icon | 自定义图标名，可选 | string | - |
| isClosable | 是否可以被关闭，可选 | boolean | false |
| className | 自定义样式，可选 | string | - |
| onClose | 关闭时触发的回调函数，可选 | `(event: React.MouseEvent<HTMLElement>) => void` | noop |
| onAfterClose | 关闭动画结束后触发的回调函数，可选 | `(node: HTMLElement) => void` | noop |

## 其他

```jsx
import { Alert, AlertTypeEnum } from 'qui-react'

const Example = () => (
  <section className="content">
    <Alert type={AlertTypeEnum.info} message="提示的内容" />
    <Alert type={AlertTypeEnum.success} message="成功的内容" />
    <Alert type={AlertTypeEnum.warning} message="警告的内容" />
    <Alert type={AlertTypeEnum.error} message="错误的内容" />
    <Alert type={AlertTypeEnum.info} message="提示的内容" title="标题" />
    <Alert type={AlertTypeEnum.info} message="提示的内容" title="有图标" hasIcon={true} />
    <Alert type={AlertTypeEnum.info} message="提示的内容" title="自定义图标" hasIcon={true} icon="heart" />
    <Alert type={AlertTypeEnum.info} message="提示的内容" title="显示关闭按钮" hasIcon={true} isClosable={true} />
  </section>
)
```
