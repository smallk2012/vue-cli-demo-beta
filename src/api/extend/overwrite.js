/**
 * 标准的四舍五入法
 */
// eslint-disable-next-line
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
