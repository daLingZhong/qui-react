// 用于从 iconfont 页面控制台生成 iconList.json 内容
// 避免每次手动更新 icon 列表内容

// 获取文本 list
function generateTextList(selector) {
  var regex = /\s|\.icon-|#icon-/gi
  var elemList = document.querySelectorAll(selector)
  var ret = []

  for (var item of elemList) {
    ret.push(item.textContent.replace(regex, ''))
  }

  return ret
}

// 构造 icon list
function generateIconList(nameList, unicodeCodeList, fontClassCodeList, symbolCodeList) {
  var ret = []

  for (var i = 0, len = nameList.length; i < len; i++) {
    ret.push({
      name: nameList[i],
      unicode: unicodeCodeList[i],
      fontClass: fontClassCodeList[i],
      symbol: symbolCodeList[i],
    })
  }

  return ret
}

function main() {
  var nameList = generateTextList('.content.unicode > .icon_lists .dib .name')
  var unicodeCodeList = generateTextList('.content.unicode > .icon_lists .dib .code-name')
  var fontClassCodeList = generateTextList('.content.font-class > .icon_lists .dib .code-name')
  var symbolCodeList = generateTextList('.content.symbol > .icon_lists .dib .code-name')
  var iconList = generateIconList(nameList, unicodeCodeList, fontClassCodeList, symbolCodeList)
  // console.log(JSON.stringify(iconList))
}

// main()
