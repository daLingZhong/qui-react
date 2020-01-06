/**
 * 在 target 上添加 eventType 事件类型的监听，回调 callback
 * 
 * 例子：
 * 在节点 Element_A 上添加监听 click 事件：
 * let listener = addEventListener( Element_A, 'click', (e)=>{console.log(e)})
 * 
 * 销毁监听器：
 * listener.remove()
 */
export default function addEventListener(
  target: Document | HTMLElement,
  eventType,
  callback: (e) => void
): { remove: () => void } {
  function wrapCallback(e) {
    callback.call(target, e)
  }

  target.addEventListener(eventType, wrapCallback, false)
  return {
    remove() {
      target.removeEventListener(eventType, wrapCallback, false)
    },
  }
}
