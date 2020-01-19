import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store/index'
import createApi from './api/index'
import createAxios from './utils/create-axios'
import './plugin'

Vue.config.productionTip = false

const axios = createAxios(process.env.VUE_APP_API_BASE_URL)
const api = createApi({ axios })
const store = createStore({ ...api, axios })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Credit Suisse | Online Reporting'
  next()
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
