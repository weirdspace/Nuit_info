import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {

    path: '/game',
    name: 'game',
    // route level code-splitting
    // this generates a separate chunk (game.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "game" */ '../views/GameView.vue')
  },
  
  {
    path: '/puzzleGo',
    name: 'puzzleGo',
    component: () => import(/* webpackChunkName: "puzzleGo" */ '../views/PuzzleGo.vue')
  },

  {
    path: '/escape-game/victory',
    name: 'victory',
    component: () => import('@/views/VictoryView.vue')

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
