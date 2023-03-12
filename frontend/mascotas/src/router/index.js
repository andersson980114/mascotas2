import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
  
  {
    path: '/',
    name: 'home', 
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/mascotas',
    name: 'mascotas', 
    component: () => import(/* webpackChunkName: "mascotas" */ '../views/MascotasView.vue')
  },
  {
    path: '/adoptar',
    name: 'adoptar', 
    component: () => import(/* webpackChunkName: "adoptar" */ '../views/AdopcionView.vue')
  },
  {
    path: '/user',
    name: 'user', 
    component: () => import(/* webpackChunkName: "user" */ '../views/UserFormView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
