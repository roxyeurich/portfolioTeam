import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import posts from './views/Post.vue'
import Create from './views/Create.vue' 
import Portfolio from './views/Portfolio.vue'
import PostTemplate from './views/PostTemplate.vue'

Vue.use(Router) 

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/posts',
      name: 'posts',
      component: posts
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
      {
      path: '/portfolio',
      name: 'portfolio',
      
      component: () => import(/* webpackChunkName: "about" */ './views/Portfolio.vue')
    },
       {
      path: '/template',
      name: 'template',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded whesn the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/PostTemplate.vue')
    }
  ]
})
