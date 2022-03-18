import Vue from 'vue'
import VueRouter from 'vue-router'
import ListaClubes from '../views/ListaClubes.vue'
import MeuInicio from '../views/MeuInicio.vue'
import TelaLogin from '../views/TelaLogin.vue'
import CadastroUsuario from '../views/CadastroUsuario.vue'
import AnaliseCadastro from '../views/AnaliseCadastro.vue'
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
  {
    path: '/login',
    name: 'TelaLogin',
    component: TelaLogin
  },
  {
    path: '/cadastrousuario',
    name: 'CadastroUsuario',
    component: CadastroUsuario
  },
  {
    path: '/analisecadastro',
    name: 'AnaliseCadastro',
    component: AnaliseCadastro
  },


]

const router = new VueRouter({
  routes
})

export default router
