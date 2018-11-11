import Vue from 'vue'
/**
 * 对文本高亮处理
 */
Vue.directive('highlightFmt', function (el, binding) {
    let _txt = el.innerText
    let _key = binding.value
    // 元字符转义
    _key = _key.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1')
    var _keyAr = _key.split(' ')
    for (var m = 0; m < _keyAr.length; m++) {
        if (_keyAr[m]) {
            var _reg = new RegExp(_keyAr[m], 'g') // gi
            _txt = _txt.replace(_reg, '<i>' + _keyAr[m].replace(/\\([.?*+^$[\]\\(){}|-])/g, '$1') + '</i>')
        }
    }
    el.innerHTML = _txt
})
