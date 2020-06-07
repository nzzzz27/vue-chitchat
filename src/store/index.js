import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: null
  },
  getters: {
    posts: state => state.posts
  },
  mutations: {
    updatePosts(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    getPosts({ commit }) {
      axios.get(
        '/comments'
      ).then(response => {
        if (Object.keys(response.data).length == 0) return;
        console.log('a', response.data.documents)
        commit('updatePosts', response.data.documents) //ミュテーションを呼出、payloadを渡す
      })
    }
  },
  modules: {
  }
})
