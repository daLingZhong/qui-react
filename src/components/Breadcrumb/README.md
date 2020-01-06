---
category: Components
type: Basic
title: Breadcrumb
subtitle: 面包屑
---
## 何时使用

- 当系统拥有超过两级以上的层次结构时
- 当需要告知用户`你在哪里`时
- 当需要向上导航功能时

## API

### Breadcrumb

面包屑组件，子组件必须为 BreadcrumbItem

| 参数              | 说明                                                                                                                  | 类型                                                          | 默认值    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | --------- |
| separator      | 分隔符自定义                                    | string      | '/'      |
| style             | 面包屑 style 属性                                                                                                     | `CSSProperties`                                               | -         |
| className         | 面包屑 className                                                                                                      | string                                                        | -         |


### BreadcrumbItem

| 参数       | 说明                                 | 类型              | 默认值 |
| ---------- | ------------------------------------ | ----------------- | ------ |
| href           | 链接地址                         | string | -             |
| style          | BreadcrumbItem style 属性        | `CSSProperties`        | -       |
| className      | BreadcrumbItem className         | string                | -        |
| overlay        | 下拉菜单内容                      | []                    | -        |
| onClick        | 单击事件                         | (e:MouseEvent)=>void	 | -        |

