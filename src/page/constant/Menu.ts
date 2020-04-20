import { flatten } from 'lodash'

export const MENU_LIST = [
  {
    type: '通用',
    component: [
      {
        name: '按钮',
        alias_name: 'Button',
        route: 'button',
        des: '按钮用于开始一个即时操作。',
        anchor: [
          {
            name: '按钮主题',
            route: 'components-button-demo-basic',
          },
          {
            name: '图标按钮',
            route: 'components-button-demo-icon',
          },
          {
            name: '按钮尺寸',
            route: 'components-button-demo-size',
          },
          {
            name: '禁用状态',
            route: 'components-button-demo-disabled',
          },
          {
            name: '加载中状态',
            route: 'components-button-demo-loading',
          },
          {
            name: '按钮组合',
            route: 'components-button-demo-group',
          },
          {
            name: '按钮自定义',
            route: 'components-button-demo-wave',
          },
        ],
      },
      {
        name: '图标',
        alias_name: 'Icon',
        route: 'icon',
        des: '语义化的矢量图形。',
        anchor: [
          {
            name: '基本',
            route: 'components-icon-demo-basic',
          },
        ],
      },
      {
        name: '排版',
        alias_name: 'Typography',
        route: 'typography',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
    ],
  },
  {
    type: '布局',
    component: [
      {
        name: '栅格',
        alias_name: 'Grid',
        route: 'grid',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '布局',
        alias_name: 'Layout',
        route: 'layout',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
    ],
  },
  {
    type: '导航',
    component: [
      {
        name: '面包屑',
        alias_name: 'Breadcrumb',
        route: 'breadcrumb',
        des: '显示当前页面在系统层级结构中的位置，并能向上返回。',
        anchor: [
          {
            name: '基本',
            route: 'components-breadcrumb-demo-basic',
          },
          {
            name: '分隔符',
            route: 'components-breadcrumb-demo-separator',
          },
          {
            name: '带下拉菜单',
            route: 'components-breadcrumb-demo-dropdown',
          },
        ],
      },
      {
        name: '分页',
        alias_name: 'Pagination',
        route: 'pagination',
        des: '采用分页的形式分隔长列表，每次只加载一个页面。',
        anchor: [
          {
            name: '基本',
            route: 'components-pagination-demo-basic',
          },
          {
            name: '迷你',
            route: 'components-pagination-demo-mini',
          },
          {
            name: '改变',
            route: 'components-pagination-demo-change',
          },
          {
            name: '禁用状态',
            route: 'components-pagination-demo-disabled',
          },
          {
            name: '跳转',
            route: 'components-pagination-demo-jump',
          },
        ],
      },
      {
        name: '步骤条',
        alias_name: 'Steps',
        route: 'steps',
        des: '引导用户按照流程完成任务的导航条。',
        anchor: [
          {
            name: '基本',
            route: 'components-steps-demo-basic',
          },
          {
            name: '竖直方向',
            route: 'components-steps-demo-vertical',
          },
        ],
      },
    ],
  },
  {
    type: '数据输入',
    component: [
      {
        name: '输入框',
        alias_name: 'Input',
        route: 'input',
        des: '通过鼠标或键盘输入内容，是最基础的表单域的包装。',
        anchor: [
          {
            name: '基本',
            route: 'components-input-demo-basic',
          },
          {
            name: '尺寸',
            route: 'components-input-demo-size',
          },
          {
            name: '前置/后置标签',
            route: 'components-input-demo-addon',
          },
          {
            name: '前缀和后缀',
            route: 'components-input-demo-fix',
          },
          {
            name: '禁用状态',
            route: 'components-input-demo-disabled',
          },
          {
            name: '文本域',
            route: 'components-input-demo-textarea',
          },
          {
            name: '状态',
            route: 'components-input-demo-error',
          },
        ],
      },
      {
        name: '单选框',
        alias_name: 'Radio',
        route: 'radio',
        des: '单选框。',
        anchor: [
          {
            name: '基本',
            route: 'components-radio-demo-basic',
          },
          {
            name: '禁用',
            route: 'components-radio-demo-disabled',
          },
        ],
      },
      {
        name: '多选框',
        alias_name: 'Checkbox',
        route: 'checkbox',
        des: '多选框。',
        anchor: [
          {
            name: '基本',
            route: 'components-checkbox-demo-basic',
          },
          {
            name: '中间状态',
            route: 'components-checkbox-demo-indeterminate',
          },
          {
            name: '禁用',
            route: 'components-checkbox-demo-disabled',
          },
        ],
      },
      {
        name: '选择器',
        alias_name: 'Select',
        route: 'select',
        des: '下拉选择器。',
        anchor: [
          {
            name: '基本',
            route: 'components-select-demo-basic',
          },
          {
            name: '状态',
            route: 'components-select-demo-error',
          },
          {
            name: '禁用',
            route: 'components-select-demo-disabled',
          },
          {
            name: '加载中',
            route: 'components-select-demo-loading',
          },
          {
            name: '尺寸',
            route: 'components-select-demo-size',
          },
          {
            name: '分组',
            route: 'components-select-demo-group',
          },
          {
            name: '标签',
            route: 'components-select-demo-tags',
          },
          {
            name: '多选',
            route: 'components-select-demo-multiple',
          },
        ],
      },
      {
        name: '级联选择器',
        alias_name: 'Cascade',
        route: 'cascade',
        des: '级联选择框。',
        anchor: [
          {
            name: '基本',
            route: 'components-cascade-demo-basic',
          },
          {
            name: '移入展开',
            route: 'components-button-demo-hover',
          },
        ],
      },
      {
        name: '树选择',
        alias_name: 'TreeSelect',
        route: 'treeselect',
        des: '现版本仅支持标签模式选中',
        anchor: [
          {
            name: '基本',
            route: 'components-treeselect-demo-basic',
          },
          {
            name: '复选框多选',
            route: 'components-treeselect-demo-checkbox',
          },
        ],
      },
      {
        name: '时间选择器',
        alias_name: 'TimePicker',
        route: 'timepicker',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '日期选择器',
        alias_name: 'DatePicker',
        route: 'datepicker',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '滑动输入条',
        alias_name: 'Slide',
        route: 'slide',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '穿梭条',
        alias_name: 'Transfer',
        route: 'transfer',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '开关',
        alias_name: 'Switch',
        route: 'switch',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-switch-demo-basic',
          },
          {
            name: '尺寸',
            route: 'components-switch-demo-size',
          },
          {
            name: '禁用',
            route: 'components-switch-demo-disabled',
          },
          {
            name: '内容自定义',
            route: 'components-switch-demo-content',
          },
          {
            name: '加载中',
            route: 'components-switch-demo-loading',
          },
          {
            name: '自定义',
            route: 'components-switch-demo-wave',
          },
        ],
      },
      {
        name: '动态增减项',
        alias_name: 'AddForm',
        route: 'addform',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
    ],
  },
  {
    type: '数据展示',
    component: [
      {
        name: '表格',
        alias_name: 'Table',
        route: 'table',
        des: '展示行列数据。',
        anchor: [
          {
            name: '基本',
            route: 'components-table-demo-basic',
          },
          {
            name: '异常状态',
            route: 'components-table-demo-abnormal',
          },
          {
            name: '表格头尾',
            route: 'components-table-demo-header',
          },
          {
            name: '可展开行',
            route: 'components-table-demo-expanded',
          },
          {
            name: '树状表格',
            route: 'components-table-demo-tree',
          },
          {
            name: '可伸缩列',
            route: 'components-table-demo-resize',
          },
          {
            name: '多选行',
            route: 'components-table-demo-checkbox',
          },
          {
            name: '排序',
            route: 'components-table-demo-sort',
          },
          {
            name: '服务端排序',
            route: 'components-table-demo-serversort',
          },
          {
            name: '筛选',
            route: 'components-table-demo-filter',
          },
          {
            name: '自定义筛选',
            route: 'components-table-demo-filtercus',
          },
          {
            name: '合并列',
            route: 'components-table-demo-mergecol',
          },
          {
            name: '合并行',
            route: 'components-table-demo-mergerow',
          },
          {
            name: '冻结表头',
            route: 'components-table-demo-fixheader',
          },
          {
            name: '普通编辑表格',
            route: 'components-table-demo-edit',
          },
          {
            name: '自定义编辑表格',
            route: 'components-table-demo-editcus',
          },
        ],
      },
      {
        name: '标签',
        alias_name: 'Tag',
        route: 'tag',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '描述列表',
        alias_name: 'Descriptions',
        route: 'descriptions',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '时间轴',
        alias_name: 'Timeline',
        route: 'timeline',
        des: '垂直展示的时间流信息。',
        anchor: [
          {
            name: '基本',
            route: 'components-timeline-demo-basic',
          },
          {
            name: '节点颜色',
            route: 'components-timeline-demo-color',
          },
          {
            name: '自定义节点类型',
            route: 'components-timeline-demo-dot',
          },
          {
            name: '自定义内容',
            route: 'components-timeline-demo-content',
          },
          {
            name: '方向',
            route: 'components-timeline-demo-position',
          },
          {
            name: '加载中',
            route: 'components-timeline-demo-loading',
          },
        ],
      },
      {
        name: '统计数值',
        alias_name: 'Statistic',
        route: 'statistic',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
      {
        name: '文字提示',
        alias_name: 'Tooltip',
        route: 'tooltip',
        des: '简单的文字提示气泡框。',
        anchor: [
          {
            name: '基本',
            route: 'components-tooltip-demo-basic',
          },
          {
            name: '位置',
            route: 'components-tooltip-demo-position',
          },
        ],
      },
      {
        name: '空状态',
        alias_name: 'Empty',
        route: 'empty',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
    ],
  },
  {
    type: '数据反馈',
    component: [
      {
        name: '抽屉',
        alias_name: 'Drawer',
        route: 'drawer',
        des: '在抽屉内打开新的抽屉，用以解决多分支任务的复杂状况。',
        anchor: [
          {
            name: '基本',
            route: 'components-drawer-demo-basic',
          },
        ],
      },
      {
        name: '警告提示',
        alias_name: 'Alert',
        route: 'alert',
        des: '警告提示，展现需要关注的信息。',
        anchor: [
          {
            name: '基本',
            route: 'components-alert-demo-basic',
          },
          {
            name: '样式',
            route: 'components-alert-demo-type',
          },
          {
            name: '可关闭的',
            route: 'components-alert-demo-close',
          },
          {
            name: '图标',
            route: 'components-alert-demo-icon',
          },
        ],
      },
      {
        name: '弹出框',
        alias_name: 'Modal',
        route: 'modal',
        des: '模态对话框。',
        anchor: [
          {
            name: '基本',
            route: 'components-modal-demo-basic',
          },
          {
            name: '信息提示',
            route: 'components-modal-demo-info',
          },
          {
            name: '确认对话框',
            route: 'components-modal-demo-confirm',
          },
        ],
      },
      {
        name: '全局提示',
        alias_name: 'Message',
        route: 'message',
        des: '全局展示操作反馈信息。',
        anchor: [
          {
            name: '基本',
            route: 'components-message-demo-basic',
          },
          {
            name: '其他提示类型',
            route: 'components-message-demo-type',
          },
          {
            name: '加载中',
            route: 'components-message-demo-loading',
          },
        ],
      },
      {
        name: '通知提醒框',
        alias_name: 'Notification',
        route: 'notification',
        des: '全局展示通知提醒信息。',
        anchor: [
          {
            name: '基本',
            route: 'components-notification-demo-basic',
          },
          {
            name: '延迟',
            route: 'components-notification-demo-duration',
          },
          {
            name: '类型',
            route: 'components-notification-demo-type',
          },
          {
            name: '位置',
            route: 'components-notification-demo-position',
          },
          {
            name: '翻转',
            route: 'components-notification-demo-reserve',
          },
          {
            name: '更新',
            route: 'components-notification-demo-update',
          },
        ],
      },
      {
        name: '进度条',
        alias_name: 'Progress',
        route: 'progress',
        des: '',
        anchor: [
          {
            name: '基本',
            route: 'components-button-demo-basic',
          },
        ],
      },
    ],
  },
]

export const FLATTEN_MENU = flatten(MENU_LIST.map((item) => [...item.component]))

export const MENU_DESIGN = [
  {
    type: 'Woqu Design',
    component: [
      {
        name: '设计价值观',
        route: 'values',
      },
    ],
  },
  {
    type: '原则',
    component: [
      {
        name: '对比',
        route: 'compare',
      },
      {
        name: '重复',
        route: 'repeat',
      },
      {
        name: '亲密性',
        route: 'intimacy',
      },
      {
        name: '对齐',
        route: 'aligned',
      },
    ],
  },
  {
    type: '视觉',
    component: [
      {
        name: '色彩',
        route: 'color',
      },
      {
        name: '布局',
        route: 'layout',
      },
      {
        name: '字体',
        route: 'font',
      },
      {
        name: '图标',
        route: 'icon',
      },
    ],
  },
  {
    type: '模式',
    component: [
      {
        name: '概览',
        route: 'overview',
      },
      {
        name: '文案',
        route: 'copywriting',
      },
      {
        name: '数据输入',
        route: 'input',
      },
      {
        name: '数据展示',
        route: 'display',
      },
      {
        name: '反馈',
        route: 'feedback',
      },
    ],
  },
  {
    type: '动效',
    component: [
      {
        name: '概览',
        route: 'motion',
      },
    ],
  },
]
