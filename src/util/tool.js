/**
 * 清除左右空格
 */
const trim = (str) => {
    if (!str) return ''
    return str.replace(/(^\s*)|(\s*$)/g, '')
}
/**
 * 字段返回null的时候统一处理
 * 之所以出现null，在某些情况下null代表未录入，和0是有区别的
 * @param {*} __value
 * @param {*} __unit
 */
const nullFormat = (__value, __unit) => {
    __unit = __unit || ''
    __value = __value == null ? '--' : __value + __unit
    return __value
}
/**
 * 千分位分隔
 * @param {数字} __num
 */
const kNumFormat = (__num) => {
    if (!__num || isNaN(Number(__num))) return __num // 空或不是数字，就直接返回
    var _intPart = parseInt(__num) // 获取整数部分
    _intPart = _intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    var _floatPart = '' // 预定义小数部分
    var _splitAr = __num.toString().split('.')
    // =2表示数据有小数位
    if (_splitAr.length == 2) {
        _floatPart = '.' + _splitAr[1]
    }
    return _intPart + _floatPart
}
/**
 * 数字单位缩写
 * @param {数字} __num
 * @param {小数长度} __floatCount
 */
const numUnitFormat = (__num, __floatCount) => {
    __floatCount = __floatCount || 2
    // 空或不是数字，就直接返回
    if (!__num || isNaN(Number(__num))) return __num
    if (__num >= 100000000) {
        __num = numFloadtCount((__num / 100000000), __floatCount) + '亿'
    } else if (__num >= 10000000) {
        __num = numFloadtCount((__num / 10000000), __floatCount) + '千万'
    } else if (__num >= 1000000) {
        __num = numFloadtCount((__num / 1000000), __floatCount) + '百万'
    } else if (__num >= 10000) {
        __num = numFloadtCount((__num / 10000), __floatCount) + '万'
    } else {
        __num = numFloadtCount(__num, __floatCount)
    }
    return __num
}
/**
 * 保留小数点长度
 * @param {数字} __num
 * @param {小数长度} __floatCount
 * @param {0取0} __zeroLimit
 */
const numFloadtCount = (__num, __floatCount, __zeroLimit) => {
    if (__zeroLimit) return __num
    return __num.toFixed(__floatCount)
}
/**
 * 文字高亮
 * @param {转换文本} __txt
 * @param {高亮关键字}} __key
 */
const highlightFormat = (__txt, __key) => {
    if (!__txt) return ''
    if (!trim(__key)) return __txt
    // 元字符转义
    __key = trim(__key.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1'))
    var _keyAr = __key.split(' ')
    for (var m = 0; m < _keyAr.length; m++) {
        if (trim(_keyAr[m])) {
            var _reg = new RegExp(_keyAr[m], 'g') // gi
            __txt = __txt.replace(_reg, '<i>' + _keyAr[m].replace(/\\([.?*+^$[\]\\(){}|-])/g, '$1') + '</i>')
        }
    }
    return __txt
}
/**
 * 字节单位转换
 * @param {字节} __bytes
 * @param {保留小数点} __floatCount
 */
const bytesToSize = (__bytes, __floatCount) => {
    __bytes = parseInt(__bytes)
    if (__bytes === 0) return '0 B'
    var _k = 1024
    var _sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
    var _i = Math.floor(Math.log(__bytes) / Math.log(_k))
    var _m = __bytes / Math.pow(_k, _i)
    switch (_i) {
        case 0:
        case 1:
            _m = (__floatCount == undefined ? _m.toFixed(0) : _m.toFixed(__floatCount)) + '' + _sizes[_i]
            break
        default:
            _m = (__floatCount == undefined ? _m.toFixed(2) : _m.toFixed(__floatCount)) + '' + _sizes[_i]
            break
    }
    return _m
}
export default {
    bytesToSize,
    highlightFormat,
    kNumFormat,
    numUnitFormat,
    nullFormat,
    numFloadtCount
}
