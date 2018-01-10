import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import Lists from '@/components/Lists'
import Backlog from '@/components/Backlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/board',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/cards/:id',
      name: 'Board',
      component: Board,
      props: (route) => ({
        id: Number(route.params.id)
      })
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/lists',
      name: 'Lists',
      component: Lists
    },
    {
      path: '/backlog',
      name: 'Backlog',
      component: Backlog
    }
  ]
})
