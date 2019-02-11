/**
 * debug = true 开启数据打印模式
 */
const debug = true
/**
 * mock = true 开启模拟数据
 * 为了方便入门使用mock数据，默认开启
 */
const mock = true
/**
 * baseURL 接口统一默认入口
 * 登录接口:http://www.yingzaiqidian.cn/wxcode/login
 * 那么目录api里config的index.js的baseURL设置为'/api'
 * 那么你看到的请求链接是http://localhost:8080/api/wxcode/login
 * 实际请求的是http://www.yingzaiqidian.cn/wxcode/login
 */
const baseURL = '/api'
/**
 * callBack 接口统一回调
 */
const callBack = (__res) => {
    // 请求正常、请求异常等等都会通过这里，所以你可以在这里做你想做的
    // __res.data 是接口返回的数据，可以根据需求做对应的操作
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
export default {
    debug,
    mock,
    baseURL,
    callBack
}
