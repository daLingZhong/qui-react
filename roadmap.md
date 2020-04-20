# 前端组件库-RoadMap

| Major Version | Milestone                                                                |
| ------------- | ------------------------------------------------------------------------ |
| 1.0.0         | [milestone](http://gitlab.woqutech.com/ui-module/qui-react/milestones/1) |
| 2.0.0         | 完成 v2.0.0 ReadMap 即发版，没有 DL                                      |

# V1.0.0

- 仓库质量：
  - 有更新、维护和发布的机制，上线 github；
  - 作为能够给各产品线 fork 后“二开”的仓库；
  - 支持 CD：即时发布、即时预览 ✅
- 设计：
  - 落地设计团队组件设计（每种组件至少支持 3 种设计稿风格）；✅
- 组件：
  - 覆盖常用组件（20 个左右），能够落地到各产品线；✅
  - 所有组件都有简单的 demo（能够描述所有的功能点，但不需要覆盖所有情况）；✅
  - 不强求支持动画效果 ✅

### 组件进度

- 按照字母顺序排列
- 已经完成的会被 ~~**划去**~~
- 截止 2019.12.25 已完成功能组件 `25` 个

| 组件名           | v1.0 功能                                                                                                                                                                              |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ~~Alert~~        | [告警弹窗](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2)                                                                                     |
| ~~Breadcrumb~~   | [面包屑组件](https://lanhuapp.com/web/#/item/project/board?pid=9807d89b-ab71-4cf3-b53b-44d12a925b06)                                                                                   |
| ~~Button~~       | [按钮组件](https://lanhuapp.com/web/#/item/project/board?pid=64b5281e-3c5b-4713-a532-dd8ecb26e201) 支持禁用、自定义 icon。controlled 组件                                              |
| ~~Card~~         | [卡片组件](https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65)                                                                                     |
| ~~Checkbox~~     | [多选框组件](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355)                                                                                   |
| ~~Radio~~        | [单选框组件](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355)                                                                                   |
| ~~Drawer~~       | [抽屉组件](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2)右侧划出的抽屉组件                                                                   |
| Grid             | 格栅组件。支持最小宽度配置。                                                                                                                                                           |
| ~~Icon~~         | 图标组件                                                                                                                                                                               |
| ~~Input~~        | [输入框组件](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355) 支持错误信息显示、密码类型显示。                                                  |
| ~~Modal~~        | [弹出框组件](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2) 支持自定义头尾、宽度、永远是 root 节点的 last child。                             |
| ~~Notification~~ | [通知提示组件](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2)能够通过调用函数构造的通知组件。支持自定义位置（left、right 等）、自定义显示时长 |
| ~~Message~~      | [消息提示组件](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2)展示简单的消息反馈                                                               |
| ~~Pagination~~   | [分页组件](https://lanhuapp.com/web/#/item/project/board?pid=9807d89b-ab71-4cf3-b53b-44d12a925b06) 分页组件。支持指定当前页。controlled 组件                                           |
| ProgressBar      | [通知提示组件](https://lanhuapp.com/web/#/item/project/board?pid=c8802835-4d75-4f4b-9388-8eb115d3c1f2)进度条组件。支持普通进度条和百分比进度条。                                       |
| ~~Select~~       | [下拉选择框组件](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355)。支持单选、多选模式、树状、级联。                                             |
| Slider           | [滑动输入框](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355) 支持最大、最小、步长值。controlled 组件                                           |
| ~~Step~~         | [步骤组件](https://lanhuapp.com/web/#/item/project/board?pid=9807d89b-ab71-4cf3-b53b-44d12a925b06)                                                                                     |
| ~~Switch~~       | [开关组件](https://lanhuapp.com/web/#/item/project/board?pid=0725176d-23e2-469a-97d0-c5567662d355) controlled 组件                                                                     |
| ~~Tabs~~         | [选项卡组件](https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65) 支持自定义 title、当前 index、操作回调。controlled 组件                           |
| ~~Table~~        | [表格组件](https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65) 支持自定义列渲染、暴露选中行 index 接口、单选多选模式                               |
| ~~Tooltip~~      | [浮动提示组件](https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65) 支持自定义内容、触发方式、强制显示。                                            |
| ~~Timeline~~     | [时间轴组件](https://lanhuapp.com/web/#/item/project/board?pid=f689ad61-44b9-43b8-8a04-18b4be34ec65)                                                                                   |

# V2.0.0

- 仓库质量：
  - 自动化单元测试覆盖率 ≥ 70%；
  - 支持 lint 系列校验；
  - 支持 CI/CD：即时测试、即时发布、即时预览；✅
- 组件：
  - 强化基础组件功能、质量（具体如何强化待补充）；
  - 吸纳来自各产品线的组件（至少 5 个）；
  - 丰富仓库，并包含更灵活的抽象组件；
  - 支持自定义 css 类名，实现自定义风格； ✅
- 设计：
  - 设计稿风格实现率达到 100%；✅
  - 落地设计团队的动画、动效设计

| 组件名          | 功能                                                                                                                                                                                                                  |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input           | 支持更丰富的用法                                                                                                                                                                                                      |
| Menu（sidebar） | [菜单组件](https://lanhuapp.com/web/#/item/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=1fa2c9e1-15e4-426b-8bf0-00b9d66bbf4d)                       |
| Animation       | 动画抽象组件                                                                                                                                                                                                          |
| Trigger         | 触发抽象组件                                                                                                                                                                                                          |
| Form            | 表单组件                                                                                                                                                                                                              |
| DateSelect      | [日期选择组件](https://lanhuapp.com/web/#/item/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=284362d6-951c-4d64-8bfe-ff18b86dc536)                   |
| TimeSelect      | [时间选择组件](https://lanhuapp.com/web/#/item/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=284362d6-951c-4d64-8bfe-ff18b86dc536)                   |
| Select          | 支持[树状选择](https://lanhuapp.com/web/#/item/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=ffb6eb9b-ec7a-47aa-bc7a-fa73e4654cef)。支持多维 options |
| 走马灯          | [走马灯组件](https://lanhuapp.com/web/#/item/board/detail?pid=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&project_id=d9a8dea5-c9f1-4c95-8515-ca82e73bba0e&image_id=1d440467-1866-4009-95da-b27a8b9f35b5)                     |
| ...待定         |                                                                                                                                                                                                                       |

# V3.0.0

- 仓库质量：
  - 自动化单元测试覆盖率 ≥ 90%
  - 支持 e2e 测试
- 组件：
  - 强化组件功能、质量；
  - 吸纳来自各产品线和开源社区的 pull request（至少 5 个）；
- ...待定
