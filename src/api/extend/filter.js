
import Vue from 'vue'
// 接口字段有可能出现3种情况
// undefined(要的字段没有返回)
// null(数据不存在)
// 空字符串(可能人为设置)
/**
 * 千分位
 * 只对数字有效
 */
const kNumFmt = (__num) => {
    if (__num === undefined || __num === null || isNaN(__num) || __num === '') {
        return __num
    }
    var _splitAr = __num.toString().split('.')
    var _intPart = _splitAr[0] // 获取整数部分
    _intPart = _intPart
        .toString()
        .replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
    var _floatPart = '' // 预定义小数部分
    // =2表示数据有小数位
    if (_splitAr.length == 2) {
        _floatPart = '.' + _splitAr[1]
    }
    return _intPart + _floatPart
}
/**
 * 在项目中对无值字段的处理方式
 */
const nullFmt = (__value, __unit, __flag) => {
    __flag = __flag || '--'
    __unit = __unit || ''
    if (__value === undefined || __value === null || __value === '') {
        return __flag
    } else {
        return __value + __unit
    }
}
/**
 * 数字小数点个数
 * 只支持数字
 */
const numFloadtCount = (__num, __floatCount, __zeroLimit) => {
    __floatCount = __floatCount == undefined ? 2 : __floatCount
    if (__num === undefined || __num === null || isNaN(__num) || __num === '') {
        return __num
    }
    if (__zeroLimit && __num == 0) {
        return __num
    }
    return __num.toFixed(__floatCount)
}
/**
 * 数字类型：亿 万
 */
const numFmt = (__num, __floatCount) => {
    __num = __num || 0
    var _num = __num
    var _tag = ''

    if (__num >= 100000000) {
        _tag = '亿'
        _num = __num / 100000000
    } else if (__num >= 10000) {
        _tag = '万'
        _num = __num / 10000
    } else {
        _num = __num
    }
    return __floatCount == undefined ? _tag : _num.toFixed(__floatCount)
}
/**
 * 对字节的转换处理
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
            _m = (__floatCount == undefined ? _m.toFixed(0) : _m.toFixed(__floatCount)) + _sizes[_i]
            break
        default:
            _m = (__floatCount == undefined ? _m.toFixed(2) : _m.toFixed(__floatCount)) + _sizes[_i]
            break
    }
    return _m
}

const API = {
    kNumFmt,
    nullFmt,
    numFloadtCount,
    numFmt,
    bytesToSize
}
Object.keys(API).forEach(key => {
    Vue.filter(key, API[key])
})
export default API
