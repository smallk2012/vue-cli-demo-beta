const session = {
    get: (__key) => {
        var _data = sessionStorage[__key]
        if (!_data || _data === 'null') {
            return null
        }
        var _now = session.getCurrentTimeStamp()
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
            expiryTime: !__duration || isNaN(__duration) ? 0 : session.getCurrentTimeStamp() + parseInt(__duration)
        }
        sessionStorage[__key] = JSON.stringify(_data)
    },
    del: (__key) => {
        sessionStorage.removeItem(__key)
    },
    getCurrentTimeStamp: () => {
        return Date.parse(new Date())
    }
}
export default session
