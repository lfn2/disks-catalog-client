import Vue from 'vue';
import Vuex from 'vuex';
import disks from './modules/disks';
import collections from './modules/collections';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    disks,
    collections
  }
});
