import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    posts: []
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users)
        context.commit('setUsers', users);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
})
