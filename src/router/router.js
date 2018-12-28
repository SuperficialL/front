import Router from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
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
