/**
 * 清除左右空格
 */
const lrTrim = (str) => {
    if (!str) return ''
    return str.replace(/(^\s*)|(\s*$)/g, '')
}

export default {
    lrTrim
}
