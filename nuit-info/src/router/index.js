import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GameAndArticleView from '../views/GameAndArticleView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

   {
    path: '/escape-game/1',
    name: 'puzzleGo',
    component: GameAndArticleView
  },
  {
    path: '/escape-game/2',

    name: 'WordFinder',
    component: GameAndArticleView // Utilisation de votre composant WordFinder pour cette route

  },
  {
    path: '/escape-game/3',
    name: 'snakeGo',
    component: GameAndArticleView
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
