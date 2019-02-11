/* eslint-disable */ 
/**
 * 标准的四舍五入法
 */
Number.prototype.toFixed = function (d) {
    var s = this + ''
    if (!d) d = 0
    if (s.indexOf('.') == -1) s += '.'
    s += new Array(d + 1).join('0')
    if (new RegExp('^(-|\\+)?(\\d+(\\.\\d{0,' + (d + 1) + '})?)\\d*$').test(s)) {
        var str = '0' + RegExp.$2
        var pm = RegExp.$1
        var a = RegExp.$3.length
        var b = true
        if (a == d + 2) {
            a = str.match(/\d/g)
            if (parseInt(a[a.length - 1]) > 4) {
                for (var i = a.length - 2; i >= 0; i--) {
                    a[i] = parseInt(a[i]) + 1
                    if (a[i] == 10) {
                        a[i] = 0
                        b = i != 1
                    } else {
                        break
                    }
                }
            }
            str = a.join('').replace(new RegExp('(\\d+)(\\d{' + d + '})\\d$'), '$1.$2')
        }
        if (b) {
            str = str.substr(1)
        }
        return (pm + str).replace(/\.$/, '')
    }
    return this + ''
}
/*
对Date的扩展，将 Date 转化为指定格式的String
月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
(new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2019-02-11 07:00:25.234
(new Date()).format("yyyy-M-d h:m:s.S")      ==> 2019-02-11 7:0:0.16
*/
Date.prototype.format = function (fmt = 'yyyy-MM-dd') {
    var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'H+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
    return fmt
}