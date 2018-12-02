import Vue from 'vue'
import api from '@/services/DisksCatalogApi'

const state = {
  all: []
}

const getters = {}

const actions = {
  async getAllDisks({commit}) {
    let disks = await api.getAllDisks();
    commit('setDisks', disks);
  },
  
  async createDisk({commit}, params) {
    let disk = await api.createDisk(params);
    commit('addDisk', disk)
  },

  async deleteDisk({commit}, id) {
    await api.deleteDisk(id);
    commit('deleteDisk', id);
  },

  async editDisk({commit}, disk) {
    let editedDisk = await api.editDisk(disk);
    commit('editDisk', editedDisk);
  }
}

const mutations = {
  setDisks(state, disks) {
    state.all = disks;
  },

  addDisk(state, disk) {
    state.all.push(disk);
  },

  deleteDisk(state, id) {
    state.all = state.all.filter(disk => {
      return disk.id != id;
    })
  },

  editDisk(state, editedDisk) {
    let diskIndex = state.all.findIndex(disk => disk.id === editedDisk.id);
    Vue.set(state.all, diskIndex, editedDisk);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
