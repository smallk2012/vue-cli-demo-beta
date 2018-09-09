import axios from 'axios'

// 添加请求拦截器
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // 为了安全起见，不建议使用localStorage
    let _token = sessionStorage.getItem('token') || ''
    // ES6 扩展运算符 三个点
    // console.log(...[1, 2, 3])
    // 1 2 3
    // console.log(1, ...[2, 3, 4], 5)
    // 1 2 3 4 5
    // 只有存在token的时候才会传，比如login的时候不需要
    if (_token) {
        config.headers = {
            ...config.headers,
            token: _token
        }
    }
    return config
}, err => {
    // 对请求错误做些什么
    return Promise.reject(err)
})
