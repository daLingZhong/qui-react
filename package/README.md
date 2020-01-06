# Woqu 前端 React 标准组件库

### [主干 CD 展示地址](http://192.168.1.85:9999)

### [ROADMAP 与进度情况](http://gitlab.woqutech.com/ui-module/qui-react/blob/release-1.0.0/roadmap.md)

### [组件编写规范](http://gitlab.woqutech.com/ui-module/qui-react/tree/release-1.0.0/src/components)

### [CSS 样式规范](http://gitlab.woqutech.com/ui-module/qui-react/tree/release-1.0.0/src/styles)

## 启动 dev-server

```
npm run dev
//或 带有热加载
npm run dev:hmr
```

## 打包

```
npm run build
```

## 编译静态页面

会在 `docs` 文件夹下生成静态的 `index.html` 文件，可直接被 `github pages` 规则所识别

```
npm run page
```

## 生成本地 npm 包

会在项目根目录生成一个`tgz包`可用于`npm install`命令安装，生成规则为 package.json 中的`name` + `version`

```
npm run build
npm pack
```

## 项目中使用

在入口文件中引入包中的 `css` 文件

```
import 'qui-react/dist/main.css'
// 在需要的组件中引入
import { Button } from 'qui-react'
```

## 注意

- 组件的类型需要通过单独的 `interface.ts` 文件抛出，该文件还需要在顶层的 `index.ts` 中文件中声明，否则在组件中 `export` 的类型或接口将无法在生产环境中使用

- 建议项目中的 `Typescript` 版本保持在`3.7`以上，否则接口语法可能会被检测异常。[TS 3.7 Dom Break Change](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/#the-usedefineforclassfields-flag-and-the-declare-property-modifier)

- 如果遇到无法解析其他 `npm` 包 `ts` 接口语法情况，可以在`tsconfig`中加入 `"skipLibCheck": true` 配置跳过检查

- 在`.gitignore`文件中添加了最终 `npm` 包，如果直接拉下分支使用其中的 `tgz` 包时建议重新执行编译打包命令，node 环境请使用`12.4.0`
