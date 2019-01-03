import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import VueHighlightJS from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
import 'assets/scss/common.scss'

// import filters from '@/utils/dateFormat'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.use(VueHighlightJS)

// 批量注册过滤器
// Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })

Vue.config.productionTip = false

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre')
  blocks.forEach((block) => {
    VueHighlightJS.highlightBlock(block)
  })
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
