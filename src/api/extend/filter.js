import Vue from 'vue'
// let _this = Vue.prototype
// 接口字段有可能出现3种情况
// undefined(要的字段没有返回)
// null(数据不存在)
// 空字符串(可能人为设置)
/**
 * 千分位
 * 只对数字有效
 */
Vue.filter('kNumFmt', function (__num) {
    if (__num === undefined || __num === null || isNaN(__num) || __num === '') {
        return __num
    }
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
})
/**
 * 在项目中对无值字段的处理方式
 */
Vue.filter('nullFmt', function (__value, __unit, __flag) {
    __flag = __flag || '--'
    __unit = __unit || ''
    if (__value === undefined || __value === null || __value === '') {
        return __flag
    } else {
        return __value + __unit
    }
})
/**
 * 数字小数点个数
 * 只支持数字
 */
Vue.filter('numFloadtCount', function (__num, __floatCount, __zeroLimit) {
    if (__num === undefined || __num === null || isNaN(__num) || __num === '') {
        return __num
    }
    if (__zeroLimit && __num == 0) {
        return __num
    }
    return __num.toFixed(__floatCount)
})
/**
 * 对字节的转换处理
 */
Vue.filter('bytesToSize', function (__bytes, __floatCount) {
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
})
