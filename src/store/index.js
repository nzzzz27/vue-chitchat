import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router/index.js'
// import axios from '@/axios-auth'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    posts: null
  },
  getters: {
    idToken: state => state.idToken,
    posts: state => state.posts
  },
  mutations: {
    updateIdToken(state, payload) {
      state.idToken = payload
    },
    updatePosts(state, payload) {
      state.posts = payload
    }
  },
  actions: {
    resister({ commit }, authData) {
      axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhPvHz3eV6aN741U-diYpfODLbE5SlL7w', 
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        console.log('response', response);
        commit('updateIdToken', response.data.idToken)
        router.push('/')
      })
    },
    login({ commit }, authData) {
      axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhPvHz3eV6aN741U-diYpfODLbE5SlL7w', 
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      ).then(response => {
        commit('updateIdToken', response.data.idToken)
        router.push('/')
      })
    },
    getPosts({ commit }) {
      axios.get(
        'https://firestore.googleapis.com/v1/projects/vue-chat-82fcf/databases/(default)/documents/comments'
      ).then(response => {      
        if (Object.keys(response.data).length == 0) return;
        commit('updatePosts', response.data.documents) //ミュテーションを呼出、payloadを渡す
      }).catch(error => {
        console.log(error)
      })
    },
    addPost({ commit }, postData) {
      axios.post(
        'https://firestore.googleapis.com/v1/projects/vue-chat-82fcf/databases/(default)/documents/comments',
        {
          fields: {
            name: {
                stringValue: postData.name
            },
            comment: {
                stringValue: postData.comment
            }
          }
        }, {
          headers: {
            Authorization: `Bearer ${postData.idToken}`
          }
        }
        ).then(response => {
        commit('updatePosts', response)
      }).catch(error => {
        console.log('error !!');
        console.log(error.response.data.error);
      })
    }
  },
  modules: {
  }
})
