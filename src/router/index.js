import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import Backlog from '@/components/Backlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/board'
    },
    {
      path: '/board',
      name: 'Board',
      component: Board,
      props: (route) => ({
        activeListId: Number(route.query.list),
        activeCardId: Number(route.query.card)
      })
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/backlog',
      name: 'Backlog',
      component: Backlog
    }
  ]
})
