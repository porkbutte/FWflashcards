import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/study',
      name: 'study',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudyView.vue')
    },
    {
      path: '/createdeck',
      name: 'createdeck',
      component: () => import('../views/CreateDeckView.vue')
    },
    {
      path: '/study/generalltcjargon',
      name: '/generalltcjargon',
      component: () => import('../views/deckviews/LTCjargonView.vue')
    }
  ]
})

export default router
