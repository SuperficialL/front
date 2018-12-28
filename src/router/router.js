import Router from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/page',
      name: 'page',
      component: Home
    },
    {
      path: '/system',
      name: 'system',
      component: Home
    },
    {
      path: '/database',
      name: 'database',
      component: Home
    },
    {
      path: '/linux',
      name: 'linux',
      component: Home
    },
    {
      path: '/program',
      name: 'program',
      component: Home
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/category/:id',
      name: 'category'
      // component: Category
    }
  ]
})
