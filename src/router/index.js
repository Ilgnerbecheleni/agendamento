import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CadastroClienteView from '@/views/CadastroCliente.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: CadastroClienteView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
