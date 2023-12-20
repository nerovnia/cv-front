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
      path: '/person',
      name: 'Person',
      component: () => import('../views/PersonView.vue')
    },
    {
      path: '/experience',
      name: 'Experience',
      component: () => import('../views/ExperienceView.vue')
    },
    {
      path: '/education',
      name: 'Education',
      component: () => import('../views/EducationView.vue')
    },
    {
      path: '/technologies',
      name: 'Technologies',
      component: () => import('../views/forms/dict/Technologies.vue')
    },
    {
      path: '/languages',
      name: 'Languages',
      component: () => import('../views/LanguagesView.vue')
    }
  ]
})

export default router
