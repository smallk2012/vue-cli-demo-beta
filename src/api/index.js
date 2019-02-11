import axios from 'axios'
import cf from './config'
import url from './url'
import Qs from 'qs' // 必须引入这个处理post参数不然后端接收不到
import log from './extend/log'
import './interceptors'

function apiAxios (__method, __url, __callback, __params) {
    __params = __params || {}
    __url = __url || ''
    // 获取最后一个/后面的字段
    let _field = __url.substring(__url.lastIndexOf('/') + 1, __url.length)
    let _tagField = __url.substring(0, __url.lastIndexOf('/'))

    if (_tagField.lastIndexOf('/') != -1) {
        // 避免最后一个/后面的字段重复，取倒数第二个
        _field = _tagField.substring(_tagField.lastIndexOf('/') + 1, _tagField.length) + _field
    }
    let _key = _field
    // 阻止联系点击
    if (isDouble(_key, __params)) {
        return false
    } else {
        hash[_key] = __params
    }

    let _url = api.mock ? './static/mock' + __url + '.json' : __url
    let _baseURL = api.mock ? '' : api.baseURL
    axios({
        // mock数据的时候，所有请求都会变为GET
        method: api.mock ? 'GET' : (__method == 'POSTJSON' ? 'POST' : __method),
        url: _url,
        data: __method === 'POST' || __method === 'PUT' ? Qs.stringify(__params) : null,
        params: __method === 'POSTJSON' || __method === 'GET' || __method === 'DELETE' ? __params : null,
        baseURL: _baseURL,
        withCredentials: false,
        headers: {
            'Content-Type': __method === 'POST' || __method === 'PUT' ? 'application/x-www-form-urlencoded' : 'application/json'
        }
    })
        .then(function (res) {
            delHash(_key, __params)
            log('请求方法：' + __method)
            log('请求链接：' + _baseURL + _url)
            log('请求参数：' + JSON.stringify(__params))
            log(JSON.stringify(res.data))
            __callback && __callback(api.callBack(res))
        })
}
/**
 * 处理多次操作
 */
let hash = {}
const isDouble = (_key, _value) => {
    let _bl = false
    for (let o in hash) {
        if (o == _key && hash[o] && JSON.stringify(hash[o]) == JSON.stringify(_value)) {
            _bl = true
            break
        }
    }
    return _bl
}
const delHash = (_key, _value) => {
    if (hash[_key] && JSON.stringify(hash[_key]) == JSON.stringify(_value)) delete hash[_key]
}
let api = {
    get: (__url, __callback, __params) => {
        return apiAxios('GET', __url, __callback, __params)
    },
    post: (__url, __callback, __params) => {
        return apiAxios('POST', __url, __callback, __params)
    },
    // postJson其实是post类型，ajax post默认Content-Type不是json，这类方法不建议使用
    // 强制使用json，项目post接口出现2种类型以上，会对前后端联调带来麻烦
    postJson: (__url, __callback, __params) => {
        return apiAxios('POSTJSON', __url, __callback, __params)
    },
    promiseGet: (__url, __params) => {
        return new Promise((resolve, reject) => {
            apiAxios('GET', __url, res => {
                resolve(res)
            }, __params)
        })
    },
    promisePost: (__url, __params) => {
        return new Promise((resolve, reject) => {
            apiAxios('POST', __url, res => {
                resolve(res)
            }, __params)
        })
    }
}
// 把config的字段合并为api的一部分
Object.assign(api, cf)
// 把url的字段合并为api的一部分
Object.assign(api, { url })

export default api
