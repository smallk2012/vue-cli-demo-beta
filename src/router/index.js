import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

Vue.use(Router)
const router = new Router(config)
let _this = Vue.prototype
router.beforeEach((to, from, next) => {
    // 这里写你的一些页面跳转控制逻辑
    _this.$log(to)
    if (to.path == '/login') {
        _this.$session.del('token')
        next()
    } else {
        if (to.query.token || _this.$session.get('token')) {
            // 登录了
            next()
        } else {
            next('/login')
        }
    }
})
export default router
