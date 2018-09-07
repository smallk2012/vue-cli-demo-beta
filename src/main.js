import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
}).$mount('#app')
