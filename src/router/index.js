import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board'
import Config from '@/components/Config'
import Tags from '@/components/Tags'
import Backlog from '@/components/Backlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Board',
      component: Board
    },
    {
      path: '/config',
      name: 'Config',
      component: Config
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/backlog',
      name: 'Backlog',
      component: Backlog
    }
  ]
})
