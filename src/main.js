import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Credit Suisse | Online Reporting'
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')