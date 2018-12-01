import Vue from 'vue'
import Vuex from 'vuex'
import disks from './modules/disks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    disks
  }
})
