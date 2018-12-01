import Vue from 'vue'
import Router from 'vue-router'
import Disks from '@/components/Disks'
import Collections from '@/components/Collections'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/collections'
    },
    {
      path: '/collections',
      name: 'Collections',
      component: Collections
    },
    {
      path: '/disks',
      name: 'Disks',
      component: Disks
    }
  ]
})
