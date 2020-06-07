import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '@/plugins/firebase'
import '@/plugins/db'

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://firestore.googleapis.com/v1/projects/vue-chat-82fcf/databases/(default)/documents'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
