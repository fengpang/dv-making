import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'configuration',
      component: () => import('@/pages/configuration')
    },
    {
      path: '/preview',
      name: 'preview',
      component: () => import('@/pages/preview')
    }
  ]
})
