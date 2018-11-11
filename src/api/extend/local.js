const local = {
    get: (__key) => {
        var _data = localStorage[__key]
        if (!_data || _data === 'null') {
            return null
        }
        var _now = local.getCurrentTimeStamp()
        var _obj
        try {
            _obj = JSON.parse(_data)
        } catch (e) {
            return null
        }
        if (_obj.expiryTime === 0 || _obj.expiryTime > _now) {
            return _obj.value
        }
        return null
    },
    set: (__key, __value, __duration) => {
        var _data = {
            value: __value,
            expiryTime: !__duration || isNaN(__duration) ? 0 : local.getCurrentTimeStamp() + parseInt(__duration)
        }
        localStorage[__key] = JSON.stringify(_data)
    },
    del: (__key) => {
        localStorage.removeItem(__key)
    },
    getCurrentTimeStamp: () => {
        return Date.parse(new Date())
    }
}
export default local
