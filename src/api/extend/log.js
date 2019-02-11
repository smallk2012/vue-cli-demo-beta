import api from '@/api'
/**
 * 统一打印调用方法
 * @param {需要打印的参数} __arguments
 */
const log = (...__arguments) => {
    if (api.debug) {
        // eslint-disable-next-line
        console.log.apply(this, __arguments)
    }
}
export default {
    log
}
