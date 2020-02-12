import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home/Home'),
      children: [
        {
          path: '/',
          redirect: 'homepage'
        },
        {
          path: 'homepage',
          name: 'Homepage',
          component: () => import('@/components/home/homepage')
        },
        {
          path: 'classify',
          name: 'Classify',
          component: () => import('@/components/home/classify')
        },
        {
          path: 'shoppingcart',
          name: 'Shoppingcart',
          component: () => import('@/components/home/shoppingcart')
        },
        {
          path: 'mine',
          name: 'Mine',
          component: () => import('@/components/home/mine')
        }
      ]
    }
  ]
})
