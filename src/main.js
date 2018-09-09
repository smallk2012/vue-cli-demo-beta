import Vue from 'vue'
import store from './vuex/store'
import api from './api'
import App from './App'
import router from './router'

Vue.prototype.$api = api

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')
