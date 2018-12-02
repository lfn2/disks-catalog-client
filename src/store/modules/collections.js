import api from '@/services/DisksCatalogApi'

const state = {
  all: []
}

const getters = {}

const actions = {
  async getAllCollections({commit}) {
    let collections = await api.getAllCollections();
    commit('setCollections', collections);
  },

  async deleteCollection({commit}, id) {
    await api.deleteCollection(id);
    commit('deleteCollection', id);
  },

  async createCollection({commit}, params) {
    let collection = await api.createCollection(params);
    commit('addCollection', collection);
  },
}

const mutations = {
  setCollections(state, collections) {
    state.all = collections;
  },

  deleteCollection(state, id) {
    state.all = state.all.filter(collection => {
      return collection.id != id;
    })
  },

  addCollection(state, collection) {
    state.all.push(collection);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
