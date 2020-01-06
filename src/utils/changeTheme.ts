import { generate } from '@ant-design/colors'

export default function changeTheme(v: string, swtichHover = true) {
  const res = generate(v)

  res.map((item, index) => {
    document.documentElement.style.setProperty(`--qui-primary${index + 1}`, item)

    if (index === 5) {
      // 为主色添加30%的透明度实现
      // https://blog.csdn.net/hggl_bera/article/details/90547623
      document.documentElement.style.setProperty(`--shadowColor`, `${item}4D`)
      document.documentElement.style.setProperty(`--buttonNormalHoverColor`, `${item}1A`)
    }
  })

  if (swtichHover) {
    document.documentElement.style.setProperty('--qui-table-hover', res[0])
    document.documentElement.style.setProperty('--qui-menu-hover', res[1])
    document.documentElement.style.setProperty('--qui-menu-active', res[0])
  }

  return res
}
