import Vue from 'vue'
import api from './api'
import App from './App'
import router from './router'
import local from './api/extend/local'
import session from './api/extend/session'
// 以下项目中不需要使用就注释掉
import './api/extend/overwrite'
import filter from './api/extend/filter'
import './api/extend/directive'
import store from './vuex/store'

Vue.prototype.$api = api
Vue.prototype.$local = local
Vue.prototype.$session = session
Vue.prototype.$filter = filter

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')
