import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CuisineView from '../views/CuisineView.vue'
import GrenierView from '../views/GrenierView.vue'
import SalonView from '../views/SalonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/chambre',
      name: 'chambre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ChambreView.vue')
    },
    {
      path: '/cuisine',
      name: 'cuisine',
      component: CuisineView
    },
    {
      path: '/grenier',
      name: 'grenier',
      component: GrenierView
    },
    {
      path: '/salon',
      name: 'salon',
      component: SalonView
    }
  ]
})

export default router
