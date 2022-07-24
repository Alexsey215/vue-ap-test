import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    posts: [],
  },
  getters: {
    getUsers(state) {
      return state.users
    },

  },
  mutations: {
    
    setUsers(state, payload) {
      state.users = payload;
    },

    sortById(state) {
        state.users.sort((a, b) => a.id > b.id ? 1 : -1);
    },

    sortByCity(state) {
      state.users.sort((a, b) => a.address.city > b.address.city ? 1 : -1);
    },

    searchUserPhone(state, payload) {
      state.users = state.users.filter(user => user.phone.includes(payload));
    }

  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        context.commit('setUsers', users);
      } catch (e) {
        console.log(e.message);
      }
    }
  },
})
