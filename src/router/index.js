import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

Vue.use(Router)
const router = new Router(config)
router.beforeEach((to, from, next) => {
    /*
    if (to.path == '/login') {
      sessionStorage.removeItem('user');
    }
    let user = JSON.parse(sessionStorage.getItem('user'))
    if (!user && to.path != '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
    */
    next()
})
export default router
