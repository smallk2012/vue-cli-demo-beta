import axios from 'axios'
import session from '@/api/extend/session'
/*
let pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let removePending = (config) => {
    for (let p in pending) {
        if (pending[p].u === config.url + '&' + config.method) { // 当当前请求在数组中存在时执行函数体
            pending[p].f() // 执行取消操作
            pending.splice(p, 1) // 把这条记录从数组中移除
        }
    }
}
*/
// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // 为了安全起见，不建议使用localStorage
    // 一般前后端验证靠token
    // 如果你的验证字段不喊token
    // 喊abc或有多个字段
    // 那么session.set('token',{abc:'你的验证字段',acc:'cC'})
    let _token = session.get('token')
    // ES6 扩展运算符 三个点
    // console.log(...[1, 2, 3])
    // 1 2 3
    // console.log(1, ...[2, 3, 4], 5)
    // 1 2 3 4 5
    // 只有存在token的时候才会传，比如login的时候不需要
    if (_token) {
        _token = typeof (_token) == 'string' ? { token: _token } : _token
        config.headers = {
            ...config.headers,
            ..._token
        }
    }
    /*
    // 暂时不用这样取消重复操作方法，因为response.use使用Promise.reject(err)处理，浏览器会标红，本人不习惯，而且回调方法还得做额外处理。。。太麻烦了
    removePending(config) // 在一个ajax发送前执行一下取消操作
    config.cancelToken = new axios.CancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c })
    })
    */
    return config
}, err => {
    // 对请求错误做些什么
    return Promise.reject(err)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    // removePending(response.config) // 在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
    return response
}, (err) => {
    // 对响应错误做点什么
    // 使用reject就直接报异常不往下执行
    /*
    if (axios.isCancel(err)) {
        return Promise.reject(err)
    }
    */
    return Promise.resolve(err.response || { data: {} })
})
