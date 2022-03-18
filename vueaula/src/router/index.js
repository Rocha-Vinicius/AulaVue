import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaClubes from '../views/ListaClubes.vue'
import MeuInicio from '../views/MeuInicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: MeuInicio
  },
  {
    path: '/listaclubes',
    name: 'ListaClubes',
    component: ListaClubes
  },

]

const router = new VueRouter({
  routes
})

export default router
