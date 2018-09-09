/**
 * debug = true 开启数据打印模式
 */
const debug = true
/**
 * mock = true 开启模拟数据
 */
const mock = false
/**
 * baseURL 接口统一默认入口
 */
const baseURL = '/api'
/**
 * callBack 接口统一回调
 */
const callBack = (__res) => {
    let _obj = __res.data.code ? __res.data : {}

    if (_obj && _obj.code) {
        // 当code=50015或1003可能是token过期或没权限，就跳到登录页面
        if (_obj.code == '50015' || _obj.code == '10003') {
            window.location.href = '#/login'
        }
    } else {
        _obj.code = -10000
        _obj.msg = '服务异常' + __res.status
    }
    return _obj
}
/**
 * 统一打印调用方法
 * @param {需要打印的参数} _param
 */
const log = (__param) => {
    if (debug) {
        // eslint-disable-next-line
        console.log(__param)
    }
}
export default {
    debug,
    mock,
    baseURL,
    callBack,
    log
}
