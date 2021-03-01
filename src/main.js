import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/toast/index'
import lazyload from 'vue-lazyload'
// 注册toast插件
Vue.use(toast)
// 注册lazyload插件
Vue.use(lazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
