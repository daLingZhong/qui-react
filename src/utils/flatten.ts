// 扁平化🌲结构，并为每层加入 levle 值标明层级
// 需要传入 源数据、需要遍历的字段名
// 可选字段为 levle等级，默认从 0 开始，子节点的字段名称，默认 children

// 用于增强泛型接口
// https://stackoverflow.com/questions/26652179/extending-interface-with-generic-in-typescript
export type Flatten<T extends {}> = T & {
  level: number
}

function flatten<T>(data: T[], keys: string[], level = 0, childKey = 'children'): Flatten<T>[] {
  return data.reduce(
    (arr, x) => [
      ...arr,
      keys.reduce((o, k) => ((o[k] = x[k]), o), { level }),
      ...flatten(x[childKey] || [], keys, level + 1),
    ],
    []
  )
}

export default flatten
