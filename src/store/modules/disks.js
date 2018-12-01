import api from '@/services/DisksCatalogApi'

const state = {
  all: []
}

const getters = {}

const actions = {
  async getAll({commit}) {
    let disks = await api.getAllDisks();
    commit('setDisks', disks);
  }
}

const mutations = {
  setDisks(state, disks) {
    state.all = disks;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
