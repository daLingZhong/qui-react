/**
 * 忽略T类型的K成员(成员名称的字符串数组)的属性
 * https://stackoverflow.com/questions/48215950/exclude-property-from-type
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#predefined-conditional-types
 */
// export type Omit<T, K> = Pick<T, Exclude<keyof T, keyof K>>

/**
 * K 对 T 继承并重写
 * ts 3.5之后原声支持Omit函数
 */
export type OverrideInterface<T, K> = Omit<T, keyof K> & K
