
语义化的矢量图标。

## 何时使用

哪用加哪

## API

属性说明如下

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| icon | 图标名，必选 | string | - |
| isSpin | 是否自动旋转，可选 | boolean | false |
| type | 引用方式，可选，值范围 `unicode` `fontClass` `symbol` | string | fontClass |
| className | 自定义样式，可选 | string | - |

## 其他

可以单独引用其他类型的图标

```jsx
import Icon, { UnicodeIcon, FontClassIcon, SymbolIcon, IconTypeEnum } from 'qui-react'

const Example = () => (
  <section className="content">
    <p>
      <UnicodeIcon icon="&#xe630;" />
      <span> - </span>
      <Icon type={IconTypeEnum.unicode} icon="&#xe630;" isSpin={true} style={{ color: 'red', fontSize: '20px' }} />
    </p>

    <p>
      <FontClassIcon icon="initialize" />
      <span> - </span>
      <Icon icon="initialize" isSpin={true} style={{ color: 'blue' }} />
    </p>

    <p>
      <SymbolIcon icon="initialize" />
      <span> - </span>
      <Icon type={IconTypeEnum.symbol} icon="initialize" isSpin={true} style={{ color: 'green' }} />
    </p>
  </section>
)
```
