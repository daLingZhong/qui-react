type Schema = {
  [props: string]: {
    [props: string]: string
  }
}
type Mode = 'dark' | 'white'

const COLOR_SCHEMA_WHITE: Schema = {
  common: {
    title: '#3a3b3c',
    content: '#6a6b6c',
    'close-button': '#aaabac',
    'close-button-hover': 'rgb(102, 103, 103)',
  },
  table: {
    'thead-bg': '#f1f2f3',
    'thead-color': '#3a3b3c',
    'tr-bg': '#fff',
    'tr-color': '#6a6b6c',
    border: '#e6e7e8',
    'thead-hover': 'rgba(106, 107, 108, 0.1)',
    expanded: '#e6e7e8',
    filter: 'rgba(106, 107, 108, 0.1)',
    'filter-wrapper': '#fff',
    'header-bg': '#fff',
    'footer-bg': '#f2f2f2',
  },
  card: {
    bg: '#fff',
    border: '#d9d9d9',
  },
  timeline: {
    bg: '#d8d8d8',
  },
  tabs: {
    bg: '#fff',
    'title-color': '#5a5b5c',
    'disabled-color': '#9a9b9c',
    border: '#e4e6e8',
    'card-bg': '#fafafa',
    'card-active-bg': '#fff',
  },
  button: {
    color: '#fff',
    'normal-bg': '#fff',
    'normal-border': '#e6e7e8',
    'normal-color': '#2a2b2c',
    'disabled-bg': '#c6c7c8',
    'disabled-color': '#fff',
    'disabled-hollow-bg': '#f6f7f8',
    'disabled-hollow-border': '#e6e7e8',
    'disabled-hollow-color': '#8a8b8c',
    loading: '#fff',
    'loading-hollow': '#2a2b2c',
  },
  menu: {
    bg: '#fff',
    color: '#5a5b5c',
    disabled: '#cccccc',
  },
  checkbox: {
    bg: '#fff',
    border: '#d9d9d9',
    checked: '#fff',
    color: '#555555',
    'disabled-border': '#d9d9d9',
    'disabled-bg': '#f1efef',
    'disabled-checked-bg': '#f1efef',
    'disabled-checked-color': '#d9d9d9',
    'disabled-checked-border': '#d9d9d9',
  },
  radio: {
    border: '#e4e6e8',
    'disabled-bg': '#f5f5f5',
    'disabled-checked': '#c4c4c4',
  },
  tooltip: {
    bg: 'rgba(17, 17, 17, 0.8)',
  },
  select: {
    bg: '#fff',
    color: '#5a5b5c',
    border: '#e6e7e8',
    disabled: '#f4f4f4',
    'tag-border': '#e4e6e8',
    'tag-bg': '#fafafa',
  },
  modal: {
    border: '#e6e7e8',
    bg: '#fff',
  },
  drawer: {
    bg: '#fff',
    border: '#e8e8e8',
  },
  input: {
    bg: '#fff',
    color: '#555555',
    border: '#e4e6e8',
    'addon-bg': '#fafafa',
    'disabled-bg': '#f4f4f4',
    'disabled-color': '#cccccc',
  },
  page: {
    bg: '#fff',
    'disabled-bg': '#f4f4f4',
    'disabled-color': '#cccccc',
  },
  breadcrumb: {
    color: '#8a8b8c',
    last: '#2a2b2c',
  },
}

const COLOR_SCHEMA_DARK: Schema = {
  common: {
    title: '#F0F3F5',
    content: '#DCDEE0',
    'close-button': '#DCDEE0',
    'close-button-hover': '#fff',
  },
  table: {
    hover: '#4D5257',
    'thead-bg': '#33383c',
    'thead-color': '#F0F3F5',
    'tr-bg': '#33383c',
    'tr-color': '#DCDEE0',
    border: '#181b1e',
    'thead-hover': '#3c4045',
    expanded: '#4d5257',
    filter: '#2c3136',
    'filter-wrapper': '#2c3136',
    'header-bg': '#4d5257',
    'footer-bg': '#4d5257',
  },
  card: {
    bg: '#33383c',
    border: '#181b1e',
  },
  timeline: {
    bg: '#686C70',
  },
  tabs: {
    bg: '#2c3136',
    'title-color': '#dcdee0',
    'disabled-color': '#78797A',
    border: '#6C7175',
    'card-bg': '#3C4045',
    'card-active-bg': '#181B1E',
  },
  button: {
    color: '#24272a',
    'normal-bg': '#181b1e',
    'normal-border': '#686c70',
    'normal-color': '#1a91f9',
    'disabled-bg': '#4d5257',
    'disabled-color': '#b4b6b8',
    'disabled-hollow-bg': '#181b1e',
    'disabled-hollow-border': '#686c70',
    'disabled-hollow-color': '#b4b6b8',
    loading: '#2a2b2c',
    'loading-hollow': '#fff',
  },
  menu: {
    bg: '#4d5257',
    color: '#dcdee0',
    hover: '#5a5f63',
    active: '#686c70',
    disabled: '#989DA3',
  },
  checkbox: {
    bg: '#181b1e',
    border: '#686c70',
    checked: '#181b1e',
    color: '#f0f3f5',
    'disabled-border': '#686C70',
    'disabled-bg': '#3C4045',
    'disabled-checked-bg': '#8C9196',
    'disabled-checked-color': '#181B1E',
    'disabled-checked-border': '#8C9196',
  },
  radio: {
    border: '#686C70',
    'disabled-bg': '#3C4045',
    'disabled-checked': '#686C70',
  },
  tooltip: {
    bg: 'rgba(18, 21, 24, 0.6)',
  },
  select: {
    bg: '#3c4045',
    color: '#f0f3f5',
    border: '#686c70',
    disabled: '#5a5f63',
    'tag-border': '#5A5F63',
    'tag-bg': '#5A5F63',
  },
  modal: {
    border: '#4d5257',
    bg: '#5a5f63',
  },
  drawer: {
    bg: '#3C4045',
    border: 'transparent',
  },
  input: {
    bg: '#3C4045',
    color: '#F0F3F5',
    border: '#686C70',
    'addon-bg': '#3C4045',
    'disabled-bg': '#5a5f63',
    'disabled-color': '#8C8D8F',
  },
  page: {
    bg: '#33383c',
    'disabled-bg': '#6c7175',
    'disabled-color': '#b4b6b8',
  },
  breadcrumb: {
    color: '#B4B6B8',
    last: '#F0F3F5',
  },
}

export default function switchMode(mode: Mode) {
  const primary1 = document.documentElement.style.getPropertyValue(`--qui-primary1`)
  const primary2 = document.documentElement.style.getPropertyValue(`--qui-primary2`)
  const isDarkMode = mode === 'dark'
  let schema: Schema = COLOR_SCHEMA_WHITE

  if (isDarkMode) {
    schema = COLOR_SCHEMA_DARK
  }

  Object.keys(schema).forEach((component) => {
    const component_color_obj = schema[component]

    Object.keys(component_color_obj).forEach((item) => {
      document.documentElement.style.setProperty(`--qui-${component}-${item}`, component_color_obj[item])
    })

    if (component === 'table' && !isDarkMode) {
      document.documentElement.style.setProperty('--qui-table-hover', primary1)
    }

    if (component === 'menu' && !isDarkMode) {
      document.documentElement.style.setProperty('--qui-menu-hover', primary2)
      document.documentElement.style.setProperty('--qui-menu-active', primary1)
    }
  })
}
