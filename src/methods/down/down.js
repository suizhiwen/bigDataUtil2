/**
 * 方法说明 下载文件, 有2种形式, 1. url (例如: http://xxxxx/a.zip) 2. 文件流, 且需要默认文件名
 * @method down
 * @param{object} url data filename headerType
 *
 * 使用示例:
 *    形式1: downFile({ url: 'http://xxxxx/a.zip' })
 *    形式2: downFile({
 *            data: 'xxx文件流',
 *            filename: '模板.xlsx', // 可选, 默认'模板.xlsx'
 *            headerType: 'application/octet-stream;charset=utf-8', // 可选 默认'application/octet-stream;charset=utf-8'
 *          })
 */

export default function ({ data, filename = '模板.xlsx', headerType = 'application/octet-stream;charset=utf-8', url }) {
  if (url) { // 形式1 url (例如: http://xxxxx/a.zip)
      window.open(url)
  } else { // 形式2  文件流, 且需要默认文件名
    const blob = new Blob([data], { type: headerType })
    const url = window.URL.createObjectURL(blob)
    const dom = document.createElement('a')
    dom.href = url
    dom.download = decodeURI(filename) // 用dom的download下载，可以设置默认文件名
    dom.style.display = 'none'
    document.body.appendChild(dom)
    dom.click()
    dom.parentNode.removeChild(dom) // 释放内存
    window.URL.revokeObjectURL(url) // 释放内存
  }
}
