import { createSettersFromStateKeys } from '../utils/store-helpers'

const initialState = {
  items: {},
  loadingItems: false,
  users: null,
  loadingUsers: false,
  item: null,
  loadingItem: false,
  loading: false
}

export default ({ mainApi }) => {
  const actions = {
    async fetchItems ({ commit, state }) {
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
    async fetchUsers ({ commit, state }) {
      if (state.users) {
        return
      }
      commit('setLoadingUsers', true)
      try {
        const { users } = await mainApi.getUsers()
        commit('setUsers', users)
      } finally {
        commit('setLoadingUsers', false)
      }
    },
    async submitItem ({ commit }, item ) {
      console.log(item)
      commit('setLoading', true)
      try {
        return await mainApi.submit(item)
          .then(response => {
            return response.data
          })
          .catch((error) => {
            return error
          })
      } finally {
        commit('setLoading', false)
      }
    },
    async sendEmail ({ commit }, { requestor, storyteller } ) {
      console.log(requestor, storyteller)
      commit('setLoading', true)
      try {
        return await mainApi.sendEmail(requestor, storyteller)
          .then(response => {
            return response.data
          })
          .catch((error) => {
            return error
          })
      } finally {
        commit('setLoading', false)
      }
    }
  }

  const mutations = {
    setEmptyItem (state) {
      state.item = {
        RequestName: null,
        Requestor: null,
        GoodEnding: null,
        Description: null,
        NeedStoryteller: null,
        Storyteller: false,
        WantedCharacters: null,
        Deadline: null,
        Budget: null,
        Status: null,
      }
    }
  }
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
