import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Disks from '@/components/Disks'
import AddDisk from '@/components/AddDisk'

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
    },
    {
      path: '/add-disk',
      name: 'AddDisk',
      component: AddDisk
    }
  ]
})
