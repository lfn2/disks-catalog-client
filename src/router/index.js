import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Disks from '@/components/Disks'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/disks',
      name: 'Disks',
      component: Disks
    }
  ]
})
