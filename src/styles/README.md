# 约定规范
- 不要用css module来使用、引入组件的样式

- 组件本身类名的最外层要包裹（nesting）来自 `src/style/var.scss` 中的 $prefix 作为类名的统一前缀。
如：

  ```css
  @import '@/style/var.scss'
  .$(prefix) {
      .button {
          ...
      }
  }
  ```

# 关于q-ui-react 使用的css语法

统一使用postcss（webpack中用postcss-loader）作为css预处理器，各种语法支持使用postcss plugins的方式添加。

由于css的各类预处理语法的细微差异，因此下面罗列各语法的支持方式，请参考这些plugins的主页介绍使用正确的语法，避免频繁采坑。

## import

使用 [postcss-import](https://github.com/postcss/postcss-import)

同时，使用[enhanced-resolve](https://github.com/webpack/enhanced-resolve)支持路径别名

```scss
@import '@/styles/color.scss'
```


## 变量

使用 postcss-simple-vars

例子：

```scss
$prefix: qui;
$dir:    top;
$primary-color:   #056ef0;
$column: 200px;

.menu_link {
    background: $primary-color;
    width: $column;
    height: calc(4 * $column);
    margin-$(dir): 10px;
}

body {
  width: calc(4 * $column);
}

$prefix { }
$(prefix)_button { }

```

## nested

使用 postcss-nested

```scss
.prefix {
    .inside {
    }
}
```



## mixins

使用 [postcss-mixins](https://github.com/postcss/postcss-mixins)

```scss
@define-mixin icon $network, $color: blue {
    .icon.is-$(network) {
        color: $color;
        @mixin-content;
    }
    .icon.is-$(network):hover {
        color: white;
        background: $color;
    }
}

@mixin icon twitter {
    background: url(twt.png);
}
@mixin icon youtube, red {
    background: url(youtube.png);
}
```



## color

使用 [postcss-color-function](https://github.com/postcss/postcss-color-function)

帮助更优雅地描述css色彩，如设计稿中的透明度等（还支持亮度、暗度、blend等等），都可以通过下述方式来描述：

```scss
$myColor: red;

.example {
    color: color($myColor a(50%));
}
```

输出会是：

```css
.example {
    color: rgba(255, 0, 0, 0.5)
}
```

