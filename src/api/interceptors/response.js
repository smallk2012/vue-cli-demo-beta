import axios from 'axios'

// 添加响应拦截器
axios.interceptors.response.use(response => {
    // 对响应数据做点什么
    return response
}, (err) => {
    // 对响应错误做点什么
    // 使用reject就直接报异常不往下执行
    return Promise.resolve(err.response)
})
