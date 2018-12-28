import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import single from './modules/single'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    single
  }
})
