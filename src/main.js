import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/store'
import router from './router/router'

import ElementUI from 'element-ui'

import filters from './filters/index'

// import Mock from './mock/mock'

import 'assets/scss/common.scss'
import 'element-ui/lib/theme-chalk/index.css'

// Mock.start()
Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
