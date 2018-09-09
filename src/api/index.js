import axios from 'axios'
import cf from './config'
import url from './url'
import Qs from 'qs' // 必须引入这个处理post参数不然后端接收不到
import './interceptors/request'
import './interceptors/response'

function apiAxios (__method, __url, __callback, __params) {
    let _url = api.mock ? './static/mock' + __url + '.json' : __url
    let _baseURL = api.mock ? '' : api.baseURL
    axios({
        // mock数据的时候，所有请求都会变为GET
        method: api.mock ? 'GET' : __method,
        url: _url,
        data: __method === 'POST' || __method === 'PUT' ? Qs.stringify(__params) : null,
        params: __method === 'GET' || __method === 'DELETE' ? __params : null,
        baseURL: _baseURL,
        withCredentials: false,
        headers: {
            'Content-Type': __method === 'POST' || __method === 'PUT' ? 'application/x-www-form-urlencoded' : 'application/json'
        }
    })
        .then(function (res) {
            if (api.debug) {
                api.log('请求方法：' + __method)
                api.log('请求链接：' + _baseURL + _url)
                api.log('请求参数：' + JSON.stringify(__params))
                // api.log(res)
                // api.log(JSON.stringify(res.data || {}))
            }
            __callback && __callback(api.callBack(res))
        })
}

let api = {
    get: (__url, __callback, __params) => {
        return apiAxios('GET', __url, __callback, __params)
    },
    post: (__url, __callback, __params) => {
        return apiAxios('POST', __url, __callback, __params)
    },
    promiseGet: (_url, _params) => {
        return ''
    },
    promisePost: (url, params) => {
        return ''
    }
}
// 把config的字段合并为api的一部分
Object.assign(api, cf)
// 把url的字段合并为api的一部分
Object.assign(api, url)
export default api
