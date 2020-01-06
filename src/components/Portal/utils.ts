// 检查 DOM 环境支持
export const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement)

// 空函数
export const noop = function() {}

/**
 * 获取节点
 * @param {string} selector - 选择器
 * @return {Node} DOM 节点
 */
export const getNode = function(selector: any) {
  const node = typeof selector === 'string' ? document.querySelector(selector) : selector

  return node || document.body
}

/**
 * 移除节点
 * @param {Node} node - DOM 节点
 */
export const removeNode = (node: Element): void => {
  const { parentNode } = node

  if (parentNode) {
    parentNode.removeChild(node)
  }
}

/**
 * 生成子节点
 * @param {Node} parent - 父节点
 * @return {Node} 生成的子节点
 */
export const createNode = (parent: Element): Element => {
  const div = document.createElement('div')

  return parent.appendChild(div)
}
