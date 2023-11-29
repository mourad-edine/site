import { createRouter, createWebHistory } from 'vue-router'
import service from '../components/service.vue'
import Home from '../components/Home.vue'
import propos from '../components/propos.vue'
import contact from '../components/contact.vue'
import bureau from '../components/infobureautique.vue'
import development from '../components/developpement.vue'
import entre from '../components/entreprenariat.vue'
import Langue from '../components/langue.vue'
import Programmation from '../components/infoprogrammation.vue'
import mission from '../components/missions.vue'
import valeur from '../components/valeur.vue'
import application from '../components/Application.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/about',
      name: 'about',
      component: propos
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/bureautique',
      name: 'bureautique',
      component: bureau
    },

    {
      path: '/developpement',
      name: 'developpement',
      component: development
    },

    {
      path: '/entrepreneur',
      name: 'entrepreneur',
      component: entre
    },

    {
      path: '/langue',
      name: 'langue',
      component: Langue
    },

    {
      path: '/programmation',
      name: 'programmation',
      component: Programmation
    },

    {
      path: '/missions',
      name: 'missions',
      component: mission
    },

    {
      path: '/valeur',
      name: 'valeur',
      component: valeur
    },
    {
      path: '/dev',
      name: 'dev',
      component: application
    },
  ]
})

export default router
