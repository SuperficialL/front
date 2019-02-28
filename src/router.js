import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home/index'
import Detail from './pages/detail'
import Category from './pages/category'
import Tag from './pages/tag'
import search from './pages/search'
import Loading from './components/Loading'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.baseUrl,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      name: 'index',
      path: '/',
      component: Home
    },
    {
      name: 'categories',
      path: '/categories/:id',
      component: Category
    },
    {
      name: 'tag',
      path: '/tag/:id',
      component: Tag
    },
    {
      name: 'loading',
      path: 'loading',
      component: Loading
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail
    },
    {
      name: 'search',
      path: 'search',
      component: search
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
})

// 路由全局拦截-进入页面前
 router.beforeEach((to, from, next) => {
   // console.log(to.params)
   next()
})

export default router
