import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Detail from './pages/detail'
import Category from './pages/category'
import Tag from './pages/tags'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  base: process.env.baseUrl,
  // linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: false,
        isShowLoading: true
      }
    },
    {
      path: '/category/:id',
      name: 'category',
      component: Category,
      meta: {
        keepAlive: false,
        isShowLoading: false
      }
    },
    {
      path: '/tag/:id',
      name: 'tag',
      component: Tag,
      meta: {
        keepAlive: false,
        isShowLoading: false
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta: {
        keepAlive: false,
        isShowLoading: false
      }
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
/* router.beforeEach((to, from, next) => {
  to.meta.isShowLoading
  next()

  // 设置页面标题
  document.title = to.meta.title || 'vue-cli 3.x'
}) */

export default router
