import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import posts from './modules/posts'
import comments from './modules/comments'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    errorMessage: ''
  },
  getters: {
      getErrorMessage(state) {
        return state.errorMessage
      }
  },
  modules: {
    users,
    posts,
    comments,
  }
})
