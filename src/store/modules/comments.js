import Vue from 'vue'
export default {

  state: {
    comments: [],
  },
  getters: {
    getCommentsSortByNewest: (state) => (id) => {
      return state.comments.filter((comment)=> +comment.postId === +id).sort((a, b) => a.id < b.id ? 1 : -1);
    },

    getCommentsLength: (state) => (id) => {
      return state.comments.filter((comment)=> +comment.postId === +id).length;
    }
  },

  mutations: {
    setComments(state, payload) {
      state.comments = payload;
    },

    deleteComment(state, payload) {
      let id = null;
        state.comments.findIndex((comment, idx)=>{
            if(comment.id === payload) {
                id = idx
            }
        })
      state.comments.splice(id, 1);
    },

    editComment(state, {commentId, editedComment}) {
      state.comments.findIndex((comment)=>{
          if(comment.id === commentId) {
            comment.body = editedComment
          }
      }) 
    },

    addNewComment(state, payload) {
      console.log(payload);
      state.comments.push(payload)
    }

  },
  actions: {

    async fetchComments(context) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const comments = await response.json();

        comments.forEach(comment => {
          Vue.set(comment, 'showEditForm', false)
        }); 

        context.commit('setComments', comments);
      } catch (e) {
        console.log(e.message);
        context.rootState.errorMessage = e.message || 'Oops, something went wrong'
      }
    },

  }
}
