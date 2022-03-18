import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaClubes from '../views/ListaClubes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListaClubes',
    component: ListaClubes
  },

]

const router = new VueRouter({
  routes
})

export default router
