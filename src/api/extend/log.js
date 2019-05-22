import api from '@/api'
/**
 * 统一打印调用方法
 * @param {需要打印的参数} _arg
 */
const log = (...arg) => {
    if (api.debug) {
        // eslint-disable-next-line
        console.log.apply(console, arg)
    }
}
export default log
