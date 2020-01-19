import { createSettersFromStateKeys } from '../utils/store-helpers'

const initialState = {
  items: {},
  loadingItems: false,
  users: [],
  loadingUsers: false,
}

export default ({ mainApi }) => {
  const actions = {
    async fetchItems ({ commit }, page) {
      commit('setLoadingItems', true)
      commit('setItems', await mainApi.getItems(page))
      commit('setLoadingItems', false)
    },
    async fetchUsers ({ commit }) {
      commit('setLoadingUsers', true)
      try {
        const { users } = await mainApi.getUsers()
        commit('setUsers', users)
      } finally {
        commit('setLoadingUsers', false)
      }
    }
  }

  const mutations = {}
  const getters = {}

  return {
    namespaced: true,
    state: { ...initialState },
    actions,
    mutations: {
      ...createSettersFromStateKeys(initialState),
      ...mutations,
    },
    getters,
  }
}