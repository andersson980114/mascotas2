import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
  
  {
    path: '/mascotas',
    name: 'mascotas', 
    component: () => import(/* webpackChunkName: "mascotas" */ '../views/MascotasView.vue')
  },
  {
    path: '/adoptar',
    name: 'adoptar', 
    component: () => import(/* webpackChunkName: "adoptar" */ '../views/AdopcionView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
