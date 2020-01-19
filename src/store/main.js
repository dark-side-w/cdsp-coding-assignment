import { createSettersFromStateKeys } from '../utils/store-helpers'

const initialState = {
  items: {},
  loadingItems: false,
  users: [],
  loadingUsers: false,
  item: null,
  loadingItem: false,
}

export default ({ mainApi }) => {
  const actions = {
    async fetchItems ({ commit }) {
      commit('setLoadingItems', true)
      try {
        const { items } = await mainApi.getItems()
        commit('setItems', items)
      } finally {
        commit('setLoadingItems', false)
      }
    },
    async fetchItem ({ commit }, id) {
      commit('setLoadingItem', true)
      try {
        const item = await mainApi.getItem(id)
        commit('setItem', item)
      } finally {
        commit('setLoadingItem', false)
      }
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
