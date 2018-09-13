/**
 * debug = true 开启数据打印模式
 */
const debug = true
/**
 * mock = true 开启模拟数据
 */
const mock = true
/**
 * baseURL 接口统一默认入口
 * 登录接口:http://www.yingzaiqidian.cn/wx/login
 * 新闻接口:http://www.yingzaiqidian.cn/qq/news
 * 那么在proxyTable做跨越配置的时候，看到的链接是
 * http://localhost:8080/api/wx/login
 * http://localhost:8080/api/qq/news
 * /api就是作为一个统一替换符，实际上http://localhost:8080/api = http://www.yingzaiqidian.cn
 * 在.vue文件只需使用/wx/login和/qq/news相对路径
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
