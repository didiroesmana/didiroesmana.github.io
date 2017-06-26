import Vue from 'vue'
import AppView from './App.vue'
import About from './About.vue'
import Home from './Home.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import * as Icon from 'vue-awesome'


Vue.component('icon', Icon)

Vue.use(Vuetify)

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/About', component: About }
]

var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(AppView)
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})