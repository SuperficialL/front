import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import router from './router'
import Prism from 'prismjs'
import 'prismjs/themes/prism-coy.css'
// import '@/assets/js/prism'
import 'assets/scss/common.scss'
import 'element-ui/lib/theme-chalk/index.css'
import { Message, Carousel, CarouselItem, Pagination } from 'element-ui'

Vue.use(Message)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Prism)
Vue.config.productionTip = false

Vue.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    Prism.highlightElement(block)
  })
})

Vue.directive('title', (el) => {
  if (el.dataset.title === undefined) {
    document.title = `等待中... | Superficial`
  } else {
    document.title = `${el.dataset.title} | Superficial`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
