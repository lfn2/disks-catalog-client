import Vue from 'vue'
import Router from 'vue-router'
import Disks from '@/components/disks/Disks'
import Collections from '@/components/collections/Collections'
import Collection from '@/components/collections/Collection'

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
      path: '/collections/:id',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/disks',
      name: 'Disks',
      component: Disks
    }
  ]
})
