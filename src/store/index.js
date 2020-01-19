import Vue from 'vue'
import Vuex from 'vuex'

import createMainStore from './main'

Vue.use(Vuex)

export default (deps) => {
  return new Vuex.Store({
    modules: {
      main: createMainStore(deps)
    },
  })
}
