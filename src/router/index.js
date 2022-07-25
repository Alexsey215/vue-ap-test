import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersView from '../views/UsersView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/users',
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
  },
  {
    path: '/users/:id/posts',
    name: 'posts',
    component: ()=> import(/* webpackChunkName: 'posts' */ '../components/UserPostsList'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
