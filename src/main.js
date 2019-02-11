import Vue from 'vue'
import api from './api'
import App from './App'
import router from './router'
import local from './api/extend/local'
import session from './api/extend/session'
// 封装了常用方法
import log from './api/extend/log'
import filter from './api/extend/filter'
import './api/extend/overwrite'
import './api/extend/directive'
// 以下项目中不需要使用就注释掉
import store from './vuex/store'

Vue.prototype.$api = api
Vue.prototype.$local = local
Vue.prototype.$session = session
Vue.prototype.$filter = filter
Vue.prototype.$log = log

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')
