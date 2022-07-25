import Vue from 'vue'

export default {

  state: {
    posts: [],
  },
  getters: {
    getDescendingUserPosts: (state) => (id) => {
      return state.posts.filter((post)=> +post.userId === +id).sort((a, b) => a.id > b.id ? 1 : -1);
    },
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    },
  },
  actions: {

    async fetchPosts(context) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        posts.forEach(post => {
          Vue.set(post, 'showComments', false)
        });

        context.commit('setPosts', posts);
      } catch (e) {
        console.log(e.message);
        context.rootState.errorMessage = e.message || 'Oops, something went wrong'
      }
    }

  },
}